export default async function Comp2() {
  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <div className="p-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg">
      <div className="flex items-center justify-between">
        <span className="font-medium">Random Value:</span>
        <span className="text-2xl font-bold bg-white text-gray-800 px-3 py-1 rounded">
          {Math.random().toFixed(4)}
        </span>
      </div>
    </div>
  );
}
