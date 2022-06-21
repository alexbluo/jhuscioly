export default function Button({ onClick, children }) {
  return (
    <button
      className="cursor-pointer rounded bg-blue-light py-4 px-6 font-semibold text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
