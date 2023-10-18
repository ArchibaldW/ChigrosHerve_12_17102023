import './style.scss';
import MeditateImg from './img/meditate.svg';
import SwimmingImg from './img/swimming.svg';
import CycleImg from './img/cycle.svg';
import DumbbellImg from './img/dumbbell.svg';

export default function SidebarIcon({ index }) {
  function getIcon() {
    switch (index) {
      case 0:
        return { src: MeditateImg, alt: 'meditate' };
      case 1:
        return { src: SwimmingImg, alt: 'swimming' };
      case 2:
        return { src: CycleImg, alt: 'cycle' };
      case 3:
        return { src: DumbbellImg, alt: 'dumbbell' };
      default:
        break;
    }
  }

  return (
    <div className="sidebar-icon">
      <img
        src={getIcon().src}
        alt={getIcon().alt}
      />
    </div>
  );
}
