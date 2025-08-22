import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { IBook } from "@/pages/home/books/columns";

interface DeleteBookModalProps {
  book: IBook | null;
  isOpenDeleteAlertModal: boolean;
  setIsOpenDeleteAlertModal: (value: boolean) => void;
}

const DeleteBookModal: React.FC<DeleteBookModalProps> = ({
  book,
  isOpenDeleteAlertModal,
  setIsOpenDeleteAlertModal,
}) => {
  const handleDelete = (bookId: string) => {
    console.log(bookId, "BookId from alert modal");
  };

  return (
    <AlertDialog
      open={isOpenDeleteAlertModal}
      onOpenChange={setIsOpenDeleteAlertModal}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {`Are you sure you want to delete "${book?.title}" book?`}
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your data
            from our server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDelete(book?._id as string)}
            className="bg-red-700 hover:bg-red-700"
          >
            Delete
          </AlertDialogAction>
          {/* <Button
            onClick={() => handleDelete(book?._id as string)}
            variant="destructive"
          >
            Delete
          </Button> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBookModal;
