import React, { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) {
  const [isEditing ,setIsEditing]=useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!description || !quantity || !price){
      alert("Fill in all the inputs")
    }else{
      
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      };
      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setList([...list, newItems]);
      setIsEditing(false)
    };
    }


  // Calculate items cost
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };

    calculateAmount(amount);
  }, [amount, price, quantity, setAmount]);
 // Calculate total 
 useEffect(() => {
  let rows=document.querySelectorAll(".amount")
 let sum=0
 for(let i=0;i<rows.length;i++){
  if(rows[i].className==="amount"){
    sum+=isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
    setTotal(sum)
  }
 }
 })

  //Edit Function
  const editRow =(id) => {
    const editingRow =list.find((row) =>row.id===id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
    setAmount(editingRow.amount)
  }
  //Delete Function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-10">
          <label htmlFor="description">Enter Item Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity"> Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="qty"
              autoComplete="off"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Enter price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Item price"
              autoComplete="off"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Total Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="Submit"
          className="mb-5 flex felx-center bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 "
        >
          {isEditing ? "Editing Row Item" : "Add Table Item"}
        </button>
      </form>
      {/* Table Items */}
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Item Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
                <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl"/></button></td>
                <td>
                  <button onClick={()=>editRow(id)}><AiOutlineEdit className="text-green-500 font-bold text-xl"/></button>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
      <div className="flex items-end justify-end text-gray-800 text-2xl font-bold">Rs. {total.toLocaleString()}</div>
    </>
  );
}
