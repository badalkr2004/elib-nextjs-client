import Image from "next/image";
import Banner from "./components/Banner";
import BookList from "./components/BookList";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl py-2 md:py-10 px-2 md:px-0 ">
      <Banner />
      <BookList />
    </div>
  );
}
