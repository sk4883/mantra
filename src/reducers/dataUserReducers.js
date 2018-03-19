import {createStore} from "redux";


export function registerUserReducers (state = { users:[] } , action) {
	switch(action.type) {

	case "POST_USER" : 
	 	let users = state.users.concat(action.payload);
	 	return {users};
		break;
	}

	return state;   
}