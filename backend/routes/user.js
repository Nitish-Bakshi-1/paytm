const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const z = require("zod");
const { Account, User } = require("../db");
const JWT_SECRET = require("../config");
const authMiddleware = require("../middleware");

const signupSchema = z.object({
  username: z.string().toLowerCase().trim().min(3).max(30).email(),
  firstName: z.string().trim().max(50),
  lastName: z.string().trim().max(50),
  password: z.string().trim().min(6),
});
const signinSchema = z.object({
  username: z.string().min(3).max(30).trim().toLowerCase().email(),
  password: z.string().min(6).trim(),
});
const updateBodySchema = z.object({
  firstName: z.string().trim().max(50).optional(),
  lastName: z.string().trim().max(50).optional(),
  password: z.string().trim().min(6).optional(),
});

router.post("/signup", async function (req, res) {
  const { username, firstName, lastName, password } = req.body;

  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    res.json({
      message: "invalid inputs/ email not available",
      success: false,
    });
  }
  const user = await User.findOne({ username });
  if (user) {
    res.json({
      message: "user with same username already exsits",
    });
  }
  const createdUser = await User.create({
    username,
    firstName,
    lastName,
    password,
  });

  const acc = await Account.create({
    userId: createdUser._id,
    balance: 1 * Math.random() * 10000,
  });

  const token = jwt.sign({ userId: createdUser._id }, JWT_SECRET);

  res.json({
    token,
    msg: "user created successfully",
    acc,
  });
});

router.post("/signin", async function (req, res) {
  const { username, password } = req.body;
  const { success } = signinSchema.safeParse(req.body);

  if (!success) {
    res.json({
      msg: "invalid inputs",
    });
  }

  const user = await User.findOne({ username, password });

  if (!user) {
    res.json({
      msg: "user not found signup first",
    });
  }
  const token = jwt.sign({ userId: user._id }, JWT_SECRET);
  res.json({
    token,
    msg: "signin successful",
  });
});
router.put("/", authMiddleware, async function (req, res) {
  const body = req.body;

  const verification = updateBodySchema.safeParse(body);

  if (!verification.success) {
    res.json({
      msg: "invalid inputs",
    });
  }
  await User.updateOne({ _id: req.userId }, req.body);

  res.json({
    msg: "user updated",
  });
});
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
