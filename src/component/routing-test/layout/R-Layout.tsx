// Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../r-navbar/R-Navbar";
import Sidebar from "../r-sidebar/R-Sidebar";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ marginLeft: "200px", padding: "20px" }}>
          <Outlet />
        </main>
      </div> */}
    </div>
  );
};

export default Layout;
