import User from "../Models/user.schema.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body; // Destructure fields from req.body
    const hashPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPassword, // Replace plain text password with hashed password
    });
    await newUser.save();
    res.status(201).json({
      message: "users created Successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error in Create User" });
  }
};

export const getUserAll = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error Fetching the data",
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ userId: id });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server Error",
    });
  }
};

export const userLogin = async(req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(401).json({
                message: "User not Found"
            })
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch){
            return res.status(401).json({
                message: "Invalid Password"
            })
        }
        res.status(200).json({
            message: "Login Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Internal server Error",
        });
    }
}

export const verifyEmail = async(req,res) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({email:email})
        if(!user){
            return res.status(401).json({
                message:"User not Found"
            })
        }
        res.status(200).json({
            message: "Mail sent"
        })
    } catch (error) {
       console.log(error);
       res.status(500).json({
        message: "Internal Server Error"
       })
    }
}