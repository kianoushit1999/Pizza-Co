import { Link } from "react-router-dom";

function Button({ children, disabled, to, type = "primary" }) {
  const baseClass =
    "duration-400 inline-block rounded-full bg-yellow-400  font-medium uppercase  transition-all hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed ";

  const className =
    type === "sm"
      ? baseClass + "tracking-tight text-xs px-2 py-1 sm:px-3 sm:py-2"
      : baseClass + "px-4 py-2 text-sm tracking-wider md:px-6 md:py-3";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
