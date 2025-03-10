"use client";

// Styles
import classes from "./page.module.scss";
// Mantine
import { UseFormReturnType } from "@mantine/form";
// Components
import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import AuthenticationService from "@/services/authentication.service";
// Types
import { LoginUserForm } from "@/types/types";
// Next
import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";
import { getSession } from "@/lib/lib";

export default function Login() {
	const authService = new AuthenticationService();
	const router = useRouter();

	/**
	 * Login a user
	 *
	 * @param form - The form object containing user login details
	 */
	const login = async (form: UseFormReturnType<LoginUserForm>) => {
		const { email, password } = form.getValues();

		try {
			const response = await authService.login(email, password);
			const data = await response.json();
			if (response.status === 401) {
				form.setErrors(data);
				return false; // User login failed
			} else if (response.status === 200) {
				router.push("/dashboard");
				return data; // User login successful
			}
		} catch (error) {
			console.error(error);
			return false; // User login failed
		}
	};

	const test = async () => {
		const a = await getSession();
		console.log(a);
	};

	return (
		<>
			<LoginForm login={login} />
		</>
	);
}
