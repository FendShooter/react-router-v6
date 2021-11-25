import { useMemo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Courses() {
  const coursesMemo = useMemo(
    () => [
      { id: 1, title: 'React' },
      { id: 2, title: 'Vue' },
      { id: 3, title: 'Angular' },
    ],
    []
  );
  console.log('courses');
  return (
    <div>
      <h1>Courses page</h1>
      {coursesMemo &&
        coursesMemo.map((course) => (
          <div key={course.id}>
            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? 'pink' : 'green',
                  padding: '1rem',
                  color: isActive ? 'white' : 'black',
                  margin: '0.3rem 0',
                  display: 'inline-block',
                };
              }}
              to={`/learn/courses/${course.title.toLowerCase()}`}
            >
              {course.title}
            </NavLink>
          </div>
        ))}
      <Outlet />
    </div>
  );
}
