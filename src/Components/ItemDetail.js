import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  useEffect(() => {
    fetchItem().then();
  }, []);

  const [items, setItems] = useState({});

  const fetchItem = async () => {};
  return (
    <div>
      <h1>item</h1>
    </div>
  );
}
