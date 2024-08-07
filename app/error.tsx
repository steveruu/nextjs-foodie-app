"use client"

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <div className="error">
      <h1>An error occured</h1>
      <p>{error.message}</p>
    </div>
  );
}