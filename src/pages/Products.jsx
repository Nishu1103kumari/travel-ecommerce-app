import { MdFastfood, MdShoppingCart } from "react-icons/md";
import Categories from "../Category"; 
import { food_items } from "../Food.js";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="w-full min-h-screen bg-amber-50 pt-4 ml-4">
     
      <div className="w-full h-[60px] bg-white flex justify-center items-center text-red-800 font-bold text-2xl gap-4">
        <MdShoppingCart /> FOOD & GROCERIES <MdFastfood />
      </div>

   
      <div className="flex justify-center gap-10 mt-6 flex-wrap">
        {Categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center">
            {cat.icon}
            <span className="mt-2 text-xl font-medium capitalize">{cat.name}</span>
          </div>
        ))}
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-8 py-10">
        {food_items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
