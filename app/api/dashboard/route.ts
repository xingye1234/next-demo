import { NextResponse } from "next/server";

export function GET(req:Request, res:Response){
    return NextResponse.json({hello: 'world'})
}