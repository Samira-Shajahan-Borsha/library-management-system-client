import { useGetAllBooksQuery } from "@/redux/api/bookApi";
import { DataTable } from "./books/data-table";
import { columns } from "./books/columns";

const HomePage = () => {
  const { isLoading, data } = useGetAllBooksQuery(undefined);

  console.log({ isLoading, data });
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-center my-10 font-semibold text-lg lg:text-2xl underline underline-offset-4">
        Discover & Borrow With Ease
      </h1>
      <DataTable columns={columns} data={data?.data} />
    </main>
  );
};

export default HomePage;
