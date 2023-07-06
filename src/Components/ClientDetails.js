export default function Table({ clientName, clientAddress }) {
  return (
    <>
      <section className="mt-10">
        <div>Shipping Address:</div>
        <h2 className="text-2xl uppercase font-bold mb-1"> {clientName}</h2>
        <p>{clientAddress} </p>
      </section>
    </>
  );
}
