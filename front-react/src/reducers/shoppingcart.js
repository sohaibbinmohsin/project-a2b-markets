export default (cart_items = [], action) =>{
    switch(action.type){
        case 'GET_ITEMS':
            return action.payload
        case 'ADD_ITEMS':
            return cart_items
        default:
            return cart_items;
    }
}