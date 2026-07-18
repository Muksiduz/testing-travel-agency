import { create } from "zustand";
import axios from "axios";

const API = "http://localhost:5000/api/packages";

const usePackageStore = create((set) => ({
  packages: [],
  packageDetails: null,
  loading: false,
  error: null,

  // Fetch all packages
  getPackages: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const res = await axios.get(API);
      console.log(res.data);

      set({
        packages: res.data.packages,
        loading: false,
      });
    } catch (error) {
      console.error(error);

      set({
        loading: false,
        error: error.response?.data?.message || "Something went wrong",
      });
    }
  },

  // Fetch single package
  getPackageById: async (id) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const res = await axios.get(`${API}/${id}`);

      set({
        packageDetails: res.data.package,
        loading: false,
      });

      return res.data;
    } catch (error) {
      console.error(error);

      set({
        loading: false,
        error: error.response?.data?.message || "Package not found",
      });

      return null;
    }
  },

  clearPackageDetails: () => {
    set({
      packageDetails: null,
    });
  },
}));

export default usePackageStore;
