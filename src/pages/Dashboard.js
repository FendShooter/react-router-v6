import { useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Price {location.state.name}</p>
    </div>
  );
}
