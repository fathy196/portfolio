import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="lead">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <p className="actions">
        <Link href="/" className="btn">
          Back to home
        </Link>
      </p>
    </section>
  );
}
