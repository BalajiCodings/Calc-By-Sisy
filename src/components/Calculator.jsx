import { useState } from "react";
import { motion } from "framer-motion";

const Calculator = ({ darkMode }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // ⚠️ Avoid using eval in real-world apps
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-xl shadow-lg w-80 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      {/* Minimal Motivational Tagline */}
      <div className="text-center text-sm font-semibold opacity-75 mb-3">
         <span className="text-blue-500">Calculate. Learn. Innovate.</span>
      </div>

      {/* Display Input & Result */}
      <div className="text-right mb-4">
        <input
          type="text"
          value={input}
          className="w-full p-3 text-2xl bg-gray-700 rounded-lg outline-none"
          readOnly
        />
        <div className="text-3xl font-bold mt-2">{result}</div>
      </div>

      {/* Calculator Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/"].map((char) => (
          <motion.button
            whileTap={{ scale: 0.9 }}
            key={char}
            className="p-4 bg-gray-600 hover:bg-gray-500 text-xl rounded-lg"
            onClick={() => handleClick(char)}
          >
            {char}
          </motion.button>
        ))}
        {["4", "5", "6", "*"].map((char) => (
          <motion.button
            whileTap={{ scale: 0.9 }}
            key={char}
            className="p-4 bg-gray-600 hover:bg-gray-500 text-xl rounded-lg"
            onClick={() => handleClick(char)}
          >
            {char}
          </motion.button>
        ))}
        {["1", "2", "3", "-"].map((char) => (
          <motion.button
            whileTap={{ scale: 0.9 }}
            key={char}
            className="p-4 bg-gray-600 hover:bg-gray-500 text-xl rounded-lg"
            onClick={() => handleClick(char)}
          >
            {char}
          </motion.button>
        ))}
        {["0", ".", "+", "="].map((char) => (
          <motion.button
            whileTap={{ scale: 0.9 }}
            key={char}
            className={`p-4 ${
              char === "=" ? "bg-green-600 hover:bg-green-500" : "bg-gray-600 hover:bg-gray-500"
            } text-xl rounded-lg`}
            onClick={char === "=" ? calculateResult : () => handleClick(char)}
          >
            {char}
          </motion.button>
        ))}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="col-span-2 p-4 bg-red-600 hover:bg-red-500 text-xl rounded-lg"
          onClick={clearInput}
        >
          C
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Calculator;
