import { AlbumsClient } from "@/app/components/albums-client";
import { AlbumsContainer } from "@/app/components/albums-container";
import { fetchData } from "@/libs/api";
import { Album } from "@/types/Album";

async function AlbumsPage() {
  console.time("server");
  const res = await fetchData<Album[]>(
    "https://jsonplaceholder.typicode.com/albums"
  );
  if (!res.success) {
    throw new Error(res.error);
  }
  console.timeEnd("server");

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold my-4">Server component</h2>
      <AlbumsContainer albums={res.data} />

      <h2 className="text-3xl font-bold my-4">Client component</h2>
      <AlbumsClient />
    </div>
  );
}

export default AlbumsPage;
