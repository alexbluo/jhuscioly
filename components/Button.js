const Button = (props) => {
  return (
    <button className="cursor-pointer rounded bg-blue-light py-4 px-6 font-semibold text-white">
      {props.children}
    </button>
  );
};

export default Button;
