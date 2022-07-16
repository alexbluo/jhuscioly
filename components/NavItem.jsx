import Link from "next/link";

export default function NavItem({ to, children }) {
  return (
    <li className="text-center text-xl font-bold text-blue-dark">
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
