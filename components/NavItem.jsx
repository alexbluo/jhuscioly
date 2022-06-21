import Link from "next/link";

export default function NavItem({ to, children }) {
  return (
    <li className="text-center text-2xl font-bold text-blue-dark duration-200 hover:bg-gradient-to-r hover:from-blue-dark hover:to-blue-light hover:bg-clip-text hover:text-transparent">
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
