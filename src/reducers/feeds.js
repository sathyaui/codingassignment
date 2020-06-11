import { FETCH_FEEDS, INCREASE_UP_VOTE, REMOVE_SELECTED_HIT } from '../helpers/constants';

export default function feeds(state = [], action = {}) {
	switch (action.type) {
		case FETCH_FEEDS:
			return [
				action.data,
				...state
			];
		case INCREASE_UP_VOTE:
			state.forEach(data => {
				if (action.page === data.page) {
					data.hits.forEach(hit => {
						if (hit.objectID === action.id) {
							hit.points = hit.points + 1
						}
					});
				}
			});
			return [...state];
			break;
		case REMOVE_SELECTED_HIT:
			state.forEach(data => {
				if (action.page === data.page) {
					data.hits.forEach((hit, index, object) => {
						if(hit.objectID === action.id) {
							object.splice(index, 1);
						}
					});
				}
			});
			return [...state];
		default: return state;
	}
}