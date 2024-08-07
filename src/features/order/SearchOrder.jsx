import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-40 rounded-full px-2 py-1 text-xs transition-all duration-500 focus:scale-x-105 focus:outline-none focus:outline-2 focus:outline-yellow-400 sm:w-64 sm:px-4 sm:py-2 md:w-[30rem] md:text-sm"
      />
    </form>
  );
}

export default SearchOrder;
