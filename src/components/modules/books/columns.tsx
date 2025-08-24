import { type ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, BookOpen } from "lucide-react";
import { Link } from "react-router";
import type { IBook } from "@/types";
import { toast } from "sonner";

export const getColumns = (
  handleAlertModal: (book: IBook) => void,
  handleEditModal: (book: IBook) => void,
  handleBorrowBook: (book: IBook) => void
): ColumnDef<IBook>[] => [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <Link to={`/books/${row.original._id}`}>
        <span className="font-medium cursor-pointer hover:text-gray-700">
          {row.original.title}
        </span>
      </Link>
    ),
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
    cell: ({ row }) => {
      return (
        <span>
          {row.original.genre.charAt(0).toUpperCase() +
            row.original.genre.slice(1).toLowerCase()}
        </span>
      );
    },
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
    cell: ({ row }) => {
      return row.original.copies === 0 ? (
        <span className="text-red-500">{row.original.copies}</span>
      ) : (
        <span>{row.original.copies}</span>
      );
    },
  },
  {
    accessorKey: "available",
    header: "Availability",
    cell: ({ row }) => {
      return row.original.available ? (
        <span>Available</span>
      ) : (
        <span className="text-red-500"> Unavailable</span>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const book = row.original;
      //   console.log(book);

      return (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label={`Edit ${book.title}`}
            title="Edit"
            onClick={() => handleEditModal(book)}
          >
            <Pencil size={16} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label={`Delete ${book.title}`}
            title="Delete"
            onClick={() => handleAlertModal(book)}
          >
            <Trash2 size={16} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label={`Borrow ${book.title}`}
            title="Borrow"
            onClick={() => {
              if (book?.copies > 0 && book?.available) {
                handleBorrowBook(book);
              } else {
                toast.error(`${book.title} is not available to borrow`, {
                  id: 1,
                });
              }
            }}
          >
            <BookOpen size={16} />
          </Button>
        </div>
      );
    },
  },
];
