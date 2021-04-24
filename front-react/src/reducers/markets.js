export default (categories = [], action) =>{
    switch(action.type){
        case 'GET_CATEGORIES':
            return action.payload
        case 'ADD_CATEGORIES':
            return categories
        default:
            return categories;
    }
}