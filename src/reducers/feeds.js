import { FETCH_FEEDS } from '../helpers/constants';

export default function feeds(state = [], action = {}) {
	switch (action.type) {
		case FETCH_FEEDS:
			return [
				...state,
				action.data
			];
		default: return state;
	}
}