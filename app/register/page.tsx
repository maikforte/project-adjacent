"use client";

// Styles
import classes from "./page.module.scss";
// Components
import { UseFormReturnType } from "@mantine/form";
import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";
// Services
import AuthenticationService from "@/services/authentication.service";
import { RegisterUserForm } from "@/types/types";

export default function Register() {
	/**
	 * AuthenticationService instance
	 */
	const authService = new AuthenticationService();

	/**
	 * Register a new user
	 *
	 * @param form - The form object containing user registration details
	 */
	const register = async (form: UseFormReturnType<RegisterUserForm>) => {
		const { email, password, firstName, lastName } = form.getValues();

		try {
			const response = await authService.register(email, password, firstName, lastName);
			const data = await response.json();
			if (response.status === 400) {
				form.setErrors(data);
				return false; // User registration failed
			} else if (response.status === 200) {
				return data; // User registration successful
			}
		} catch (error) {
			console.error(error);
			return false; // User registration failed
		}
	};

	return (
		<>
			<RegisterForm register={register} />
		</>
	);
}
