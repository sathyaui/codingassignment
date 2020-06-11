import { FETCH_FEEDS, CURRENT_PAGE_NUMBER } from '../helpers/constants';

function handleResponse(response) {
	if (response.ok) {
		return response.json();
	} else {
		let error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
}

export function fetchFeeds(pageNumber) {
	return dispatch => {
		return fetch(`http://hn.algolia.com/api/v1/search?page=${pageNumber}`)
			.then(res => handleResponse(res))
			.then(res => {
				dispatch({ type: FETCH_FEEDS, data: res });
				dispatch({ type:CURRENT_PAGE_NUMBER, pageNumber });
			})
	}
}