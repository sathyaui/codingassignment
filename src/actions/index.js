import { FETCH_FEEDS } from '../helpers/constants';

function handleResponse(response) {
	if (response.ok) {
		return response.json();
	} else {
		let error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
}

export function fetchFeeds() {
	return dispatch => {
		return fetch("http://hn.algolia.com/api/v1/search")
			.then(res => handleResponse(res))
			.then(res => dispatch({ type: FETCH_FEEDS, data: res }))
	}
}