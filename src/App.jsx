import "./App.css";
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={theme}>
      <div className="bg-gray-50 text-gray-900 dark:bg-dim-900 dark:text-white min-h-screen transition-colors duration-300">
        <div className="container flex h-screen w-full mx-auto xl:max-w-7xl">
          <Left />
          <Middle setTheme={setTheme} />
          <Right />
        </div>
      </div>
    </div>
  );
}

export default App;
