
import { Customer, ServiceResponse } from "../../@types/models";
import { apiGetSecure, apiPost, apiPostSecure, apiPutSecure } from "../axios";

export async function createProduct(values: any): Promise<ServiceResponse<any>> {
	const res = await apiPostSecure<any>("/admin/upload", values);

	console.log(`✅ Product created Successfully`, res.data);

	return { success: true, data:  res.data  };
}

export async function editProduct(values: object, id: string): Promise<ServiceResponse<any>> {
	const res = await apiPutSecure<any>(`/admin/edit/${id}`, values);

	console.log(`✅ Product edited Successfully`, res.data);

	return { success: true, data:  res.data  };
}

export async function getProductData(id: string): Promise<any> {
	const res = await apiGetSecure<any>(`/admin/getOneProd/${id}`);
	console.log(
		"reading Product data",
		JSON.stringify(res.data, null, 2)
	);

	return { success: true, data: res.data };
}
