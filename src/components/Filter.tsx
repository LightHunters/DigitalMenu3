function Filter({ filter, setFilter,classFilter }: any) {
  const categorys = [
    "All",
    "Hot Drinks",
    "Cold Drinks",
    "Desserts",
    "Snacks",
    "Salads",
    "Soups",
    "Drinks",
  ];
  return (
    <div className={classFilter}>
      {categorys.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`cursor-pointer text-sm py-1 px-2 rounded-2xl text-warm-lvory font-pacifico ${
            category == filter ? "bg-Rich-Walnut" : " bg-Pale-Cocoa"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;
