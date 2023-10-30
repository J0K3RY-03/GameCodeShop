import { useEffect } from "react";
import axios from "axios";

const StoreGames = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/getdocgame");
        const gameNameData = res.data;
        console.log(gameNameData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return <h1>Hello</h1>;
};

export default StoreGames;
