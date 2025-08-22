const BookDetailLoading = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* hero skeleton */}
      <div className="relative w-full h-64 sm:h-80 md:h-[500px] overflow-hidden rounded-b-lg bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-300 via-gray-200 to-transparent animate-pulse" />
      </div>

      {/* text skeleton */}
      <div className="mt-8 space-y-4">
        <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="space-y-2">
            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-36 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-12 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
        <div className="h-10 w-36 bg-gray-200 rounded animate-pulse mt-4" />
      </div>
    </div>
  );
};

export default BookDetailLoading;
