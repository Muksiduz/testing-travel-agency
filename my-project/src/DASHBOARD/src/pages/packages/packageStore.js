import { create } from "zustand";
import axios from "axios";

const API = "https://testing-travel-agency.onrender.com/api/packages";

const usePackageStore = create((set) => ({
  packages: [],
  loading: false,

  // Get All Packages
  getPackages: async () => {
    try {
      set({ loading: true });

      const res = await axios.get(API, {
        withCredentials: true,
      });

      set({
        packages: res.data.packages || res.data,
        loading: false,
      });
    } catch (error) {
      console.error(error);

      set({ loading: false });
    }
  },

  // Create Package
  createPackage: async (packageData) => {
    try {
      const res = await axios.post(API, packageData, {
        withCredentials: true,
      });

      set((state) => ({
        packages: [...state.packages, res.data],
      }));

      return {
        success: true,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: error.response?.data?.message || "Failed to create package",
      };
    }
  },

  // Update Package
  updatePackage: async (id, packageData) => {
    try {
      const res = await axios.put(`${API}/${id}`, packageData, {
        withCredentials: true,
      });

      set((state) => ({
        packages: state.packages.map((pkg) =>
          pkg._id === id ? res.data : pkg,
        ),
      }));

      return {
        success: true,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: error.response?.data?.message || "Failed to update package",
      };
    }
  },

  // Delete Package
  deletePackage: async (id) => {
    try {
      await axios.delete(`${API}/${id}`, {
        withCredentials: true,
      });

      set((state) => ({
        packages: state.packages.filter((pkg) => pkg._id !== id),
      }));

      return {
        success: true,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
      };
    }
  },

  // Toggle Featured
  toggleFeatured: async (id) => {
    try {
      const res = await axios.patch(
        `${API}/${id}/featured`,
        {},
        {
          withCredentials: true,
        },
      );

      set((state) => ({
        packages: state.packages.map((pkg) =>
          pkg._id === id ? res.data : pkg,
        ),
      }));
    } catch (error) {
      console.error(error);
    }
  },

  // Get One Package
  getPackageById: async (id) => {
    try {
      const res = await axios.get(`${API}/${id}`, {
        withCredentials: true,
      });

      return res.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  // Clear Store
  clearPackages: () => {
    set({
      packages: [],
    });
  },
}));

export default usePackageStore;
