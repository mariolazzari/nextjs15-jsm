"use client";

import { ErrorProps } from "@/types/ErrorProps";

function GlobalError({ error }: Omit<ErrorProps, "reset">) {
  return (
    <div>
      <h2>GlobalError</h2>
      <h3>{error.message}</h3>
    </div>
  );
}

export default GlobalError;
