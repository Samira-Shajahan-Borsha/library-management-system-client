import { useGetAllBooksQuery } from "@/redux/api/bookApi";
import { DataTable } from "./books/data-table";
import { getColumns, type IBook } from "./books/columns";
import { useState } from "react";
import DeleteBookModal from "@/components/modules/books/DeleteBookModal";

const HomePage = () => {
  const [isOpenDeleteAlertModal, setIsOpenDeleteAlertModal] =
    useState<boolean>(false);
  const [book, setBook] = useState<IBook | null>(null);

  const { isLoading, data } = useGetAllBooksQuery(undefined);

  // console.log({ isLoading, data });

  const handleAlertModal = (book: IBook) => {
    console.log(book, "from home patge");
    setBook(book);
    setIsOpenDeleteAlertModal(!isOpenDeleteAlertModal);
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {isOpenDeleteAlertModal && (
        <DeleteBookModal
          book={book}
          isOpenDeleteAlertModal={isOpenDeleteAlertModal}
          setIsOpenDeleteAlertModal={setIsOpenDeleteAlertModal}
        />
      )}
      <h1 className="text-center my-10 font-semibold text-lg lg:text-2xl underline underline-offset-4">
        Discover & Borrow With Ease
      </h1>
      <DataTable columns={getColumns(handleAlertModal)} data={data?.data} />
    </main>
  );
};

export default HomePage;
