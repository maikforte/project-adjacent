import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
	const reqBody = await req.json();

	const comparatorUser = await prisma.user.findFirst({
		select: {
			password: true,
		},
		where: {
			email: reqBody.email,
		},
	});

	if (!comparatorUser) {
		return NextResponse.json({ email: "Invalid E-mail address" }, { status: 401 });
	}

	const isPasswordMatch = await bcrypt.compareSync(reqBody.password, comparatorUser.password);

	if (!isPasswordMatch) {
		return NextResponse.json({ password: "Invalid password" }, { status: 401 });
	}

	const user = await prisma.user.findFirst({
		select: {
			id: true,
			email: true,
			firstName: true,
			lastName: true,
			userType: true,
		},
		where: {
			email: reqBody.email,
		},
	});

	return NextResponse.json("Logged in successfully!", { status: 200 });
};
