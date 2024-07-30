import Header from "./components/Header";
import AddItems from "./components/AddItems";
import ItemsList from "./components/ItemsList";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AddItems />
        <ItemsList />
        <Stats />
      </main>
    </div>
  );
}
