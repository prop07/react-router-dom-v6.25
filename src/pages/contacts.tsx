import React from 'react';
import { useMatches } from 'react-router-dom';

const Contact = () => {
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
      <div>Contact</div>
    </div>
  );
};

export default Contact;