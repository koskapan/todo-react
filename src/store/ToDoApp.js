import {itemsService} from '../Services/ItemsService';

const createActionType = 'CREATE';
const deleteActionType = 'DELETE';
const editActionType = 'EDIT';

const initialState = {items: [{id:'asd', text: 'asd'}]}

export const actionCreators ={
    create: item => async (dispatch) => {
        await itemsService.createItem(item.text);
        const items = await itemsService.getItems();
        dispatch({type: createActionType, items: items})
    },
    delete: item => async (dispatch) => {
        await itemsService.deleteItem(item.id);
        const items = await itemsService.getItems();
        dispatch({type: deleteActionType, items: items});
    },
    edit: item => async (dispatch) => {
        await itemsService.editItem(item.id, item.text);
        const items = itemsService.getItems();
        dispatch({type: editActionType, items: items});
    }
}

export const reducer = (state, action) => {
    state = state || initialState;
    return {...state, items: state.items || action.state};
} 