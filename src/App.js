import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MyCard from "./components/MyCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MyNavbar from "./components/MyNavbar";
function App() {
  const [data, setData] = useState({});

  const [bgColor, setBgColor] = useState(``);
  async function fetchData() {
    try {
      await axios
        .get("https://api.api-ninjas.com/v1/quotes?category=family", {
          headers: {
            "X-Api-Key": "iSj0xYK/DjyFWIHahiXEtQ==FvZD8Qj5mB5TnPhA",
          },
        })
        .then(({ data }) => {
          console.log(data[0]);
          setData(data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    let r = Math.floor(Math.random() * 56) + 100;
    let g = Math.floor(Math.random() * 56) + 100;
    let b = Math.floor(Math.random() * 56) + 100;
    setBgColor(`rgb(${r},${g},${b})`);

    fetchData();
  }, []);
  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <MyNavbar />
      <div className="body">
        <MyCard
          fetchData={fetchData}
          data={data}
          setBgColor={setBgColor}
          bgColor={bgColor}
        />
      </div>
    </div>
  );
}

export default App;
