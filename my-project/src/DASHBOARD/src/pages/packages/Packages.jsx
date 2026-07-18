import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Star,
  MapPin,
  Clock,
  IndianRupee,
} from "lucide-react";

import usePackageStore from "./packageStore";
import PackageModal from "./packageModal";

const Packages = () => {
  const { packages, loading, getPackages, deletePackage, toggleFeatured } =
    usePackageStore();

  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    getPackages();
  }, []);

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      return (
        pkg.title.toLowerCase().includes(search.toLowerCase()) ||
        pkg.location.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [packages, search]);

  const handleEdit = (pkg) => {
    setSelectedPackage(pkg);
    setOpenModal(true);
  };

  const handleAdd = () => {
    setSelectedPackage(null);
    setOpenModal(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this package?");

    if (!confirmDelete) return;

    await deletePackage(id);
  };

  return (
    <div className="space-y-8 p-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Packages</h1>

          <p className="mt-1 text-slate-500">Manage all travel packages.</p>
        </div>

        <button
          onClick={handleAdd}
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white transition hover:bg-emerald-700">
          <Plus size={18} />
          Add Package
        </button>
      </div>

      {/* Search */}

      <div className="relative max-w-md">
        <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />

        <input
          type="text"
          placeholder="Search packages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none focus:border-emerald-500"
        />
      </div>

      {/* Loading */}

      {loading && (
        <div className="rounded-xl bg-white p-10 text-center shadow">
          Loading packages...
        </div>
      )}

      {/* Empty */}

      {!loading && filteredPackages.length === 0 && (
        <div className="rounded-xl bg-white p-12 text-center shadow">
          <h2 className="text-xl font-semibold">No Packages Found</h2>

          <p className="mt-2 text-slate-500">
            Click "Add Package" to create your first package.
          </p>
        </div>
      )}

      {/* Cards */}

      {!loading && filteredPackages.length > 0 && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg._id}
              className="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-xl">
              <img
                src={pkg.image || "https://placehold.co/600x400"}
                alt={pkg.title}
                className="h-52 w-full object-cover"
              />

              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-semibold">{pkg.title}</h2>
                  {/* 
                  {pkg.featured && (
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                      Featured
                    </span>
                  )} */}
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {pkg.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {pkg.duration}
                  </div>

                  <div className="flex items-center gap-2">
                    <IndianRupee size={16} />
                    {pkg.price}
                  </div>
                </div>

                <p className="line-clamp-3 text-sm text-slate-500">
                  {pkg.description}
                </p>

                <div className="flex items-center justify-between border-t pt-4">
                  <button
                    onClick={() => toggleFeatured(pkg._id)}
                    className={`rounded-lg p-2 
                 
                    `}>
                    <Star size={18} />
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(pkg)}
                      className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200">
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => handleDelete(pkg._id)}
                      className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-200">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Add / Edit Modal */}

      <PackageModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedPackage(null);
        }}
        packageData={selectedPackage}
        onSuccess={() => {
          getPackages();
          setOpenModal(false);
          setSelectedPackage(null);
        }}
      />
    </div>
  );
};

export default Packages;
