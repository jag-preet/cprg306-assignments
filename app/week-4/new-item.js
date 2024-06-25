"use client";
import { useState } from "react";
function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert("Added Item: " + item.name + ", Quantity: " + item.quantity + ", Category: " + item.category);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };
    return (
                    <form onSubmit={handleSubmit} class="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
                        <div class="mb-2">
                            <input type="text" placeholder="Item name" required="" class="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans" value={name} onChange={(e)=>{setName(e.target.value)}} />
                            </div>
                        <div class="flex justify-between">
                            <input type="number" min="1" max="99" required="" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} class="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"/>
                            <select class="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                                <option value="" disabled="">Category</option>
                                <option value="produce" selected="">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="bakery">Bakery</option>
                                <option value="meat">Meat</option>
                                <option value="frozen foods">Frozen Foods</option>
                                <option value="canned goods">Canned Goods</option>
                                <option value="dry goods">Dry Goods</option>
                                <option value="beverages">Beverages</option>
                                <option value="snacks">Snacks</option>
                                <option value="household">Household</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <button type="submit" class="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">+</button>
                    </form>
        );
    
}

export default NewItem;