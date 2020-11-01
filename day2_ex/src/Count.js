import React, { useEffect, useState } from "react";

function Count(props) {
  const { initCount, increment, decrement } = props;

  const [count, setCount] = useState(Number(initCount));

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + increment)}>Increment me</button>
      <button onClick={() => setCount(count - decrement)}>Decrement me</button>
      <p>Value: {count}</p>
    </div>
  );
}
export default Count;
