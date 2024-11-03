import { ErrorProps } from "@/types/ErrorProps";

function GlobalError({ error }: ErrorProps) {
  return (
    <div>
      <h2>GlobalError</h2>
      <h3>{error.message}</h3>
    </div>
  );
}

export default GlobalError;
