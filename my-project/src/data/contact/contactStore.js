import { create } from "zustand";
import axios from "axios";

const API = "https://testing-travel-agency.onrender.com/api/contact";

const useContactStore = create((set) => ({
  contacts: [],
  loading: false,
  error: null,
  success: false,

  // ========================
  // Send Contact Form
  // ========================
  sendContact: async (formData) => {
    try {
      set({
        loading: true,
        error: null,
        success: false,
      });

      console.log(API);

      await axios.post(API, formData);

      set({
        loading: false,
        success: true,
      });

      return true;
    } catch (error) {
      set({
        loading: false,
        success: false,
        error: error.response?.data?.message || "Failed to send message.",
      });

      return false;
    }
  },

  // ========================
  // Get All Contacts
  // ========================
  getContacts: async () => {
    try {
      set({ loading: true });

      const res = await axios.get(API, {
        withCredentials: true,
      });

      set({
        contacts: res.data.contacts,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to fetch contacts.",
      });
    }
  },

  // ========================
  // Update Read Status
  // ========================
  updateContact: async (id, data) => {
    try {
      await axios.put(`${API}/${id}`, data, {
        withCredentials: true,
      });

      const res = await axios.get(API, {
        withCredentials: true,
      });

      set({
        contacts: res.data.contacts,
      });
    } catch (error) {
      console.error(error);
    }
  },

  // ========================
  // Delete Contact
  // ========================
  deleteContact: async (id) => {
    try {
      await axios.delete(`${API}/${id}`, {
        withCredentials: true,
      });

      set((state) => ({
        contacts: state.contacts.filter((c) => c._id !== id),
      }));
    } catch (error) {
      console.error(error);
    }
  },

  clearStatus: () =>
    set({
      success: false,
      error: null,
    }),
}));

export default useContactStore;
