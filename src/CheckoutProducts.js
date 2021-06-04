import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({ title, id, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img
                src={image}
                alt="product"
                className="checkoutProduct__img"
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => {
                                return <p>⭐</p>
                            })
                    }
                </div>
                <button onClick={removeFromBasket}>Remove From basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
