import Sidebar from "../../grid/sidebar";
import Header from "../../grid/header";
import Content from "../../grid/content";
import './AppContent.scss';

export function AppContent() {
  return (
    <div className="app-content">
      <Sidebar />

      <div className='app-content__container'>
        <Header />
        <Content />
      </div>
    </div>
  );
}
