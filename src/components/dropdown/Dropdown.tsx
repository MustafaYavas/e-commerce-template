'use client';
import { useState } from 'react';
import Icon from '../icons/Icon';
import Link from 'next/link';

interface DropdownProps {
  toggle: string;
  className: string;
  tab: number;
  items: string[];
  href?: string[];
}

const Dropdown = ({ toggle, className, tab, items, href }: DropdownProps) => {
  const [toggleDropdown, setToggleDropwdown] = useState(false);

  const getDropdownItems = (item: string, index: number) => {
    return (
      <li key={index} className="text-black">
        <Link href={href ? href[index] : '/'}>{item}</Link>
      </li>
    );
  };

  return (
    <div className="dropdown">
      <label
        tabIndex={tab}
        className="m-1"
        onClick={() => setToggleDropwdown(!toggleDropdown)}
      >
        <Icon name={toggle} className={className} color="black" />
      </label>
      {toggleDropdown && (
        <ul
          tabIndex={tab}
          className="dropdown-content menu bg-base-100 rounded-box w-52 shadow-lg shadow-slate-400 "
          style={{ marginTop: '-1rem' }}
        >
          {items.map((item, index) => getDropdownItems(item, index))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
