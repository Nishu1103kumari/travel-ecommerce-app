function ItineraryCard({ plan, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{plan.destination}</h2>
        <p className="text-sm text-gray-500">{plan.date}</p>
      </div>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        onClick={() => onDelete(plan.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ItineraryCard;
