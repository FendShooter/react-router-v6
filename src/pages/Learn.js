import { Link, Outlet } from 'react-router-dom';

function Learn() {
  return (
    <div>
      <h1>All courses listed here</h1>
      <Link to='/learn/courses'>Courses</Link>
      <p>|</p>
      <Link to='/learn/bundler'>Bundler</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Learn;
