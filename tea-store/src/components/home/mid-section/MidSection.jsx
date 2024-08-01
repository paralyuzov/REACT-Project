import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MidSection.module.css"

export default function MidSection() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/api/collection/story")
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Different ways to enjoy Japanese tea</h2>
            <p className={styles.subtitle}>Asking people who like MAJKO products about Japanese tea reveals all sorts of different ways to enjoy it. Recent posts include interviews with three people about specific topics.</p>
            <div className={styles.cardHolder}>
                {items.map(item => (
                    <div key={item._id}>
                        <Link to={`/blog/story/${item._id}`}>
                            <div className={styles.card}>
                                <div>
                                    <img src={item.story.image} alt="" />
                                </div>
                                <p className={styles.cardTitle}>Stories from Majko staff</p>
                                <p className={styles.cardInfo}>{item.story.title}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    );
}