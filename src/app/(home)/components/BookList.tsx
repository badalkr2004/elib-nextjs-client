import React from "react";
import BookCard from "./BookCard";
import { Book } from "@/types";

const BookList = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/books`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("An error while fetching the books.");
  }

  const books = await response.json();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 mt-5 mx-auto">
      {books.map((book: Book) => (
        <BookCard key={book._id} book={book} />
      ))}{" "}
    </div>
  );
};

export default BookList;
