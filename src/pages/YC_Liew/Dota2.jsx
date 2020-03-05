import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Dota2.scss"

function Dota2() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      'https://api.opendota.com/api/constants/items'
    );
    const object = await data.json();
    for (const property in object) {
      let filter;
      filter = `${object[property].id}`;
      if (filter != 271 && filter != 1021 && filter != 1022 && filter != 1023 && filter != 1024 && filter != 1025 && filter != 1026 && filter != 1027 && filter != 1028 && filter != 1030 && filter != 1032 && filter != 295 && filter != 312 && filter != 373 && !property.includes("recipe")) 
      {
        console.log(property)
        setItems((preItems) => {
          return [
            ...preItems,
            { text: `${property}`, key: `${object[property].id}`, img: "http://cdn.dota2.com/" + `${object[property].img}`}
          ]
        });
      }
    }
  }

  return (
    <>
      <div className="Dota2-Header"><h1>Items</h1></div>
      <div className="Dota2-MainContent">
        {items.map(item => (
          <a className="Dota2-div" target="_blank" key={item.key} href={`/Dota2/${item.text}`}>
            <img className="Dota2-img" src={item.img} alt={item.key} title={item.text}></img>
          </a>
        ))}
      </div>
    </>
  );
}

export default Dota2;