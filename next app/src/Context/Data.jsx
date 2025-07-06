"use client"; // Ensure it's a client component

import { createContext, useState, useEffect } from "react";
import axios from "axios"; // Import Axios

// Creating the Context
export const Datacontext = createContext();

const Dataprovider = ({ children }) => {
  const [data, setData] = useState([]); // Store API data

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <Datacontext.Provider value={{ data}}>
      {children} 
    </Datacontext.Provider>
  );
};

export default Dataprovider;
