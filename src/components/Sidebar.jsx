import React, { useState } from 'react';
import './SideBar.css';
import logo from '../assets/logo.png';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(null);

const menuItems = [
  {
    icon: 'pi pi-home',
    label: 'Home',
    submenu: [
      { label: 'Finance', icon: 'pi pi-wallet' },
      { label: 'Travel', icon: 'pi pi-send' },
      { label: 'Academics', icon: 'pi pi-book' }
    ]
  },
  {
    icon: 'pi pi-compass',
    label: 'Discover',
    submenu: [
      { label: 'For You', icon: 'pi pi-star' },
      { label: 'Top', icon: 'pi pi-chart-line' },
      { label: 'Tech & Science', icon: 'pi pi-cog' },
      { label: 'Finance', icon: 'pi pi-wallet' },
      { label: 'Art & Culture', icon: 'pi pi-palette' },
      { label: 'Sports', icon: 'pi pi-sun' },
      { label: 'Entertainment', icon: 'pi pi-video' }
    ]
  },
  {
    icon: 'pi pi-book',
    label: 'Spaces',
    submenu: [
      { label: 'Welcome', icon: 'pi pi-heart' },
      { label: 'Create a Space', icon: 'pi pi-plus-circle' }
    ]
  },
  {
    icon: 'pi pi-user',
    label: 'Home',
    submenu: [
      { label: 'Finance', icon: 'pi pi-wallet' },
      { label: 'Travel', icon: 'pi pi-send' },
      { label: 'Academics', icon: 'pi pi-book' }
    ]
  },
  {
    icon: 'pi pi-arrow-up-right',
    label: 'Home',
    submenu: [
      { label: 'Finance', icon: 'pi pi-wallet' },
      { label: 'Travel', icon: 'pi pi-send' },
      { label: 'Academics', icon: 'pi pi-book' }
    ]
  },
  {
    icon: 'pi pi-download',
    label: 'Home',
    submenu: [
      { label: 'Finance', icon: 'pi pi-wallet' },
      { label: 'Travel', icon: 'pi pi-send' },
      { label: 'Academics', icon: 'pi pi-book' }
    ]
  }
];

    return (
        <div
            className="sidebar-wrapper"
            onMouseLeave={() => setActiveItem(null)}
        >
            {/* Sidebar */}
            <div className="sidebar">
                {/* Header */}
                <div className="sidebar-header">
                    <div className="sidebar-logo">
  <img src={logo} alt="Logo" />
</div>

                    <div
                        className="sidebar-plus"
                        onMouseEnter={() => setActiveItem(0)} // Same submenu as Home
                    >
                        <i className="pi pi-plus"></i>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="sidebar-top">
                    {menuItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="sidebar-item"
                            onMouseEnter={() => setActiveItem(idx)}
                        >
                            <div className="item-row">
                        <i className={`${item.icon} sidebar-icon`} />
                        <span className="sidebar-label">{item.label}</span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Slide-Out Panel */}
            <div className={`slide-panel ${activeItem !== null ? 'active' : ''}`}>
    {activeItem !== null && (
        <>
            <div className="slide-panel-header">
                {menuItems[activeItem].label}
            </div>
            <div className="slide-panel-divider"></div>
            {menuItems[activeItem].submenu.map((sub, subIdx) => (
  <div key={subIdx} className="slide-panel-item">
    <i className={`${sub.icon}`} style={{ marginRight: '10px', fontSize: '1rem' }} />
    {sub.label}
  </div>
))}

        </>
    )}
</div>

        </div>
    );
};

export default Sidebar;
