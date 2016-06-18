import { createStore } from "redux";
import { ITEM_SELECTED } from "../constants/AppConstants";
import { Map, List, fromJS } from "immutable";
//TODO: Import and implement Immutable

/**
*
*/
const ItemsReducer = (state, action) => {
	if (!state) state = fromJS({selectedItemId: null});
	switch(action.type){
		case ITEM_SELECTED:
			return state.set('selectedItemId', action.itemId);
		default:
			return state;
	}
};

const store = createStore(ItemsReducer);

export default store;

