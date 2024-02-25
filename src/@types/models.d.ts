export type ServiceResponse<T extends any> =
	| { success: true; data: T }
	| { success: false; message: string; code?: number };


   export type Customer = {
			email: string;
			password: string;
			phone: string;
};
		
export type ImageInterface = {
	image1: string;
	image2: string;
	image3: string;
};

export type ProductInterface = {
	name: string;
	category: string;
	price: number;
	quantity: number;
	description: string;
	images: ImageInterface;
};