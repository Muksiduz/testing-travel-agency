import { useEffect, useMemo, useState } from "react";
import useContactStore from "../../../data/contact/contactStore";

const Bookings = () => {
  const { contacts, loading, getContacts, updateContact, deleteContact } =
    useContactStore();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    getContacts();
  }, []);

  const formatValue = (value) => {
    if (value === null || value === undefined || value === "") {
      return "Not Provided";
    }

    return value;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const filteredBookings = useMemo(() => {
    return contacts
      .filter((booking) => {
        if (filter === "read") return booking.isRead;
        if (filter === "unread") return !booking.isRead;
        return true;
      })
      .filter((booking) => {
        const keyword = search.toLowerCase();

        return (
          booking.name?.toLowerCase().includes(keyword) ||
          booking.phone?.toLowerCase().includes(keyword) ||
          booking.email?.toLowerCase().includes(keyword) ||
          booking.subject?.toLowerCase().includes(keyword) ||
          booking.message?.toLowerCase().includes(keyword)
        );
      });
  }, [contacts, search, filter]);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent"></div>
          <p className="mt-5 text-lg text-gray-300">
            Loading Booking Enquiries...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  p-8 bg-white text-gray-900">
      {/* Header */}

      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Booking Enquiries
          </h1>

          <p className="mt-2 text-gray-400">
            Manage customer enquiries from your travel website.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 px-8 py-5 backdrop-blur-lg">
          <p className="text-sm text-gray-400">Total Enquiries</p>

          <h2 className="mt-1 text-4xl font-bold text-cyan-400">
            {contacts.length}
          </h2>
        </div>
      </div>

      {/* Search & Filters */}

      <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Search by name, phone, destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#e2e6ed] px-5 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-cyan-400 lg:max-w-md"
          />

          <div className="flex flex-wrap gap-3"></div>
        </div>
      </div>
      {/* Booking Cards */}

      {filteredBookings.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 py-24 text-center backdrop-blur-xl">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10 text-4xl">
            📭
          </div>

          <h2 className="text-2xl font-semibold">No Enquiries Found</h2>

          <p className="mt-2 text-gray-400">
            Try changing your search or filter.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredBookings.map((booking) => (
            <div
              key={booking._id}
              className={`group overflow-hidden rounded-3xl border bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                booking.isRead ? "border-green-500/30" : "border-cyan-400/30"
              }`}>
              {/* Top Colored Strip */}

              <div className="p-6">
                {/* Header */}

                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold">
                      {formatValue(booking.name)}
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      {formatDate(booking.createdAt)}
                    </p>
                  </div>
                </div>

                {/* Info */}

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📍</span>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Destination
                      </p>

                      <p className="text-gray-200">
                        {formatValue(booking.subject)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-lg">📞</span>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Phone
                      </p>

                      <p>{formatValue(booking.phone)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-lg">✉️</span>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        Email
                      </p>

                      <p className="break-all">{formatValue(booking.email)}</p>
                    </div>
                  </div>
                </div>

                {/* Message */}

                <div className="mt-6 rounded-2xl bg-green-500/10 p-4">
                  <p className="mb-2 text-xs uppercase tracking-wider text-gray-800">
                    Customer Message
                  </p>

                  <p className="line-clamp-3 text-gray-800">
                    {formatValue(booking.message)}
                  </p>
                </div>

                {/* Buttons */}

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      if (window.confirm("Delete this enquiry permanently?")) {
                        deleteContact(booking._id);
                      }
                    }}
                    className="rounded-xl text-white bg-red-500 px-5 py-3 font-medium transition hover:bg-red-600">
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

export default Bookings;
