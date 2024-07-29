import Header from "./components/Header";
import AddItems from "./components/AddItems";
import ItemsList from "./components/ItemsList";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AddItems />
        <ItemsList />
      </main>
    </div>
  );
}
