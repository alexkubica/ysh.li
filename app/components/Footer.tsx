import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-8 ">
      <aside>
        <p>
          <Link className="link" href="/">
            יש.לי - ysh.li
          </Link>
        </p>
      </aside>
    </footer>
  );
}
