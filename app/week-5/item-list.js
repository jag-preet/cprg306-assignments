"use client";
import Item from "./item";
import Items from "./items.json";
import { useState,useEffect } from "react";
export default function ItemList() {
    const [items, setItems] = useState(Items);
    const [sortby, setSortby] = useState("name");
    const sortbyname = () => {
        setItems([...items].sort((a, b) => a.name.localeCompare(b.name)));
        setSortby("name");
    }
    const sortbycategory = () => {
        setItems([...items].sort((a, b) => a.category.localeCompare(b.category)));
        setSortby("category");
    }


    return (
        <div className=" flex flex-col gap-3">
          <div className="flex flex-row gap-5 items-center ">
            <span>Sort by:</span>
            <button onClick={sortbyname} className="bg-orange-500 hover:bg-orange-700 p-2 m-2 w-28 rounded">Sort by Name</button>
            <button onClick={sortbycategory} className="bg-orange-500 hover:bg-orange-700 p-2 m-2 w-28 rounded">Sort by Category</button>
          </div>
<>
            {sortby == "name" && 
                      <>
            {items.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => (
              <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
            </>
            }

{sortby == "category" && 
                      <>
            {items.sort((a, b) => a.category.localeCompare(b.name)).map((item, index) => (
              <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
            </>
            }
</>
        </div>
    );
  }