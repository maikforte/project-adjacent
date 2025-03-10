"use client";

// Styles
import classes from "./page.module.scss";
// Components
import LoginForm from "@/components/Forms/LoginForm/LoginForm";
// Types
import { LoginUserForm } from "@/types/types";
import { UseFormReturnType } from "@mantine/form";

export default function Login() {
	/**
	 * Login a user
	 *
	 * @param form - The form object containing user login details
	 */
	const login = async (form: UseFormReturnType<LoginUserForm>) => {
		const { email, password } = form.getValues();

		console.log(email, password);
	};

	return (
		<>
			<LoginForm login={login} />
		</>
	);
}
