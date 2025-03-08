import { PrismaClient, UserType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.user.upsert({
		where: { id: "67c7064d13d130902d5877ca" },
		update: {},
		create: {
			id: "67c7064d13d130902d5877ca",
			email: "maik@email.com",
			firstName: "Maik",
			lastName: "Maik",
			password: "$2b$05$rV5dzsnw/BsnKTWjLdWjrO6hHJ/8UMci0z3NVS0F1xfT0HUPLRZIq", // wRkW114dM1n
			userType: UserType.ADMIN,
		},
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
