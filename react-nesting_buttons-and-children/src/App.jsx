import "./App.css";

export default function App() {
  return (
    <main>
      <Button> Click me!</Button>
      <Button> Get Started</Button>
      <Button> Sign Up</Button>
      <Button> Shop Now!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      Click me!
    </button>
  );
}
