import { Link, useNavigate } from "react-router-dom";

function ButtonLink({ children, to }) {
  const navigate = useNavigate();
  const className = `text-blue-400 transition-all duration-500 hover:translate-x-9 ${to === -1 && "hover:-translate-x-2"} hover:scale-105 hover:text-blue-700`;

  if (to === -1)
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default ButtonLink;
