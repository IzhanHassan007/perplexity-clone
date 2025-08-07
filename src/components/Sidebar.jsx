import React, { useState } from 'react';
import './SideBar.css';
import logo from '../assets/logo.png'; // <-- PNG import

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const menuItems = [
        { icon: 'pi pi-home', label: 'Home', submenu: ['Ask AI', 'Recent', 'Saved'] },
        { icon: 'pi pi-compass', label: 'Discover', submenu: ['Trending', 'For You', 'Spaces'] },
        { icon: 'pi pi-book', label: 'Spaces', submenu: ['My Spaces', 'Create New'] },
        { icon: 'pi pi-user', label: 'Account', submenu: ['Profile', 'Settings', 'Logout'] },
        { icon: 'pi pi-arrow-up-right', label: 'Upgrade', submenu: ['Plans', 'Benefits'] },
        { icon: 'pi pi-download', label: 'Install', submenu: ['Desktop App', 'Mobile App'] }
    ];

    return (
        <div
            className={`sidebar ${expanded ? 'expanded' : ''}`}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
        >
            {/* Top Logo + Plus */}
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <img src={logo} alt="Logo" width={38} height={38} />
                </div>
                <div className="sidebar-plus">
                    <i className="pi pi-plus"></i>
                </div>
            </div>

            {/* Menu Items */}
            <div className="sidebar-top">
                {menuItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={`sidebar-item ${activeItem === idx ? 'active' : ''}`}
                        onMouseEnter={() => setActiveItem(idx)}
                        onMouseLeave={() => setActiveItem(null)}
                    >
                        <div className="item-row">
                            <i className={`${item.icon} sidebar-icon`} />
                            {expanded && <span className="sidebar-text">{item.label}</span>}
                        </div>
                    </div>
                ))}
            </div>

            {/* Animated Slide-out Panel */}
            {activeItem !== null && expanded && (
                <div className={`slide-panel slide-in`}>
                    {menuItems[activeItem].submenu.map((sub, subIdx) => (
                        <div key={subIdx} className="slide-panel-item">{sub}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sidebar;
