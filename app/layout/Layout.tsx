import { Outlet } from "react-router";
import Navigation from "./Navigation"

export default function AppLayout() {
  return (
    <div>
      <div className="header">
        <h1>Header</h1>
        <Navigation />
      </div>

      <Outlet />

      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}