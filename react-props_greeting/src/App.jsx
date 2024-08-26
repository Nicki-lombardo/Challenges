import "./App.css";

// Definir el componente Greeting

const Greeting = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

export default function App() {
  return (
    <div>
      <Greeting name="Jan!" />
    </div>
  );
}
