export async function FruitList() {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Strawberry",
    "Mango",
    "Pineapple",
    "Grapes",
    "Watermelon",
    "Peach",
    "Plum",
    "Cherry",
    "Blueberry",
    "Kiwi",
    "Papaya",
    "Coconut",
    "Lemon",
    "Lime",
    "Carrot",
  ];

  return (
    <div className="grid gap-3">
      {fruits.map((fruit, index) => (
        <div
          key={index}
          className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-medium text-gray-800">{fruit}</h3>
        </div>
      ))}
    </div>
  );
}
