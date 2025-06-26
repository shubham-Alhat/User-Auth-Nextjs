import connectToDb from "@/config/dbConnection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectToDb();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody); // console logs

    // check if user already exist
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ error: "User already exist", status: 400 });
    }

    // hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // create entry, this method gives us more control over processing data before save in db
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    const savedUser = await newUser.save();

    // return the response
    return NextResponse.json({
      message: "User saved in db successfully",
      data: savedUser,
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      status: 500,
    });
  }
}
