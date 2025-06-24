import cn from 'classnames';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationObject {
  to: string;
  children: ReactNode;
}

const navigation: NavigationObject[] = [
  {
    to: '/',
    children: 'Home',
  },

  {
    to: '/tabs',
    children: 'Tabs',
  },
];

export const Navigation = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn('navbar-item', { 'is-active': isActive });

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {navigation.map(({ to, children }) => (
            <NavLink key={to} to={to} className={getLinkClass}>
              {children}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
