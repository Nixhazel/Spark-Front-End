
import { AxiosError } from "axios";
import { Customer, ServiceResponse } from '../../@types/models';
import { apiPost } from '../axios';
import { StorageKey, setItem } from '../../utils/storage';

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
   console.log("login", res)

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

export async function registerUser(
	email: string,
	phone: string,
	password: string,
): Promise<ServiceResponse<null>> {
	try {
		await apiPost<any>("/users/signup", {
			email,
			password,
			phone
		});
		console.debug(`✅ Account created successfullyfor ${email}`);

		return { success: true, data: null };
	} catch (error) {
		console.log(
			"🔐 Error Creating Account",
			JSON.stringify((error as AxiosError)?.response?.data, null, 2)
		);

		const detailedError = JSON.stringify(
			(error as AxiosError | any)?.response?.data?.message
		);
		const message =
			detailedError || "Error Creating Account. Please try again";
		// showCustomToast(message, "error");
		return { success: false, message };
	}
}
