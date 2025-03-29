import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getToken } from "next-auth/jwt";

export const GET = async (req: NextRequest) => {
	const session = await getServerSession(authOptions);
	const token = await getToken({ req });

	return NextResponse.json(session);
}