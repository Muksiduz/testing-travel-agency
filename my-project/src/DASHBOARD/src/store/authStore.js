import { create } from "zustand";
import API from "../api/axios";

const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  isAuthenticated: false,

  login: async (data) => {
    try {
      const res = await API.post("/auth/login", data);

      console.log("Login response:", res.data);

      set({
        user: res.data.admin,
        isAuthenticated: true,
      });

      return res.data;
    } catch (err) {
      console.log("Login error:", err.response?.data);
      throw err;
    }
  },

  logout: async () => {
    await API.post("/auth/logout");

    set({
      user: null,
      isAuthenticated: false,
    });
  },

  checkAuth: async () => {
    try {
      console.log("Checking auth...");

      const res = await API.get("/auth/me");

      console.log("Auth success:", res.data);

      set({
        user: res.data.admin,
        isAuthenticated: true,
      });
    } catch (err) {
      console.log("Auth failed:", err.response?.data);

      set({
        user: null,
        isAuthenticated: false,
      });
    } finally {
      set({
        loading: false,
      });
    }
  },
}));

export default useAuthStore;
