"use client";

import { ErrorProps } from "@/types/ErrorProps";

function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <div>
      <h2 className="text-2xl text-red-800">Something went wrong!</h2>
      <h3>{error.message}</h3>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

export default ErrorPage;
