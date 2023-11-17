import './style.scss';
import SidebarIcon from '../sidebarIcon';

export default function SidebarIcons() {
  return (
    <div className="sidebar-icons">
      {[...Array(4)].map((_, i) => {
        return <SidebarIcon key={i} index={i} />;
      })}
    </div>
  );
}
