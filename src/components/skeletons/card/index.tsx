export const CardSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      <div className="bg-gray-800 w-[544px] h-[544px] rounded-lg"></div>
      <div className="flex gap-1 h-8 justify-between">
        <div className="w-1/2 bg-gray-800 rounded-lg"></div>
        <div className="w-1/4 bg-gray-800 rounded-lg"></div>
      </div>
    </div>
  );
};
