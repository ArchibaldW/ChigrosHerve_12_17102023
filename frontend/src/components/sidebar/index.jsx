import './style.scss'
import SidebarIcons from '../../components/sidebarIcons';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarIcons />
      <div className='sidebar__credits'>Copytight, SportSee 2020</div>
    </div>
  )
}