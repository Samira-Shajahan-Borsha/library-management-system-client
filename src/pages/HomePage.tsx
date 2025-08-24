import { getColumns } from "@/components/modules/books/columns";
import { DataTable } from "@/components/modules/books/data-table";
import DeleteBookAlertModal from "@/components/modules/books/DeleteBookAlertModal";
import EditBookModal from "@/components/modules/books/EditBookModal";
import BorrowModal from "@/components/modules/borrow/BorrowModal";
import Spinner from "@/components/shared/Spinner";
import { useGetAllBooksQuery } from "@/redux/api/bookApi";
import type { IBook } from "@/types";
import { useState } from "react";

const HomePage = () => {
  const [isOpenDeleteAlertModal, setIsOpenDeleteAlertModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenBorrowModal, setIsOpenBorrowModal] = useState(false);
  const [book, setBook] = useState<IBook | null>(null);

  const { isLoading, data } = useGetAllBooksQuery(undefined);

  const handleAlertModal = (book: IBook) => {
    setBook(book);
    setIsOpenDeleteAlertModal(!isOpenDeleteAlertModal);
  };

  const handleEditModal = (book: IBook) => {
    setBook(book);
    setIsOpenEditModal(!isOpenEditModal);
  };

  const handleBorrowBook = (book: IBook) => {
    setBook(book);
    setIsOpenBorrowModal(!isOpenBorrowModal);
  };

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {isOpenDeleteAlertModal && (
        <DeleteBookAlertModal
          book={book}
          isOpenDeleteAlertModal={isOpenDeleteAlertModal}
          setIsOpenDeleteAlertModal={setIsOpenDeleteAlertModal}
        />
      )}
      {isOpenEditModal && (
        <EditBookModal
          book={book}
          isOpen={isOpenEditModal}
          setIsOpen={setIsOpenEditModal}
        />
      )}
      {isOpenBorrowModal && (
        <BorrowModal
          book={book}
          isOpenBorrowModal={isOpenBorrowModal}
          setIsOpenBorrowModal={setIsOpenBorrowModal}
        />
      )}
      <h1 className="text-center my-10 font-semibold text-lg lg:text-2xl underline underline-offset-4">
        Library Management System
      </h1>
      <DataTable
        columns={getColumns(
          handleAlertModal,
          handleEditModal,
          handleBorrowBook
        )}
        data={data?.data}
      />
    </main>
  );
};

export default HomePage;
