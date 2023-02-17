import { createContext, useState ,useEffect} from "react";

const FavoritContext = createContext();

export const FavoritProvider = ({ children }) => {
    const [favorite, setFavorite] = useState(
        JSON.parse(localStorage.getItem("favorite")) || []
    );

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite));
    }, [favorite]);

    // []
    // [1]
    // [1,5,6,8]
    const addFav = (id) => {
        if (favorite.find((item) => item === id)) {
            return; // oder wenn wir nur für favorite verwenden  schreiben wir die nexte:

            // const removeFav = favorite.filter((item)=> item !== id )

            // setFavorite(removeFav)
        }

        // else {

        setFavorite([...favorite, id]);
        //}
    };
    const removeFav = (id) => {
        if (favorite.find((item) => item === id)) {
            const removeFav = favorite.filter((item) => item !== id);

            setFavorite(removeFav);
        }
    };
    return (
        <FavoritContext.Provider
            value={{
                favorite,
                setFavorite,
                addFav,
                removeFav,
            }}
        >
            {children}
        </FavoritContext.Provider>
    );
};
export default FavoritContext;
