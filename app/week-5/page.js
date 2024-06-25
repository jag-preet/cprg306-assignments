import ItemList from "./item-list";

export default function Page() {
    return (
      <main className="min-h-screen p-5 text-white bg-slate-900">
        <h1 className=" font-bold text-4xl mb-5">Shopping List</h1>
        <ItemList/>
      </main>
    );
  }