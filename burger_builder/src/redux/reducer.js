const initialState = {
    ingredients : {
        Salad: 0,
        Bacon: 0,
        Cheese: 0,
        Meat: 0
    }
}

const reducer = (state= initialState, action ) =>{
    switch ( action.type ) {
        case "ADD_INGREDIENT":
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
            };
        case "REMOVE_INGREDIENT":
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] > 0 ? state.ingredients[action.ingredientName] - 1 : state.ingredients[action.ingredientName]
            },
        };
        default: 
        return state;
    }
}

export default reducer;