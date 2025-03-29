import "@mantine/core/styles.css";

import React from "react";
import { getServerSession } from "next-auth";
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";
import SessionProvider from "@/components/NextAuth/SessionProvider";
import { theme } from "../theme";

export const metadata = {
	title: "Mantine Next.js template",
	description: "I am using Mantine with Next.js!",
};

export default async function RootLayout({ children }: { children: any }) {
	const session = await getServerSession();

	return (
		<html lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript />
				<link rel="shortcut icon" href="/favicon.svg" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
			</head>
			<body>
				<MantineProvider theme={theme}>
					<SessionProvider session={session}>{children}</SessionProvider>
				</MantineProvider>
			</body>
		</html>
	);
}
