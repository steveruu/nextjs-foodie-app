import Link from "next/link";

export const metadata = {
  title: "404 | NextFood",
  description: "Unfortunately, the requested resource was not found."
};

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Unfortunately, the requested resource was not found. </p>
    </div>
  );
}