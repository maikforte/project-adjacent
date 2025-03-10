// React
import { useState } from "react";
import Link from "next/link";
// Mantine
import { Button, LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import { hasLength, useForm, UseFormReturnType } from "@mantine/form";
// Types
import { LoginUserForm } from "@/types/types";

export default function LoginForm(props: { login: (form: any) => void }) {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm({
		mode: "uncontrolled",
		initialValues: {
			email: "",
			password: "",
		},
		validate: {
			email: (value) => {
				if (!value.includes("@")) {
					return "Invalid email";
				}
			},
			password: hasLength({ min: 6 }, "Password must be at least 6 characters"),
		},
	});

	const login = async (form: UseFormReturnType<LoginUserForm>) => {
		setIsLoading(true);
		await props.login(form);
		setIsLoading(false);
	};

	return (
		<>
			<LoadingOverlay
				visible={isLoading}
				zIndex={1000}
				overlayProps={{ radius: "sm", blur: 2 }}
			/>
			<form onSubmit={form.onSubmit(() => login(form))}>
				<TextInput
					{...form.getInputProps("email")}
					mt="md"
					size="md"
					label="E-Mail Address"
				/>

				<PasswordInput
					{...form.getInputProps("password")}
					mt="md"
					size="md"
					label="Password"
					placeholder="Password"
				/>

				<Button
					loading={isLoading}
					loaderProps={{ type: "dots" }}
					type="submit"
					mt="md"
					size="md"
					miw={"100%"}
				>
					Login
				</Button>

				<Button
					mt="md"
					size="md"
					miw={"100%"}
					variant="outline"
					href="/login"
					component={Link}
				>
					Don't have an account? Register
				</Button>
			</form>
		</>
	);
}
