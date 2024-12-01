import React from 'react';
import LinkItem from './LinkItem';

import homeIcon from '../assets/png/Home.png';
import searchIcon from '../assets/png/search.png';
import exploreIcon from '../assets/png/explore.png';
import reelsIcon from '../assets/png/video.png';
import messagesIcon from '../assets/png/chat (4).png';
import notificationsIcon from '../assets/png/heart.png';
import createIcon from '../assets/png/more.png';
import profileIcon from '../assets/png/user_15194213.png';
import threadsIcon from '../assets/png/Threads_(app)_logo.svg.png';
import menuIcon from '../assets/png/menu.png';

const links = [
  { icon: homeIcon, label: 'Home', isActive: true },
  { icon: searchIcon, label: 'Search', isActive: false },
  { icon: exploreIcon, label: 'Explore', isActive: false },
  { icon: reelsIcon, label: 'Reels', isActive: false },
  { icon: messagesIcon, label: 'Messages', isActive: false },
  { icon: notificationsIcon, label: 'Notifications', isActive: false },
  { icon: createIcon, label: 'Create', isActive: false },
  { icon: profileIcon, label: 'Profile', isActive: false },
  { icon: threadsIcon, label: 'Threads', isActive: false },
  { icon: menuIcon, label: 'More', isActive: false },
];

const Sidebar: React.FC = () => {
  return (
    <div className=" left-0 top-0 flex fixed flex-col h-screen text-white p-4">
      <div className="flex flex-col gap-4">
        {links.map((link, index) => (
          <LinkItem
            key={index}
            icon={link.icon}
            label={link.label}
            isActive={link.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
