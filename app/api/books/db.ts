import { Book } from "@/types/Book";

export const books: Book[] = [1, 2, 3].map<Book>(id => ({
  id,
  name: `Book ${id}`,
}));
