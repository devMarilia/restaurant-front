import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
}

export const ContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
        const allItemsRestaurant = async () => {
            const response = await api.get("/api/restaurants?populate=*");
            const responseArr = Object.values(response.data.data);
            setRestaurants(responseArr || []);
            console.log("RESPONSE",responseArr);
        };
        return allItemsRestaurant;
    }, []);


  

    const value = {
        setRestaurants,
        restaurants,
    };
    return(
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    )
  };
      


 export default AppContext;