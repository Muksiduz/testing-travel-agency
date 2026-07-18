import { useEffect, useState } from "react";
import { X } from "lucide-react";
import usePackageStore from "./packageStore";

const initialForm = {
  title: "",
  duration: "",
  price: "",
  location: "",
  image: "",

  description: "",

  featured: false,

  gallery: [""],

  highlights: [""],

  inclusions: [""],

  exclusions: [""],

  itinerary: [
    {
      day: 1,
      title: "",
      description: "",
    },
  ],

  reviews: [
    {
      name: "",
      image: "", // Reviewer's photo URL
      rating: 5,
      comment: "",
    },
  ],
};

const PackageModal = ({ open, onClose, packageData, onSuccess }) => {
  const { createPackage, updatePackage } = usePackageStore();

  const [form, setForm] = useState(initialForm);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (packageData) {
      setForm({
        ...initialForm,
        ...packageData,
      });
    } else {
      setForm(initialForm);
    }
  }, [packageData]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    let res;

    if (packageData) {
      res = await updatePackage(packageData._id, form);
    } else {
      res = await createPackage(form);
    }

    setLoading(false);

    if (res.success) {
      onSuccess();
      setForm(initialForm);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-8">
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {packageData ? "Edit Package" : "Add Package"}
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-5">
            {/* Title */}

            <div>
              <label className="mb-2 block font-medium">Title</label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                required
              />
            </div>

            {/* Price */}

            <div>
              <label className="mb-2 block font-medium">Price</label>

              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                required
              />
            </div>

            {/* Duration */}

            <div>
              <label className="mb-2 block font-medium">Duration</label>

              <input
                name="duration"
                value={form.duration}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                required
              />
            </div>

            {/* Location */}

            <div>
              <label className="mb-2 block font-medium">Location</label>

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                required
              />
            </div>

            {/* Image */}

            <div className="col-span-2">
              <label className="mb-2 block font-medium">Cover Image URL</label>

              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              />
            </div>

            {/* Description */}

            <div className="col-span-2">
              <label className="mb-2 block font-medium">Description</label>

              <textarea
                rows={5}
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
              />
            </div>

            {/* ================= Gallery ================= */}

            <div className="col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <label className="font-medium">Gallery Images</label>

                <button
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      gallery: [...prev.gallery, ""],
                    }))
                  }
                  className="rounded bg-emerald-600 px-3 py-2 text-white">
                  Add Image
                </button>
              </div>

              {form.gallery.map((item, index) => (
                <div key={index} className="mb-2 flex gap-2">
                  <input
                    value={item}
                    onChange={(e) => {
                      const arr = [...form.gallery];
                      arr[index] = e.target.value;

                      setForm((prev) => ({
                        ...prev,
                        gallery: arr,
                      }));
                    }}
                    className="flex-1 rounded border p-3"
                    placeholder="Image URL"
                  />

                  {form.gallery.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setForm((prev) => ({
                          ...prev,
                          gallery: prev.gallery.filter((_, i) => i !== index),
                        }));
                      }}
                      className="rounded bg-red-500 px-4 text-white">
                      X
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* ================= Highlights ================= */}

            <div className="col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <label className="font-medium">Highlights</label>

                <button
                  type="button"
                  className="rounded bg-emerald-600 px-3 py-2 text-white"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      highlights: [...prev.highlights, ""],
                    }))
                  }>
                  Add Highlight
                </button>
              </div>

              {form.highlights.map((item, index) => (
                <div key={index} className="mb-2 flex gap-2">
                  <input
                    value={item}
                    onChange={(e) => {
                      const arr = [...form.highlights];
                      arr[index] = e.target.value;

                      setForm((prev) => ({
                        ...prev,
                        highlights: arr,
                      }));
                    }}
                    className="flex-1 rounded border p-3"
                  />

                  {form.highlights.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setForm((prev) => ({
                          ...prev,
                          highlights: prev.highlights.filter(
                            (_, i) => i !== index,
                          ),
                        }));
                      }}
                      className="rounded bg-red-500 px-4 text-white">
                      X
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* ================= Inclusions ================= */}

            <div className="col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <label className="font-medium">Inclusions</label>

                <button
                  type="button"
                  className="rounded bg-emerald-600 px-3 py-2 text-white"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      inclusions: [...prev.inclusions, ""],
                    }))
                  }>
                  Add Inclusion
                </button>
              </div>

              {form.inclusions.map((item, index) => (
                <div key={index} className="mb-2 flex gap-2">
                  <input
                    value={item}
                    onChange={(e) => {
                      const arr = [...form.inclusions];
                      arr[index] = e.target.value;

                      setForm((prev) => ({
                        ...prev,
                        inclusions: arr,
                      }));
                    }}
                    className="flex-1 rounded border p-3"
                  />

                  {form.inclusions.length > 1 && (
                    <button
                      type="button"
                      className="rounded bg-red-500 px-4 text-white"
                      onClick={() => {
                        setForm((prev) => ({
                          ...prev,
                          inclusions: prev.inclusions.filter(
                            (_, i) => i !== index,
                          ),
                        }));
                      }}>
                      X
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* ================= Exclusions ================= */}

            <div className="col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <label className="font-medium">Exclusions</label>

                <button
                  type="button"
                  className="rounded bg-emerald-600 px-3 py-2 text-white"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      exclusions: [...prev.exclusions, ""],
                    }))
                  }>
                  Add Exclusion
                </button>
              </div>

              {form.exclusions.map((item, index) => (
                <div key={index} className="mb-2 flex gap-2">
                  <input
                    value={item}
                    onChange={(e) => {
                      const arr = [...form.exclusions];
                      arr[index] = e.target.value;

                      setForm((prev) => ({
                        ...prev,
                        exclusions: arr,
                      }));
                    }}
                    className="flex-1 rounded border p-3"
                  />

                  {form.exclusions.length > 1 && (
                    <button
                      type="button"
                      className="rounded bg-red-500 px-4 text-white"
                      onClick={() => {
                        setForm((prev) => ({
                          ...prev,
                          exclusions: prev.exclusions.filter(
                            (_, i) => i !== index,
                          ),
                        }));
                      }}>
                      X
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* ================= Itinerary ================= */}

            <div className="col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <label className="font-medium">Itinerary</label>

                <button
                  type="button"
                  className="rounded bg-emerald-600 px-3 py-2 text-white"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      itinerary: [
                        ...prev.itinerary,
                        {
                          day: prev.itinerary.length + 1,
                          title: "",
                          description: "",
                        },
                      ],
                    }))
                  }>
                  Add Day
                </button>
              </div>

              {/* review  */}
              {form.itinerary.map((day, index) => (
                <div key={index} className="mb-6 rounded-xl border p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold">Day {day.day}</h3>

                    {form.itinerary.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          setForm((prev) => ({
                            ...prev,
                            itinerary: prev.itinerary.filter(
                              (_, i) => i !== index,
                            ),
                          }));
                        }}
                        className="rounded bg-red-500 px-3 py-2 text-white">
                        Remove
                      </button>
                    )}
                  </div>

                  <input
                    value={day.title}
                    placeholder="Title"
                    className="mb-3 w-full rounded border p-3"
                    onChange={(e) => {
                      const arr = [...form.itinerary];
                      arr[index].title = e.target.value;

                      setForm((prev) => ({
                        ...prev,
                        itinerary: arr,
                      }));
                    }}
                  />

                  <textarea
                    rows={3}
                    placeholder="Description"
                    value={day.description}
                    className="w-full rounded border p-3"
                    onChange={(e) => {
                      const arr = [...form.itinerary];
                      arr[index].description = e.target.value;

                      setForm((prev) => ({
                        ...prev,
                        itinerary: arr,
                      }));
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <label className="font-medium">Reviews</label>

                <button
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      reviews: [
                        ...prev.reviews,
                        {
                          name: "",
                          rating: 5,
                          comment: "",
                        },
                      ],
                    }))
                  }
                  className="rounded bg-emerald-600 px-3 py-2 text-white">
                  Add Review
                </button>
              </div>

              {/* ================= review ===================  */}
              {form.reviews.map((review, index) => (
                <div key={index} className="mb-6 rounded-xl border p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold">Review {index + 1}</h3>

                    {form.reviews.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          setForm((prev) => ({
                            ...prev,
                            reviews: prev.reviews.filter((_, i) => i !== index),
                          }));
                        }}
                        className="rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600">
                        Remove
                      </button>
                    )}
                  </div>

                  {/* Reviewer Name */}
                  <input
                    className="mb-3 w-full rounded border p-3"
                    placeholder="Reviewer Name"
                    value={review.name}
                    onChange={(e) => {
                      const arr = [...form.reviews];
                      arr[index].name = e.target.value;

                      setForm((prev) => ({
                        ...prev,
                        reviews: arr,
                      }));
                    }}
                  />

                  {/* Reviewer Image */}
                  <input
                    className="mb-3 w-full rounded border p-3"
                    placeholder="Reviewer Image URL"
                    value={review.image}
                    onChange={(e) => {
                      const arr = [...form.reviews];
                      arr[index].image = e.target.value;

                      setForm((prev) => ({
                        ...prev,
                        reviews: arr,
                      }));
                    }}
                  />

                  {/* Rating */}
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="mb-3 w-full rounded border p-3"
                    placeholder="Rating (1-5)"
                    value={review.rating}
                    onChange={(e) => {
                      const arr = [...form.reviews];
                      arr[index].rating = Number(e.target.value);

                      setForm((prev) => ({
                        ...prev,
                        reviews: arr,
                      }));
                    }}
                  />

                  {/* Comment */}
                  <textarea
                    rows={4}
                    className="w-full rounded border p-3"
                    placeholder="Review Comment"
                    value={review.comment}
                    onChange={(e) => {
                      const arr = [...form.reviews];
                      arr[index].comment = e.target.value;

                      setForm((prev) => ({
                        ...prev,
                        reviews: arr,
                      }));
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Footer */}

            <div className="col-span-2 flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border px-6 py-3">
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-emerald-600 px-8 py-3 text-white hover:bg-emerald-700 disabled:opacity-50">
                {loading
                  ? "Saving..."
                  : packageData
                    ? "Update Package"
                    : "Create Package"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackageModal;
