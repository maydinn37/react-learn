import { useEffect } from "react";
export default function TestComponent() {
  useEffect(() => {
    console.log("Companent ilk yüklendiğinde render olur.");
  }, []);

  useEffect(() => {
    console.log("Companenet her yüklendiğinde render olur.");
  });

  return <div>Test Componenti</div>;
}
