import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { IBook } from "@/types";
import { useBorrowBookMutation } from "@/redux/api/borrowApi";
import { toast } from "sonner";

interface BorrowModalProps {
  book: IBook | null;
  isOpenBorrowModal: boolean;
  setIsOpenBorrowModal: (value: boolean) => void;
}

const formSchema = (maxCopies: number) =>
  z.object({
    book: z.string(),
    quantity: z
      .number()
      .min(1, "Quantity must be at least 1")
      .max(maxCopies, `Quantity cannot exceed ${maxCopies}`),
    dueDate: z.string().refine(
      (dateStr) => {
        const due = new Date(dateStr);
        if (isNaN(due.getTime())) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        due.setHours(0, 0, 0, 0);
        return due >= today;
      },
      { message: "Due date must be today or in the future" }
    ),
  });

const BorrowModal: React.FC<BorrowModalProps> = ({
  book,
  isOpenBorrowModal,
  setIsOpenBorrowModal,
}) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const form = useForm<z.infer<ReturnType<typeof formSchema>>>({
    resolver: zodResolver(formSchema(book?.copies ?? 1)),
    defaultValues: {
      book: book?._id,
      quantity: 1,
      dueDate: new Date().toISOString().split("T")[0],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await borrowBook({
        ...(values as { quntity: number; dueDate: Date }),
        book: book?._id,
      });
      console.log(res, "resssss");

      if (res?.data?.success) {
        setIsOpenBorrowModal(false);
        toast.success(`You have successfully borrowed "${book?.title}"`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={isOpenBorrowModal} onOpenChange={setIsOpenBorrowModal}>
      <DialogTrigger asChild>
        <Button variant="outline">Borrow Book</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Borrow "{book?.title}"</DialogTitle>
          <DialogDescription>
            Enter the quantity you want to borrow and select a return date.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Quantity{" "}
                    <span className="text-sm text-gray-500">
                      (Available: {book?.copies})
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={book?.copies}
                      {...field}
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => {
                const selected = field.value
                  ? new Date(field.value)
                  : undefined;

                return (
                  <FormItem>
                    <Label htmlFor="dueDate" className="px-1">
                      Return Date
                    </Label>
                    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="dueDate"
                          className="w-full justify-between font-normal"
                        >
                          {selected
                            ? selected.toLocaleDateString()
                            : "Select date"}
                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={selected}
                          onSelect={(date) => {
                            if (!date) return;

                            const yyyy = date.getFullYear();
                            const mm = String(date.getMonth() + 1).padStart(
                              2,
                              "0"
                            );
                            const dd = String(date.getDate()).padStart(2, "0");

                            const yyyyMmDd = `${yyyy}-${mm}-${dd}`;

                            field.onChange(yyyyMmDd);
                            setCalendarOpen(false);
                          }}
                          disabled={{
                            before: new Date(new Date().setHours(0, 0, 0, 0)),
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <DialogFooter>
              <div className="flex gap-x-3 items-center justify-end">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit" disabled={isLoading}>
                  Borrow Book
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BorrowModal;
