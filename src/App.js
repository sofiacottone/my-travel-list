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

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, packed: !item.packed }
          : item))
  }

  return (
    <div className="app">
      <Header />
      <main>
        <AddItems onAddItems={handleAddItems} />
        <ItemsList
          items={items}
          onDeleteItems={handleDeleteItem}
          onToggleItems={handleToggleItem}
        />
      </main>
      <Stats />
    </div>
  );
}
