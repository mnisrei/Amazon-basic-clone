import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProducts";
import Subtotal from './Subtotal';
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__Left">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
                    alt=""
                    class="checkout__ad"
                />
                {
                    (basket?.length === 0) ? (
                        <div>
                            <h2>Your Basket is empty</h2>
                            <p>
                                You have no items in your basket.
                                To buy one or more items, click "Add to basket"
                                next to the item.
                        </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {/* List out all the checkout products */}
                            {basket.map((item) => {
                                return (
                                    <CheckoutProduct
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />)
                            })}

                        </div>
                    )
                }
            </div>
            {(basket.length) > 0 && (
                <div className="checkout__Right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;
