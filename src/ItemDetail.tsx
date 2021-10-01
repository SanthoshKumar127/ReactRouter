import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail() {
  useEffect(() => {
    fetchItem();
    console.log();
  }, []);

  const [item, setItem] = useState({});
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id={{itemid}}`
    );
    const item = await fetchItem.json();

    console.log(item);
  };

  return (
    <div>
      <h1>item</h1>
    </div>
  );
}

export default ItemDetail;
