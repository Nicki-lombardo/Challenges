import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ lights, toggleLight }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <Lights lights={lights} toggleLight={toggleLight} />
    </>
  );
}


// nuevo codigo

import Light from "./Light";



const Lights = ({ lights, onToggle }) => {
  return (
    <div>
      {lights.map((light) => (
        <Light
          key={light.id}
          isOn={light.isOn}
          name={light.name}
          onToggle={() => onToggle(light.id)}
        />
      ))}
    </div>
  );
};

export default Lights;

