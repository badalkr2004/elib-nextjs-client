import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookPage = async ({ params }: { params: { bookId: string } }) => {
  let book: Book | null;
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/books/${params.bookId}`
    );
    if (!response.ok) {
      throw new Error("error while fetching book");
    }

    book = await response.json();
  } catch (error: any) {
    throw new Error("error while fetching book", error);
  }

  if (!book) {
    throw new Error("Book not found");
  }

  return (
    <div className="p-5 md:p-0 mx-auto mt-5 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
      <div className="">
        <Image
          src={book?.coverImage}
          width={0}
          height={0}
          alt={book.title}
          sizes="100vw"
          className="w-[100%] h-full"
        />
      </div>
      <div>
        <h1 className="mb-5 text-3xl md:text-5xl font-bold leading-[1.1]">
          {book.title}
        </h1>
        <span className="font-semibold">by {book.author.name}</span>

        <p className="mt-3 mb-1 text-sm leading-8">{book.description}</p>

        <h2 className="text-sm font-bold">Genre: {book.genre}</h2>
        <Link
          href={book.file}
          target="_blank"
          className="py-1 px-2 rounded border border-primary-500 mt-4 inline-block text-primary-500 font-medium text-sm
                    hover:border-primary-100 hover:bg-primary-100 transition"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BookPage;
