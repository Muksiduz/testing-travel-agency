import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        {/* Navbar */}

        {/* <header className="flex h-20 items-center justify-between border-b bg-white px-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>

            <p className="text-sm text-slate-500">Welcome back 👋</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">
              A
            </div>
          </div>
        </header> */}

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
