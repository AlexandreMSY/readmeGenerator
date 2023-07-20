import { NextRequest } from "next/server"

export async function POST(request) {
    const body = await request.json()
    console.log(body);
    return NextRequest.json(body)
}