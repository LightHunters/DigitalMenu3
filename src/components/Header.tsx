
function Header() {
  return (
    <div className="w-full rounded-lg text-cream-sand flex justify-between items-center mb-3 p-3 bg-brown-chestnut/80 shadow-[0_7px_5px] shadow-Dark-Mocha">
      <img
        src="./logoCafe.png"
        alt="logo"
        className="size-12 rounded-full"
      />
      <p className="text-2xl md:text-4xl text-right font-vazir">کافه شهر</p>
    </div>
  );
}

export default Header