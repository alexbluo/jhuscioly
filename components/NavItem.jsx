import Link from "next/link";

export default function NavItem({ to, children }) {
  return (
    <li className="text-2xl font-bold">
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
