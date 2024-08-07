import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "duration-400 inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed md:px-6 md:py-3";

  if (to) return <Link to={to} className={className}>{children}</Link>;

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
