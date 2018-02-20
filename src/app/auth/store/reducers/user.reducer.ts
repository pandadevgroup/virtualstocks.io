import * as fromUser from "../actions/user.actions";
import { AuthInfo, User } from "@app/auth";

export interface UserState {
	userData: User;
	loggedIn: boolean;
	loaded: boolean;
	error: any;
}

export const initialState: UserState = {
	userData: null,
	loggedIn: false,
	loaded: false,
	error: null
};

export function reducer(state = initialState, action: fromUser.UserActions): UserState {
	switch (action.type) {
		case fromUser.LOGIN: {
			return {
				...state,
				error: null
			};
		}
		case fromUser.LOGIN_SUCCESS: {
			const userData = action.payload;

			return {
				...state,
				userData,
				loggedIn: !!userData,
				loaded: true,
				error: null
			};
		}
		case fromUser.LOGIN_WITH_GOOGLE_SUCCESS: {
			const userData = action.payload.user;

			return {
				...state,
				userData,
				loggedIn: !!userData,
				loaded: true,
				error: null
			};
		}
		case fromUser.LOGIN_FAILURE: {
			const error = action.payload;

			return {
				...state,
				error
			};
		}
		case fromUser.LOGOUT: {
			return {
				...state,
				loggedIn: false
			};
		}
		case fromUser.SET_USER: {
			const userData = action.payload;

			return {
				...state,
				loggedIn: !!userData,
				loaded: true,
				userData
			};
		}
		case fromUser.CREATE_USER: {
			return {
				...state,
				error: null
			};
		}
		case fromUser.CREATE_USER_SUCCESS: {
			const userData = action.payload;
			return {
				...state,
				loggedIn: true,
				userData,
				error: null
			};
		}
		case fromUser.CREATE_USER_FAIL: {
			return {
				...state,
				error: action.payload
			};
		}
	}

	return state;
}

export const getUserData = (state: UserState) => state.userData;
export const getUserLoggedIn = (state: UserState) => state.loggedIn;
export const getUserError = (state: UserState) => state.error;
export const getUserLoaded = (state: UserState) => state.loaded;
