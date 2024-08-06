import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if(!query) return 
    
    navigate(`/order/${query}`)
    setQuery("")
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
