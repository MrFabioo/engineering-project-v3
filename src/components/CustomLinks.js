import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export function CustomLinkDashboard({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link
      to={to}
      className={
        isActive
          ? 'active text-xl hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 tracking-normal ml-5 mr-5'
          : 'text-xl hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 tracking-normal ml-5 mr-5'
      }
      {...props}
    >
      <li>{children}</li>
    </Link>
  );
}

export function CustomLinkMobile({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link
      to={to}
      className={isActive ? 'active text-grey-800 pt-8' : 'text-grey-800 pt-8'}
      {...props}
    >
      <li>{children}</li>
    </Link>
  );
}
