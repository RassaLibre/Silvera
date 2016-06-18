import store from '../reducers/ItemsReducer';
import { ITEM_SELECTED } from '../constants/AppConstants';

/**
*
*/
export const selectNewItem = (itemId : Number) => {
	store.dispatch({
		type: ITEM_SELECTED,
		itemId: itemId
	});
}