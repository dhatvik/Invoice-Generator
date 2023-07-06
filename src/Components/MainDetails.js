export default function Table({name,address}) {
    return(
        <>
        <section className="flex flex-col items-end justify-end">
          <div>Billing Address:</div>
          <h2 className="font-bold text-xl uppercase md:text-2xl mb-1"> {name}</h2>
          <p>{address} </p>
        </section>
        </>
    )
}
