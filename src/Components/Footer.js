export default function footer({ name, address, phone, email, website }) {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="ma-5 flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Name:</span>{name}
          </li>
          <li>
            <span className="font-bold">Email Id:</span>{email}
          </li>
          <li>
            <span className="font-bold">Phone:</span>{phone} 
          </li>
          <li>
            <span className="font-bold">Address:</span>{address}
          </li>
          <li>
            <span className="font-bold">Website:</span><a href={website} target="-blank" rel="noopener noreferrer">{website}</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
