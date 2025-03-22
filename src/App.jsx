import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen flex justify-center items-center transition-all duration-500 ${
        darkMode ? "text-white" : "text-black"
      }`}
      style={{
        backgroundImage: darkMode
          ? "url('/dark-science.jpg')"  // Dark Mode Background
          : "url('/light-science.jpg')", // Light Mode Background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        className="absolute top-5 right-5 p-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-all"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <Calculator darkMode={darkMode} />
    </div>
  );
}

export default App;
