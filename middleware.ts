import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
	// `withAuth` augments your `Request` with the user's token.
	function middleware(req) {
		const token = req.nextauth.token;
		console.log("Session token:", token);

		// if (!token) {
		// 	return NextResponse.redirect(new URL("/login", req.url));
		// }
		
	}
);

export const config = { matcher: ["/dashboard"] };
