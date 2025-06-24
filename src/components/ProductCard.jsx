function ProductCard({ item }) {
  return (
    <div className="w-[200px] shadow-lg rounded-xl p-2 bg-white hover:scale-105 transition-all">
      <img src={item.image} alt={item.name} className="w-full h-[150px] object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
      <p className="text-sm text-gray-500 capitalize">{item.category}</p>
      <p className="text-green-600 font-bold">₹ {item.price}</p>
    </div>
  );
}

export default ProductCard;
