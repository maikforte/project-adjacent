import { RegisterUserForm } from "@/types/types";
import RegisterForm from "./RegisterForm";

export default {
	title: "Register Form",
};

const register = async (form: RegisterUserForm) => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return true;
};

export const Usage = () => <RegisterForm register={register} />;
