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
import { useDeleteBookMutation } from "@/redux/api/bookApi";
import type { IBook } from "@/types";
import { toast } from "sonner";

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
  const [deleteBook, { isLoading }] = useDeleteBookMutation();

  const handleDelete = async (book: IBook) => {
    const res = await deleteBook(book?._id);
    if (res?.data?.success) {
      toast.success(`${book?.title} deleted successfully`);
    }
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
            onClick={() => handleDelete(book as IBook)}
            className="bg-red-700 hover:bg-red-700"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBookModal;
