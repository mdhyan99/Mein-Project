import React, { createContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {

    const [searchInput, setSearchInput] = useState(""); // für search

    // für favorite
    const [favoritep, setFavoritep] = useState(
        JSON.parse(localStorage.getItem("favoritep")) || []
    );

    useEffect(() => {
        localStorage.setItem("favoritep", JSON.stringify(favoritep));
    }, [favoritep]);


    //für Like
    const [like, setLike] = useState(
        JSON.parse(localStorage.getItem("like")) || 0
    );

    useEffect(() => {
        localStorage.setItem("like", JSON.stringify(like));
    }, [like]);


    // für add favorite
    const addFav = (id) => {
        if (favoritep.find((item) => item === id)) {
            const removeFav = favoritep.filter((item) => item !== id);

            setFavoritep(removeFav);
        } else {
            setFavoritep([...favoritep, id]);
        }
    };

    // für add like
    const addLike = (id) => {
        setLike({ ...like, [id]: like[id] ? like[id] + 1 : 1 });
    };

    return (
        <FavoriteContext.Provider
            value={{
                favoritep,
                setFavoritep,
                addFav,
                addLike,
                like,
                searchInput,
                setSearchInput,
            }}
        >
            {children}
            
        </FavoriteContext.Provider>
    );
};
export default FavoriteContext;
