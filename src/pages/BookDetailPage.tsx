/* eslint-disable no-unsafe-optional-chaining */
import { Button } from "@/components/ui/button";
import { useGetBookByIdQuery } from "@/redux/api/bookApi";
import { useParams } from "react-router";
import BookHeroImg from "@/assets/annelies-geneyn-bhBONc07WsI-unsplash.webp";
import BookDetailLoading from "@/components/modules/books/BookDetailLoading";

const BookDetailPage = () => {
  const { bookId } = useParams();
  const { data, isLoading } = useGetBookByIdQuery(bookId);

  if (isLoading) {
    return <BookDetailLoading />;
  }

  if (!data?.data) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center text-red-500">
        Book not found.
      </div>
    );
  }

  const { title, author, genre, isbn, description, copies, available } =
    data?.data;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative w-full h-64 sm:h-80 md:h-[500px] overflow-hidden rounded-b-lg">
        <img
          src={BookHeroImg}
          alt="Book Hero"
          className="w-full h-full object-cover brightness-95"
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-md pointer-events-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-md text-center">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <section className="mt-10 space-y-8">
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
          <div className="flex-1">
            <p className="text-gray-500 text-sm font-medium">Author</p>
            <p className="text-gray-800 font-semibold mt-1">{author}</p>
          </div>

          <div className="flex-1">
            <p className="text-gray-500 text-sm font-medium">Genre</p>
            <p className="text-gray-800 font-semibold mt-1">
              {genre?.charAt(0) + genre?.slice(1)?.toLowerCase()}
            </p>
          </div>

          <div className="flex-1">
            <p className="text-gray-500 text-sm font-medium">ISBN</p>
            <p className="text-gray-800 font-semibold mt-1">{isbn}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 mt-2">
          <div
            className={`inline-flex self-start items-center px-4 py-2 rounded-full font-medium text-sm sm:text-base ${
              available && copies > 0
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
            role="status"
            aria-live="polite"
          >
            {available && copies > 0 ? "Available" : "Not Available"}
          </div>

          <div className="text-gray-700 font-medium text-sm sm:text-base self-start">
            Copies: {copies}
          </div>
        </div>

        <div className="mt-6">
          {available && copies > 0 ? (
            <Button variant="default" className="cursor-pointer">
              Borrow Book
            </Button>
          ) : (
            <Button disabled variant="default">
              Borrow Unavailable
            </Button>
          )}
        </div>
      </section>
    </main>
  );
};

export default BookDetailPage;
