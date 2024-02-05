export type ServiceResponse<T extends any> =
	| { success: true; data: T }
	| { success: false; message: string; code?: number };


   export type Customer = {
			email: string;
			password: string;
			phone: string;
		};