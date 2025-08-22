import { useGetAllBooksQuery } from "@/redux/api/bookApi";

const HomePage = () => {
  const { isLoading, data } = useGetAllBooksQuery(undefined);

  console.log({ isLoading, data });
  return <div>HomePage</div>;
};

export default HomePage;
