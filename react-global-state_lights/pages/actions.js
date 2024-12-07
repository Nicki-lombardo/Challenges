import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions />
    </>
  );
}

// nuevo codigo

const ActionsPage = ({ lights, onToggle }) => {
  return (
    <div>
      <h1>Actions Page</h1>
      {lights.map((light) => (
        <button key={light.id} onClick={() => onToggle(light.id)}>
          Toggle {light.name}
        </button>
      ))}
    </div>
  );
};

export default ActionsPage;
