import { Layout } from "@/types/Layout";
import Link from "next/link";

function RootLayout({ children }: Layout) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/albums", label: "Albums" },
    { href: "/about", label: "About" },
  ];

  return (
    <header>
      <nav className="flex gap-2 mb-4 justify-center p-4">
        {links.map(link => (
          <Link
            className="font-bold hover:text-sky-800"
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {children}
    </header>
  );
}

export default RootLayout;
