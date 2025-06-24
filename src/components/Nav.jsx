import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-2xl font-bold text-amber-700">
        <Link to="/">DD co</Link>
      </div>

      <ul className="flex gap-4 font-medium text-gray-700">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/itinerary">Itinerary</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/profile">Profile</Link></li>
         <li><Link to="/login">Login</Link></li>

      </ul>

     
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-amber-600 text-white px-3 py-1 rounded hover:bg-amber-700"
        >
          Search
        </button>
      </form>
    </nav>
  );
}

export default Nav;
