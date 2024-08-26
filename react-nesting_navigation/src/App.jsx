import Header from "./components/Header";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import "./App.css";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
