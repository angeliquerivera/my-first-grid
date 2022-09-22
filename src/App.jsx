import Header from "./components/sections/Header";
import Eggplant from "./components/sections/Eggplant";
import TicTacToe from "./components/sections/TicTacToe";
import MixedColumns from "./components/sections/MixedColumns";
import Sidebar from "./components/sections/Sidebar";
import Pancake from "./components/sections/Pancake";
import RepeatMultipleTracks from "./components/sections/RepeatMultipleTracks";
import VisualLines from "./components/sections/VisualLines";

export default function App() {
  return (
    <main>
      <Header />
      <Eggplant />
      <TicTacToe />
      <RepeatMultipleTracks />
      <MixedColumns />
      <Sidebar />
      <Pancake />
      <VisualLines />
    </main>
  );
}
