import mongoose from "mongoose";
import { NextApiRequest } from "next";
import { User  } from "@/app/models/User"

export async function POST( req:NextApiRequest ) {
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);
    const createdUser = await User.create(body)
    return Response.json(createdUser );
}