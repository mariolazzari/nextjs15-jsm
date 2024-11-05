import { Layout } from "@/types/Layout";

function DashboardLayout({ children }: Layout) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {children}
    </div>
  );
}

export default DashboardLayout;
