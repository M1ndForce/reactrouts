import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  useEffect(() => {
    fetchItems().then();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://swapi.dev/api/people/1/");

    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div>
      <h1>
        <Link to={`/shop/${items.height}`}>{items.name}</Link>
      </h1>
    </div>
  );
}
