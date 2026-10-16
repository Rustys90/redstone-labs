import { Link } from "react-router-dom";
import "./placeholder.css";

interface PlaceholderPageProps {
  title: string;
  note?: string;
}

/**
 * Temporary stand-in for pages owned by other workers.
 * Replaced with real content in the same route — never shipped.
 */
export default function PlaceholderPage({ title, note }: PlaceholderPageProps) {
  return (
    <div className="placeholder-page">
      <div className="container">
        <p className="section-eyebrow">Redstone Labs</p>
        <h1>{title}</h1>
        <p className="placeholder-note">
          {note ?? "This page is being rebuilt — check back soon."}
        </p>
        <Link to="/" className="btn btn-ghost">
          Back to home
        </Link>
      </div>
    </div>
  );
}
