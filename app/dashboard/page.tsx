"use client";

import { redirect, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@mantine/core";
import TestService from "@/services/test.service";

export default function Dashboard() {
	// const session = useSession();
	// const router = useRouter();

	// if (!session) {
	// 	return <>Loading...</>;
	// }

	// if (session.status === "unauthenticated") {
	// 	redirect("/login");
	// 	return <>Redirecting...</>;
	// }

	// if (session.status === "authenticated") {
	// 	return (
	// 		<>
	// 			<Button onClick={() => signOut()}>Sign Out</Button>
	// 		</>
	// 	);
	// }

	const testService = new TestService();

	const handleTest = async () => {
		const response = await testService.test();
		console.log(response);
	};

	return (
		<>
			<Button onClick={() => signOut()}>Sign Out</Button>
			<Button onClick={handleTest}>Test</Button>
		</>
	);
}
