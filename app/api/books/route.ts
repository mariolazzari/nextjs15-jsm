import { Book } from "@/types/Book";
import { books } from "./db";

export function GET() {
  return Response.json(books);
}

export async function POST(req: Request) {
  const book: Book = await req.json();
  books.push(book);

  return Response.json(books);
}
