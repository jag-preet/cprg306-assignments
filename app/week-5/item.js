export default function Item({name,quantity,category}) {
    return (
      <div className=" bg-slate-600 rounded-lg w-[400px] flex flex-col justify-evenly p-3 hover:scale-105 duration-200 ease-in-out active:scale-95">
        <h2 className=" font-semibold text-xl">{name}</h2>
        <p>Buy {quantity} in {category}</p>
      </div>
    );
  }