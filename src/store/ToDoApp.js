import {itemsService} from '../Services/ItemsService';

const createActionType = 'CREATE';
const deleteActionType = 'DELETE';
const editActionType = 'EDIT';

const initialState = {items: []}

export const mapDispatchToProps = (dispatch) => {
    return {
        create:  async (item) => {
            await itemsService.createItem(item.text);
            const items = await itemsService.getItems();
            dispatch({type: createActionType, items: items})
        },
        delete:  async (item) => {
            await itemsService.deleteItem(item.id);
            const items = await itemsService.getItems();
            dispatch({type: deleteActionType, items: items});
        },
        edit: async (item) => {
            await itemsService.editItem(item.id, item);
            const items = await itemsService.getItems();
            dispatch({type: editActionType, items: items});
        }
    }
}

export const reducer = (state = initialState, action) => {
    return {...state, items: action.items || state.items  }
} 