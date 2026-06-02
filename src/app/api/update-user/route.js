import { NextResponse } from "next/server";

import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(
    process.env.MONGODB_URI
);

export async function PATCH(req) {

    try {

        const body =
            await req.json();

        const {
            id,
            name,
            image,
            location,
        } = body;

        await client.connect();

        const db =
            client.db("wanderlust");

        const users =
            db.collection("user");

        const result =
            await users.updateOne(
                {
                    _id: new ObjectId(
                        id
                    ),
                },
                {
                    $set: {
                        name,
                        image,
                        location,
                    },
                }
            );

        return NextResponse.json({
            success: true,
            result,
        });

    } catch (error) {

        return NextResponse.json(
            {
                success: false,
                message:
                    error.message,
            },
            {
                status: 500,
            }
        );
    }
}