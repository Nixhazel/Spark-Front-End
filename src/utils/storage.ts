// import AsyncStorage from '@react-native-async-storage/async-storage';

export enum StorageKey {
	AUTH_TOKEN = "SPARKCustomer::Auth_Token",
	REDUX_STORE = "SPARKCustomer::Redux_Store"
}

export async function getItem<T extends any>(
	key: StorageKey,
	parse = false
): Promise<T | null> {
	const value = await localStorage.getItem(key);
	return parse && value ? JSON.parse(value) : value;
}

export async function removeItem(key: StorageKey) {
	await localStorage.removeItem(key);
}

export async function removeItems() {
  await localStorage.remove;
}

export async function setItem(key: StorageKey, value: any) {
	const toSave = typeof value === "string" ? value : JSON.stringify(value);
	await localStorage.setItem(key, toSave);
}
