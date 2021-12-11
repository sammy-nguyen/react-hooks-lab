import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import List from "./List";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/planets/1/").then((res) => {
      setList(res.data.results)
    });
  }, []);

  return (
    <div className="App">
      {list.map((item, index) => {
        return <List name={item.name} key={index} />;
      })}
    </div>
  );
}

export default App;
