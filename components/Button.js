const Button = (props) => {
  return (
    <button className="bg-blue-light py-4 px-6 duration-200 ease-in-out hover:bg-blue-dark">
      <span className="font-bold text-white">{props.children}</span>
    </button>
  );
};

export default Button;
