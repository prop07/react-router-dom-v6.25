import React from 'react';
import { useMatches } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Root = () => {
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
      <div>Page Layout</div>
      <Outlet/>
    </div>
  );
};

export default Root;