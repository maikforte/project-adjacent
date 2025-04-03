import { Role } from '@prisma/client';

export interface User {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: Role;
}

export interface RegisterUserForm {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	confirmPassword: string;
}

export interface LoginUserForm {
	email: string;
	password: string;
}