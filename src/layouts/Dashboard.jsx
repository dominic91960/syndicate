import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <header>
        <h1>DashboardLayout</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
