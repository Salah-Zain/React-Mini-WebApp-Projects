import "./app.css";
import MenuBar from "./components/MenuBar/MenuBar";
import SideBar from "./components/sidebar/SideBar";

export function App() {
  return (
    <div className="app flex">
      <SideBar />
      <MenuBar />
    </div>
  );
}
