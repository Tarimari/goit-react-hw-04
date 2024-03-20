import axios from "axios";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    async function getGallery() {
      const response = await axios.get();
    }
  }, []);
  return <></>;
}
