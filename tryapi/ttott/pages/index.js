import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);
  console.log(data, "==data==");
  return (
    <>
      <div>{data?.id}</div>
      <div> =================== </div>
      <div>
        {data?.stats.map((stats) => (
          <>
            <div>{stats.base_stat}</div>
          </>
        ))}
      </div>
    </>
  );
}

// base_stat
// :
// 35
// effort
// :
// 0
// stat
// :
// name
// :
// "hp"
// url
// :
// "https://pokeapi.co/api/v2/stat/1/"
