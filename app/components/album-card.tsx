import type { Album } from "@/types/Album";

export function AlbumCard({ title }: Album) {
  return (
    <div className="max-w-32 h-24 overflow-y-auto p-2 rounded-md shadow-sm border border-blue-600">
      <h2 className="text-ellipsis max-w-32">{title}</h2>
    </div>
  );
}
