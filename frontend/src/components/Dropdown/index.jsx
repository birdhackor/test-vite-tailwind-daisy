import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

function Dropdown({ items, onChange, defaultValue }) {
  const [menuOpened, setMenuOpened] = useState(false);
  const menu = useRef(null);
  const menuButton = useRef(null);
  useEffect(() => {
    if (!menuOpened) {
      document.activeElement.blur();
    } else if (menuOpened && !menu.current.contains(document.activeElement)) {
      setMenuOpened(false);
    }
  }, [menuOpened]);

  const [activeItem, setActiveItem] = useState(defaultValue);

  return (
    <div ref={menu} className="dropdown dropdown-end">
      <div
        ref={menuButton}
        tabIndex="0"
        className="btn btn-square btn-ghost"
        onBlur={(e) => {
          setMenuOpened(false);
        }}
        onClick={(e) => {
          if (menuOpened) {
            setMenuOpened(false);
          } else {
            setMenuOpened(true);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      <ul
        tabIndex="0"
        className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        onBlur={(e) => {
          menuButton.current.focus();
        }}
        onFocus={(e) => {
          setMenuOpened(true);
        }}
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            setActiveItem(e.target.textContent);
            onChange(e.target.textContent);
          }
        }}
      >
        {items.map((value, index) => {
          return (
            <li key={value}>
              <a className={classNames({ active: activeItem === value })}>
                {value}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
