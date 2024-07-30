import { useState } from "react";
import Header from "./components/Header";
import AddItems from "./components/AddItems";
import ItemsList from "./components/ItemsList";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Header />
      <main>
        <AddItems onAddItems={handleAddItems} />
        <ItemsList items={items} />
      </main>
      <Stats />
    </div>
  );
}
