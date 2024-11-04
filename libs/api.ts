import { ApiResult } from "@/types/ApiResult";

function fetchError(ex: unknown): string {
  switch (true) {
    case ex instanceof Error:
      return ex.message;

    default:
      return "Error fetchin data";
  }
}

export async function fetchData<T>(url: string): Promise<ApiResult<T>> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    const data: T = await res.json();

    return { success: true, data };
  } catch (ex) {
    const error = fetchError(ex);

    return { success: false, error };
  }
}
