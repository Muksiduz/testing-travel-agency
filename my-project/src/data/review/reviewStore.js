import { create } from "zustand";
import axios from "axios";

const API = "https://testing-travel-agency.onrender.com/api/reviews";

const useReviewStore = create((set) => ({
  reviews: [],
  review: null,

  loading: false,
  error: null,
  success: false,

  // ===========================
  // GET ALL REVIEWS
  // ===========================

  getReviews: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(API);

      set({
        reviews: res.data.reviews,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to fetch reviews.",
      });
    }
  },

  // ===========================
  // GET SINGLE REVIEW
  // ===========================

  getReview: async (id) => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(`${API}/${id}`);

      set({
        review: res.data.review,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to fetch review.",
      });
    }
  },

  // ===========================
  // CREATE REVIEW
  // ===========================

  createReview: async (reviewData) => {
    set({
      loading: true,
      error: null,
      success: false,
    });

    try {
      const res = await axios.post(API, reviewData, {
        withCredentials: true,
      });

      set((state) => ({
        reviews: [res.data.review, ...state.reviews],
        loading: false,
        success: true,
      }));

      return true;
    } catch (error) {
      set({
        loading: false,
        success: false,
        error: error.response?.data?.message || "Failed to create review.",
      });

      return false;
    }
  },

  // ===========================
  // UPDATE REVIEW
  // ===========================

  updateReview: async (id, reviewData) => {
    set({
      loading: true,
      error: null,
      success: false,
    });

    try {
      const res = await axios.put(`${API}/${id}`, reviewData, {
        withCredentials: true,
      });

      set((state) => ({
        reviews: state.reviews.map((review) =>
          review._id === id ? res.data.review : review,
        ),
        review: res.data.review,
        loading: false,
        success: true,
      }));

      return true;
    } catch (error) {
      set({
        loading: false,
        success: false,
        error: error.response?.data?.message || "Failed to update review.",
      });

      return false;
    }
  },

  // ===========================
  // DELETE REVIEW
  // ===========================

  deleteReview: async (id) => {
    set({
      loading: true,
      error: null,
      success: false,
    });

    try {
      await axios.delete(`${API}/${id}`, {
        withCredentials: true,
      });

      set((state) => ({
        reviews: state.reviews.filter((review) => review._id !== id),
        loading: false,
        success: true,
      }));

      return true;
    } catch (error) {
      set({
        loading: false,
        success: false,
        error: error.response?.data?.message || "Failed to delete review.",
      });

      return false;
    }
  },

  // ===========================
  // CLEAR STATES
  // ===========================

  clearReview: () =>
    set({
      review: null,
    }),

  clearStatus: () =>
    set({
      loading: false,
      error: null,
      success: false,
    }),
}));

export default useReviewStore;
