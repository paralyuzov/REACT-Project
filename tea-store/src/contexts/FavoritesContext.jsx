import { useEffect, useState, useContext, createContext } from "react";
import { AuthContext } from "./AuthContext";
import FavoritesModal from "../components/modals/FavoritesModal";


const FavoriteContext = createContext();

export function useFavorites() {
    return useContext(FavoriteContext);
}

export function FavoriteProvider({ children }) {
    const { _id: userId, accessToken } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);
    const [modal, setModal] = useState(null);

    useEffect(() => {
        if (userId && accessToken) {
            fetchFavorites();
        } else {
            setFavorites([]);
        }
    }, [userId, accessToken]);

    const fetchFavorites = async () => {
        try {
            const response = await fetch(`http://localhost:3030/api/favorites/${userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': accessToken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setFavorites(data)
            } else {
                console.error('Failed to fetch favorites');
            }
        } catch (error) {
            console.error('Failed to fetch favorites', error);
        }
    };

    const addFavorite = async (teaId) => {

        try {
            const response = await fetch('http://localhost:3030/api/favorites/add-favorite', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': accessToken,
                },
                body: JSON.stringify({ userId, teaId }),
            });
            if (response.ok) {
                const newFavorite = await response.json();
                setFavorites(prevFavorites => [...prevFavorites, newFavorite])
                setModal({ title: newFavorite.title, image: newFavorite.image, message: "Item added to your favorites!" });
            } else {
                console.error('Failed to add favorite');
            }
        } catch (error) {
            console.error('Failed to add favorite', error);
        }
    };

    const removeFavorite = async (teaId) => {
        try {
            const response = await fetch('http://localhost:3030/api/favorites/remove-favorite', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': `${accessToken}`,
                },
                body: JSON.stringify({ userId, teaId }),
            });
            if (response.ok) {
                setFavorites(prevFavorites => prevFavorites.filter(item => item._id !== teaId));
                const removeItem = await response.json();
                setModal({ title: removeItem.title, image: removeItem.image, message: "Item removed from your favorites!" });
            }
        } catch (error) {
            console.error('Failed to remove favorite', error);
        }
    };

    const isFavorite = (teaId) => {
        return favorites.some(item => item._id === teaId);
    };

    const favoriteCount = favorites.length;


    return (
        <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, favoriteCount }}>
            {children}
            {modal && <FavoritesModal title={modal.title} image={modal.image} message={modal.message} onClose={() => setModal(null)} />}
        </FavoriteContext.Provider>
    );
}