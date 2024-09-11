import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import './index.css'; // Optional: Add styles

interface LayoutProps {
  title: string;
  sidebarItems: { label: string; onClick: () => void }[];
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, sidebarItems, children }) => {
  return (
    <div className="layout">
      <Header title={title} />
      <div className="content">
        <Sidebar items={sidebarItems} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
