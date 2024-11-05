import { ApiContext } from "@/types/ApiContext";
import { books } from "../db";

type Context = ApiContext<{
  id: string;
}>;

export async function PATCH(req: Request, { params }: Context) {
  const id = +(await params).id;
  const book = await req.json();

  const idx = books.findIndex(b => b.id === id);
  books.splice(idx, 1, book);

  return Response.json(books);
}

export async function DELETE(req: Request, { params }: Context) {
  const id = +(await params).id;

  const idx = books.findIndex(b => b.id === id);
  books.splice(idx, 1);

  return Response.json(books);
}
