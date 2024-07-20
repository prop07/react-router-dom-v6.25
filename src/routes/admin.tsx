import React from 'react';
import { useMatches } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  const matches = useMatches();
  const currentRoute = matches.find(match => match.handle?.title);
  const title = currentRoute?.handle?.title;

  React.useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <div>
      <p>admin layout</p>
      <Outlet/>
    </div>
  );
};

export default Admin;