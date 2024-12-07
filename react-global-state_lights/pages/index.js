import Link from "../components/Link";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>777 light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}

// nuevo codigo


import Lights from "../components/Lights";

const HomePage = ({ lights, onToggle }) => {
  const turnedOnCount = lights.filter((light) => light.isOn).length;

  return (
    <div>
      <h1>Home Page</h1>
      <p>Turned on lights: {turnedOnCount}</p>
      <Lights lights={lights} onToggle={onToggle} />
    </div>
  );
};

export default HomePage;

