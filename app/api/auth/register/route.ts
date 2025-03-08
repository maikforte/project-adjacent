import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
	const reqBody = await req.json();
	const saltRounds = 5;
	const salt = bcrypt.genSaltSync(saltRounds);
	const hashPassword = bcrypt.hashSync(reqBody.password, salt);

	const existingUser = await prisma.user.findFirst({
		where: {
			email: reqBody.email,
		},
	});

	if (existingUser) {
		return NextResponse.json({ email: "User already exists!" }, { status: 400 });
	}

	const user = await prisma.user.create({
		data: {
			email: reqBody.email,
			password: hashPassword,
			firstName: reqBody.firstName,
			lastName: reqBody.lastName,
		},
	});

	return NextResponse.json(user, { status: 200 });
};
