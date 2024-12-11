import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-grayScale-200">{count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        click
      </button>
    </>
  );
}

export default App;
