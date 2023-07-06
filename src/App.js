import React, { useState, useRef } from "react";
import Table from "./Components/Table";
import Notes from "./Components/Notes";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ClientDetails from "./Components/ClientDetails";
import MainDetails from "./Components/MainDetails";
import Dates from "./Components/Dates";
import TableForm from "./Components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const ComponentRef = useRef();

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto xl:max-w-4xl lg:max-w-2xl bg-white ">
        {showInvoice ? (
          <>
          <ReactToPrint
            trigger={() => <button className=" mb-5 bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">Print/Download</button>}
            content={() => ComponentRef.current}
          />
          <div ref={ComponentRef} className="p-5">
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} />

            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table
              description={description}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />

            <Notes notes={notes} />

            <Footer
              name={name}
              address={address}
              phone={phone}
              email={email}
              website={website}
            />
          </div>
            <button
              onClick={() => setShowInvoice(false)}
              className="flex felx-center bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 "
            >
              Edit Information
            </button>
            </>
        ) : (
          <>
            {/* Name,Billing address,email,phone,website,Client Name,Shipping Address,Invoice Number,Invoice Date,DueDate,notes*/}
            <div className="flex flex-col justify-center ">
              <article className="md:grid grid-cols-2 gap-10 ">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter Your Name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address">Enter Your Address</label>
                  <input
                    type="text"
                    name="text"
                    id="address"
                    placeholder="Enter The Billing address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="phone">Enter Your Phone</label>
                  <input
                    type="text"
                    name="text"
                    id="phone"
                    placeholder="Enter your Phone Number"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Enter Your EmailId</label>
                  <input
                    type="text"
                    name="text"
                    id="email"
                    placeholder="Enter your EmailId"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="website">Enter Website Link</label>
                  <input
                    type="url"
                    name="name"
                    id="website"
                    placeholder="Enter Website Link"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-10">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter ClientName</label>
                  <input
                    type="text"
                    name="text"
                    id="clientName"
                    placeholder="Enter client Name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Enter Client Address</label>
                  <input
                    type="text"
                    name="text"
                    id="clientAddress"
                    placeholder="Enter clientAddress"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Enter invoiceNumber</label>
                  <input
                    type="text"
                    name="text"
                    id="invoiceNumber"
                    placeholder="Enter invoiceNumber"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Enter invoice Date</label>
                  <input
                    type="date"
                    name="text"
                    id="invoiceDate"
                    placeholder="Enter invoiceDate"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Enter Due Date</label>
                  <input
                    type="date"
                    name="text"
                    id="dueDate"
                    placeholder="Enter Due Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>
              {/* This is Table Form */}
              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                className="my-5"
                name="notes"
                cols="30"
                rows="10"
                placeholder="Additional Notes to the client"
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
