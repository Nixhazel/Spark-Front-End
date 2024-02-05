import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer } from '../@types/models';

export const alertsSlice = createSlice({
	name: "alerts",
	initialState: {
		loading: false
	},
	reducers: {
		showLoading: (state) => {
			state.loading = true;
		},
		hideLoading: (state) => {
			state.loading = false;
		}
	}
});

export type CustomerState = Partial<Customer>;

const initialState: CustomerState = {};
export const userSlice = createSlice({
	name: "customer",
	initialState,
	reducers: {
		addCustomer: (_, action: PayloadAction<Customer>) => {
			return action.payload as Customer;
		},
		modifyCustomer: (state, action: PayloadAction<Partial<Customer>>) => {
			return { ...state, ...action.payload };
		},
		resetCustomer: () => {
			return {};
		}
	}
});

export const { showLoading, hideLoading } = alertsSlice.actions;
export const { addCustomer, modifyCustomer, resetCustomer } = userSlice.actions;
