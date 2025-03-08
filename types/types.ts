import { UserType } from '@prisma/client';

export interface User {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	userType: UserType;
}

export interface RegisterUserForm {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	confirmPassword: string;
}