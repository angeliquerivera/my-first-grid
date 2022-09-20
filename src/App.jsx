import Header from "./components/sections/Header";
import Eggplant from "./components/sections/Eggplant";
import TicTacToe from "./components/sections/TicTacToe";
import MixedColumns from "./components/sections/MixedColumns";
import Sidebar from "./components/sections/Sidebar";

export default function App() {
  return (
    <main>
      <Header />
      <Eggplant />
      <TicTacToe />
      <MixedColumns />
      <Sidebar />
    </main>
  );
}
