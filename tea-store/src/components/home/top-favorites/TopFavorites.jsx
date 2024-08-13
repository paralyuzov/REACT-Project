import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from './topFavorites.module.css'

export default function TopFavorites() {

    const [topFavorites, setTopFavorites] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/api/collection/top-favorites')
            .then(response => response.json())
            .then(data => setTopFavorites(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div >
            <h2 className={styles.header}>THE TOP TEAS AMONG OUR USERS</h2>
            <div className={styles.cardHolder}>

                {topFavorites.length === 0 ? (
                    <p>No top items found.</p>
                ) : (

                    topFavorites.map(item => (
                        <div key={item._id} className={styles.card}>
                            <Link to={`/collection/${item.type}/${item._id}`}>
                                <div className={styles.cardImage}>
                                    <img src={item.image} alt="picture" />
                                </div>
                            </Link>
                            <div className={styles.cardInfoHolder}>
                                <p>{item.title} {item.weight}g</p>
                                <p className={styles.cardInfoPrice}>{item.price} €</p>
                            </div>
                        </div>

                    )


                    ))}

            </div>
        </div >
    );
}