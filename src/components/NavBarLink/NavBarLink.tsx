import { FC } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
}

export const NavBarLink: FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames('navbar-item', {
      'is-active': isActive,
    })}
  >
    {text}
  </NavLink>
);