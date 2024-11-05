import { books } from "../db";

type Context = {
  params: {
    id: string;
  };
};

export async function PATCH(req: Request, { params }: Context) {
  const id = +params.id;
  const book = await req.json();

  const idx = books.findIndex(b => b.id === id);
  books.splice(idx, 1, book);

  return Response.json(books);
}

export function DELETE(req: Request, { params }: Context) {
  const id = +params.id;

  const idx = books.findIndex(b => b.id === id);
  books.splice(idx, 1);

  return Response.json(books);
}
