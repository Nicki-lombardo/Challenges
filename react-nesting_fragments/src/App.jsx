import "./App.css";
import Box from "./components/Box";

// Nuevo componente Boxes - Task 1

function Boxes() {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
}

export default function App() {
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}
