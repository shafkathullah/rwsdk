export default function SkeletonComp() {
  return (
    <div className="p-4 bg-gray-200 rounded-lg animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-5 w-24 bg-gray-300 rounded"></div>
        <div className="h-8 w-20 bg-gray-300 rounded px-3 py-1"></div>
      </div>
    </div>
  );
}