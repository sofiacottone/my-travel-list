import AddItems from "./components/AddItems";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AddItems />
      </main>
    </div>
  );
}
