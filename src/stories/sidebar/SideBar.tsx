// SideBar.tsx
import React from "react";
import "./sidebar.css";

export interface SidebarItem {
  label: string;
  link?: string;
  children?: SidebarItem[];
}

interface SideBarProps {
  items: SidebarItem[];
}

export const SideBar: React.FC<SideBarProps> = ({ items }) => {
  const renderItems = (items: SidebarItem[], depth = 0) => {
    return (
      <ul className={`sidebar-list depth-${depth}`}>
        {items.map((item, index) => (
          <li key={index} className="sidebar-item">
            {item.link ? (
              <a href={item.link} className="sidebar-link">
                {item.label}
              </a>
            ) : (
              <span className="sidebar-label">{item.label}</span>
            )}
            {item.children && renderItems(item.children, depth + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return <nav className="sidebar">{renderItems(items)}</nav>;
};
