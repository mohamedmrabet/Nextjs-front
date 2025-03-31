import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-400 p-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl">
          Logo
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-white hover:text-black">
            Home
          </Link>
          <Link href="/avatar" className="text-white hover:text-black">
           Avatar
          </Link>
          <Link href="/inputs" className="text-white hover:text-black">
            Input
          </Link>
        </div>
      </div>
    </nav>
  );
}
