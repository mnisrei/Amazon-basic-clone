import React from 'react';
export const initialState = {
    basket: [],
    user: null,
};
export const getBasketTotal = (basket) => {
    return (basket?.reduce((amount, item) => {
        return (item.price + amount);
    }, 0))
}
function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
            //Logic for adding to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //Remove From Basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => {
                return basketItem.id === action.id
            })
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log(
                    `Can't remove product (id: ${action.id}) not Found`
                )
            }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
}
export default reducer;