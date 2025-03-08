/**
 * AuthenticationService handles user registration and authentication.
 */
class AuthenticationService {

	/**
	 * Registers a new user with the provided email, password, first name, and last name.
	 * 
	 * @param email - The email address of the user.
	 * @param password - The password for the user's account.
	 * @param firstName - The first name of the user.
	 * @param lastName - The last name of the user.
	 * @returns A promise that resolves to the response of the registration request.
	 */
	register(email: string, password: string, firstName: string, lastName: string) {
		return fetch("/api/auth/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password, firstName, lastName }),
		});
	}
}

export default AuthenticationService;
