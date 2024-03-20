import axios from "axios";
import { useEffect } from "react";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";

export default function App() {
  useEffect(() => {
    console.log("Hello")
    async function getGallery() {
      const response = await axios.get("https://api.unsplash.com/photos/?client_id=4NHMcL46kxdtS5567sH7DhhgpGvchl7_SwRWTz2AJY4");
      console.dir(response)
      
    }
    getGallery()
  }, []);
  return <>
    <SearchBar></SearchBar>
    <Loader></Loader>
  </>;
}
