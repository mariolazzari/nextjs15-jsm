import { PageProps } from "@/types/PageProps";

type Params = { id: string };

async function AlbumPage({ params }: PageProps<Params>) {
  const { id } = await params;

  return <div>AlbumPage {id}</div>;
}

export default AlbumPage;
