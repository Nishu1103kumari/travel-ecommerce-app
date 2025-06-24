import { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !comment) return alert("Please fill all fields");

    const newReview = {
      id: Date.now(),
      name,
      comment,
      rating,
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
    setRating(5);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-yellow-50 to-amber-100">
      <h1 className="text-3xl font-bold text-center text-amber-800 mb-8">
        Customer Reviews
      </h1>

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-blue-100  max-w-xl mx-auto p-6 rounded-xl shadow-md mb-10"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Comment"
          className="w-full mb-4 p-2 border rounded h-[100px]"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="mb-4">
          <label className="mr-2 font-semibold">Rating:</label>
          <select
            className="border p-1 rounded"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r} ⭐
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
        >
          Submit Review
        </button>
      </form>

      {/* Review List */}
      <div className="grid gap-4 max-w-3xl mx-auto">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews yet.</p>
        ) : (
          reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white p-4 rounded-lg shadow flex flex-col"
            >
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-lg font-bold">{r.name}</h2>
                <span className="text-yellow-500 text-sm">
                  {Array(r.rating)
                    .fill("⭐")
                    .join("")}
                </span>
              </div>
              <p className="text-gray-600">{r.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Reviews;
