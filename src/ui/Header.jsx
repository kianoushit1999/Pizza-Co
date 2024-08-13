import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import { useSelector } from "react-redux";

function Header() {
  const username = useSelector(state => state.user.username)
  return (
    <header className="md:text-xl bg-yellow-500 px-4 py-3 uppercase border-b-2 sm:px-6 flex items-center justify-between border-stone-200">
      <Link to="/" className="tracking-widest">
        <h1 className="font-extrabold"> FAST PIZZA.CO </h1>
      </Link>

      <SearchOrder />

      <div className="font-semibold text-sm hidden md:inline-block">
        {username}
      </div>
    </header>
  );
}

export default Header;
