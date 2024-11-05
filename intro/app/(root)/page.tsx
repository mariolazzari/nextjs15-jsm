import { Hello } from "@/app/components/hello";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | NextJS 15",
  description: "Home of NextJS 15 course",
};

async function HomePage() {
  return (
    <div className="text-3xl">
      <h1 className="text-3xl">Home page</h1>
      <Hello />
    </div>
  );
}

export default HomePage;
