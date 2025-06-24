import { useState } from "react";
import ItineraryCard from "../components/ItineraryCard";

function Itinerary() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [plans, setPlans] = useState([]);

  const handleAdd = () => {
    if (!destination || !date) return;

    const newPlan = {
      id: Date.now(),
      destination,
      date,
    };

    setPlans([...plans, newPlan]);
    setDestination("");
    setDate("");
  };

  const handleDelete = (id) => {
    setPlans(plans.filter(plan => plan.id !== id));
  };

  return (
    <div className="p-6 bg-amber-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-800">Your Travel Itinerary</h1>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
        <input
          type="text"
          placeholder="Destination"
          className="border p-2 rounded w-[250px]"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 rounded w-[180px]"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Plan
        </button>
      </div>

   
      <div className="grid gap-4 max-w-3xl mx-auto">
        {plans.map(plan => (
          <ItineraryCard key={plan.id} plan={plan} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Itinerary;
