"use strict";

export function postUser(getUserValue) {
	console.log("~~~~~~~~~~~~~~~~~")
	return {type: "POST_USER", payload: getUserValue};
}
