import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlusNordNewLaunch/2ndJune/GW/Revised/D23753221_OnePlus_Nord_New_launch_GW_Design_SIM_Tall_hero_1500x600._CB667322539_.jpg"
                alt="gradiant-logo"
            />
            {/* PRoduct id, title, price, Rating, Image */}
            <div className="home__row">
                <Product
                    id="1"
                    title="Philips Series 3000 7-in-1 Multi Grooming Kit for Beard & Hair with Nose Trimmer Attachment - MG3720/13"
                    price={11.96}
                    rating={4}
                    image="https://picsum.photos/800/600"
                />

                <Product
                    id="2"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu iaculis odio. Vestibulum tempor nec dui sit amet pellentesque. Donec a metus congue"
                    price={11.96}
                    rating={3}
                    image="https://picsum.photos/400/500"
                />
            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu iaculis odio. "
                    price={11.96}
                    rating={5}
                    image="https://picsum.photos/600/500"
                />

                <Product
                    id="5"
                    title="Philips Series 3000 7-in-1 Multi Grooming Kit for Beard & Hair with Nose Trimmer Attachment - MG3720/13"
                    price={11.96}
                    rating={4}
                    image="https://picsum.photos/400/520"
                />
            </div>
            <div className="home__row">
                <Product
                    id="6"
                    title="Philips Series 3000 7-in-1 Multi Grooming Kit for Beard & Hair with Nose Trimmer Attachment - MG3720/13"
                    price={11.96}
                    rating={4}
                    image="https://picsum.photos/400/550"
                />
            </div>
            {/* Product */}
        </div>
    );
}

export default Home;
