import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Successfull logout",
      success: true,
    });

    // through this response we can actaully get access to cookies and remove it
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

    return response;
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
