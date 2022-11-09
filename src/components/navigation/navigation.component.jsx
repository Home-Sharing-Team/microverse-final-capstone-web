import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/header.component';
import { MainContent } from '../main-content/main-content.component';
import { Sidebar } from '../sidebar/sidebar.component';

export function Navigation() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const openSidebar = () => {
    setIsSidebarActive(true);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };

  return (
    <>
      <Header handleHamburgerBtnClick={openSidebar} />
      <Sidebar handleCloseBtnClick={closeSidebar} isActive={isSidebarActive} />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
}
