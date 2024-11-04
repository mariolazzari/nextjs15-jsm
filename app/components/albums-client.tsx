"use client";

import { useState, useEffect } from "react";
import type { Album } from "@/types/Album";
import { AlbumsContainer } from "./albums-container";
import { fetchData } from "@/libs/api";
import { ApiResult } from "@/types/ApiResult";

export function AlbumsClient() {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [error, setError] = useState("");

  const fetchAlbums = async () => {
    console.time("client");
    setLoading(true);
    const res: ApiResult<Album[]> = await fetchData<Album[]>(
      "https://jsonplaceholder.typicode.com/albums"
    );
    setAlbums(res.success ? res.data : []);
    setError(res.success ? "" : res.error);
    setLoading(false);
    console.timeEnd("client");
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  if (loading) {
    return (
      <h2 className="text-blue-800 text-3xl font-bold animate-pulse">
        Fetching albums...
      </h2>
    );
  }

  if (error) {
    return <h2 className="text-red-800 text-3xl font-bold">{error}</h2>;
  }

  return <AlbumsContainer albums={albums} />;
}
