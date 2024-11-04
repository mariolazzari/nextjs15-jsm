import { Album } from "@/types/Album";
import { AlbumCard } from "./album-card";

type Props = {
  albums: Album[];
};

export function AlbumsContainer({ albums }: Props) {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {albums.map(album => (
        <AlbumCard key={album.id} {...album} />
      ))}
    </div>
  );
}
