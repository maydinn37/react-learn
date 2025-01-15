import { useEffect, useState } from "react";
export default function TestComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Companent ilk yüklendiğinde render olur.");
    return () => {
      console.log("component Destroyed");
    };
  }, []);

  useEffect(() => {
    console.log("Companenet her yüklendiğinde render olur.");
  });

  useEffect(() => {
    console.log("Count Değeri Değişti = ", count);
  }, [count]);

  return (
    <div className="d-flex flex-col justify-content-center align-items-center ">
      <h3 className="mt-4 fs-2">{count}</h3>
      <div className="d-flex mb-3">
        <button
          className="btn btn-primary mt-4 "
          onClick={() => setCount((count) => count + 1)}
        >
          Arttır
        </button>
        <button
          className="btn btn-danger mt-4"
          onClick={() => setCount((count) => 0)}
        >
          Sıfırla
        </button>
        <button
          className="btn btn-warning mt-4"
          onClick={() => setCount((count) => count - 1)}
        >
          Azalt
        </button>
      </div>
      <hr />
      Test Componenti
    </div>
  );
}
