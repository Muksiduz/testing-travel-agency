import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await login(form);
      navigate("/admin/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop')",
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white">NE Way</h1>

          <p className="mt-2 text-sm tracking-[4px] text-gray-300 uppercase">
            Admin Portal
          </p>

          <p className="mt-4 text-gray-300">
            Welcome back. Sign in to manage your travel experiences.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-gray-200">Email</label>

            <input
              type="email"
              placeholder="admin@neway.com"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-200">Password</label>

            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-gray-200">
            Login
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-300">
          NE Way Travel Agency • Admin Access Only
        </div>
      </div>
    </div>
  );
};

export default Login;
