export async function AnimalList() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const animals = [
    "Lion",
    "Tiger",
    "Elephant",
    "Giraffe",
    "Zebra",
    "Monkey",
    "Penguin",
    "Dolphin",
    "Eagle",
    "Wolf",
    "Bear",
    "Kangaroo",
    "Panda",
    "Cheetah",
    "Rhino"
  ];

  return (
    <div className="grid gap-3">
      {animals.map((animal, index) => (
        <div
          key={index}
          className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-medium text-gray-800">{animal}</h3>
        </div>
      ))}
    </div>
  );
}