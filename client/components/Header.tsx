import Link from "next/link";

export default function Header() {
  return (
    <ul className="flex pt-5 text-3xl">
      <li className="pl-5">
        <Link href="/">
          <a>HOME</a>
        </Link>
      </li>
      <li className="pl-5">
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
      </li>
    </ul>
  );
}
