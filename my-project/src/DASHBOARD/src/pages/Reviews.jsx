import { useEffect, useState } from "react";
import useReviewStore from "../../../data/review/reviewStore";

const Reviews = () => {
  const {
    reviews,
    getReviews,
    createReview,
    updateReview,
    deleteReview,
    loading,
  } = useReviewStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    image: "",
    review: "",
    rating: 5,
  });

  useEffect(() => {
    getReviews();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "rating" ? Number(e.target.value) : e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      location: "",
      image: "",
      review: "",
      rating: 5,
    });

    setIsEditing(false);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      await updateReview(editingId, formData);
    } else {
      await createReview(formData);
    }

    resetForm();
  };

  const handleEdit = (review) => {
    setIsEditing(true);
    setEditingId(review._id);

    setFormData({
      name: review.name,
      location: review.location,
      image: review.image,
      review: review.review,
      rating: review.rating,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Reviews</h1>

      <form
        onSubmit={handleSubmit}
        className="mb-10 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          {isEditing ? "Update Review" : "Add Review"}
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Customer Name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="rounded-lg border p-3 md:col-span-2"
          />

          <textarea
            rows={5}
            name="review"
            placeholder="Customer Review"
            value={formData.review}
            onChange={handleChange}
            className="rounded-lg border p-3 md:col-span-2"
            required
          />

          <div>
            <label className="mb-2 block font-medium">Rating</label>

            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full rounded-lg border p-3">
              <option value={5}>★★★★★ (5)</option>
              <option value={4}>★★★★☆ (4)</option>
              <option value={3}>★★★☆☆ (3)</option>
              <option value={2}>★★☆☆☆ (2)</option>
              <option value={1}>★☆☆☆☆ (1)</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700">
            {loading ? "Saving..." : isEditing ? "Update Review" : "Add Review"}
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border px-6 py-3 hover:bg-gray-100">
              Cancel
            </button>
          )}
        </div>
      </form>
      {/* Reviews */}

      {reviews.length === 0 ? (
        <div className="rounded-xl border bg-white p-12 text-center shadow-sm">
          <h2 className="text-xl font-semibold">No Reviews Found</h2>

          <p className="mt-2 text-gray-500">Add your first customer review.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((item) => (
            <div
              key={item._id}
              className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />
              ) : (
                <div className="flex h-56 items-center justify-center bg-gray-100 text-6xl">
                  👤
                </div>
              )}

              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>

                    <p className="text-gray-500">{item.location}</p>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    {item.rating} ⭐
                  </span>
                </div>

                <p className="mt-4 text-gray-600">{item.review}</p>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      if (window.confirm("Delete this review?")) {
                        deleteReview(item._id);
                      }
                    }}
                    className="flex-1 rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
