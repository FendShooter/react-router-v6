import { useParams, useNavigate } from 'react-router-dom';

export default function CurrentCourse() {
  const navigate = useNavigate();
  const { courseid } = useParams();

  return (
    <div>
      <p>CurrentCourse</p>
      <h1>{courseid}</h1>

      <button
        onClick={() => {
          navigate('/dashboard', { state: { id: 12, name: 'pass' } });
        }}
        style={{ padding: '1rem 2rem', backgroundColor: 'lightcyan' }}
      >
        Price
      </button>
    </div>
  );
}
