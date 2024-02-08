import { AxiosError } from "axios";
import { Customer, ServiceResponse } from "../../@types/models";
import { apiPost } from "../axios";
import { StorageKey, setItem } from "../../utils/storage";

type LoginResponse = ServiceResponse<{
	customer?: Customer;
	message?: string;
}>;

export async function login(values: {
	email: string;
	password: string;
}): Promise<LoginResponse | any> {
	const res = await apiPost<{
		token: any;
		user: { customer: Customer };
	}>("/users/logIn", {
		email: values.email.toLowerCase(),
		password: values.password
	});
	console.log("login", res);

	const id = res.data.token;

	if (id) {
		await setItem(StorageKey.AUTH_TOKEN, id);
	} else {
		console.log("🔐 You are not authorised Invalid TOKEN", id);
		return {
			success: false,
			message: "🔐 You are not authorised Invalid TOKEN"
		};
	}

	console.debug("🔐 customerRes", JSON.stringify(res, null, 2));

	return { success: true, data: { customer: res.data.user } };
}

export async function registerUser(values: {
	email: string;
	phone: string;
	password: string;
}): Promise<ServiceResponse<any>> {
	const res = await apiPost<any>("/users/signup", {
		email: values.email.toLowerCase(),
		password: values.password,
		phone: values.phone
	});
	console.log(`✅ Account created successfully for ${values.email}`, res.data);

	return { success: true, data: { customer: res.data } };
}

export async function contactUs(values: {
   name: string
	email: string;
   phone: string;
   subject: string
	message: string;
}): Promise<ServiceResponse<any>> {
	const res = await apiPost<any>("/users/contactUs", {
		email: values.email.toLowerCase(),
		name: values.name,
		subject: values.subject,
		message: values.message,
		phone: values.phone
	});
	console.log(`✅ Contact us mail sent successfully for ${values.email}`, res.data);

	return { success: true, data: res.data  };
}

