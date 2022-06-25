export default function Update({ title, date, children }) {
  return (
    <div className="mt-8 mb-8 flex flex-col divide-y divide-black">
      <div className="m-1 flex gap-4 text-xl">
        <b>
          <h2 className="bg-gradient-to-r from-blue-dark to-blue-light bg-clip-text text-transparent">
            {title}
          </h2>
        </b>
        <h3>{date}</h3>
      </div>
      <div className="m-1">
        <p className="mt-2 text-lg">{children}</p>
      </div>
    </div>
  );
}
