import Link from "next/link";

export default function NavItem({ to, children }) {
  return (
    <li className="text-center text-2xl font-bold text-blue-dark duration-200 hover:text-blue-light">
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
