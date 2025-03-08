// React
import { useState } from "react";
// Mantine
import { Button, LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import { hasLength, useForm, UseFormReturnType } from "@mantine/form";
// Types
import { RegisterUserForm } from "@/types/types";

export default function RegisterForm(props: { register: (form: any) => void }) {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm({
		mode: "uncontrolled",
		initialValues: {
			email: "",
			password: "",
			confirmPassword: "",
			firstName: "",
			lastName: "",
		},
		validate: {
			email: (value) => {
				if (!value.includes("@")) {
					return "Invalid email";
				}
			},
			password: hasLength({ min: 6 }, "Password must be at least 6 characters"),
			confirmPassword: (value, values) => {
				if (value !== values.password) {
					return "Passwords do not match";
				}
			},
			firstName: hasLength({ min: 2 }, "First name must be at least 2 characters"),
			lastName: hasLength({ min: 2 }, "Last name must be at least 2 characters"),
		},
	});

	const register = async (form: UseFormReturnType<RegisterUserForm>) => {
		setIsLoading(true);
		await props.register(form);
		setIsLoading(false);
	};

	return (
		<>
			<LoadingOverlay
				visible={isLoading}
				zIndex={1000}
				overlayProps={{ radius: "sm", blur: 2 }}
			/>
			<form onSubmit={form.onSubmit(() => register(form))}>
				<TextInput
					{...form.getInputProps("email")}
					mt="md"
					size="md"
					label="E-Mail Address"
				/>

				<TextInput
					{...form.getInputProps("firstName")}
					mt="md"
					size="md"
					label="First Name"
					placeholder="First Name"
				/>

				<TextInput
					{...form.getInputProps("lastName")}
					mt="md"
					size="md"
					label="Last Name"
					placeholder="Last Name"
				/>

				<PasswordInput
					{...form.getInputProps("password")}
					mt="md"
					size="md"
					label="Password"
					placeholder="Password"
				/>

				<PasswordInput
					{...form.getInputProps("confirmPassword")}
					mt="md"
					size="md"
					label="Confirm Password"
					placeholder="Confirm Password"
				/>

				<Button
					loading={isLoading}
					loaderProps={{ type: "dots" }}
					type="submit"
					mt="md"
					size="md"
					miw={"100%"}
				>
					Register
				</Button>
			</form>
		</>
	);
}
