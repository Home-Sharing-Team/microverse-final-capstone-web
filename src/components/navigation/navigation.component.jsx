import { Outlet } from 'react-router-dom';
import { Header } from '../header/header.component';
import { MainContent } from '../main-content/main-content.component';
import { Sidebar } from '../sidebar/sidebar.component';

export function Navigation() {
  return (
    <>
      <Header />
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
}
