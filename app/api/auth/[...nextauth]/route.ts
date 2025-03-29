import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const res = await fetch("http://localhost:3000/api/auth/login", {
					method: "POST",
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" },
				});
				const user = await res.json();

				if (res.ok && user) {
					console.log(user);
					return user;
				}

				return null;
			},
		}),
	],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
