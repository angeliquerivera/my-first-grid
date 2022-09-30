import Header from "./components/sections/Header";
import Eggplant from "./components/sections/Eggplant";
import TicTacToe from "./components/sections/TicTacToe";
import MixedColumns from "./components/sections/MixedColumns";
import Sidebar from "./components/sections/Sidebar";
import Pancake from "./components/sections/Pancake";
import RepeatMultipleTracks from "./components/sections/RepeatMultipleTracks";
import VisualLines from "./components/sections/VisualLines";
import SpansOnly from "./components/sections/SpansOnly";
import SingleLineNames from "./components/sections/SingleLineNames";
import GridAreaNames from "./components/sections/GridAreaNames";
import ThreeByThree from "./components/practice-grids/ThreeByThree";
import Staircase from "./components/practice-grids/Staircase";

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
      <SpansOnly />
      <SingleLineNames />
      <GridAreaNames />
      <ThreeByThree />
      <Staircase />
    </main>
  );
}
