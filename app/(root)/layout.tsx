import { Layout } from "@/types/Layout";

function RootLayout({ children }: Layout) {
  return (
    <div>
      <h1>NavBar</h1>
      {children}
    </div>
  );
}

export default RootLayout;
