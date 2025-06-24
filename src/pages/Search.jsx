import { useLocation } from "react-router-dom";
import { food_items } from "../Food.js"; // make sure this path is correct

// Custom hook to extract query from URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery().get("q")?.toLowerCase() || "";

  // Safely filter items by name (optional chaining prevents errors)
  const filtered = food_items.filter((item) =>
    item.name?.toLowerCase().includes(query)
  );

  return (
    <div className="p-6 min-h-screen bg-amber-50">
      <h1 className="text-2xl font-bold mb-6 text-center text-amber-800">
        Search Results for "{query}"
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length === 0 ? (
          <p className="text-gray-600 text-center col-span-full">No items found.</p>
        ) : (
          filtered.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:scale-105 transition-all">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[150px] object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500 capitalize">{item.category}</p>
              <p className="text-green-600 font-bold">₹{item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
