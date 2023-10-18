import './style.scss';
import SidebarIcon from '../../components/sidebarIcon';

export default function SidebarIcons() {
  return (
    <div className="sidebar-icons">
      {[...Array(4)].map((_, i) => {
        return <SidebarIcon index={i} />;
      })}
    </div>
  );
}
