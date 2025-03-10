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

	/**
	 * Logs in a user with the provided email and password.
	 *
	 * @param email - The email address of the user.
	 * @param password - The password for the user's account.
	 * @returns A promise that resolves to the response of the login request.
	 */
	login(email: string, password: string) {
		return fetch("/api/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		});
	}
}

export default AuthenticationService;
