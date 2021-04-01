import React, { useState } from 'react';
import {
  HiOutlineHome,
  HiOutlineUserCircle as UserIcon,
  HiOutlineCog,
  HiOutlineArchive,
  HiOutlineAnnotation,
  HiOutlineCalculator,
  HiOutlineChartBar,
} from 'react-icons/hi';
import {
  AppBar,
  Content,
  Divider,
  SideBar as SideBarComp,
  SideBarHeader,
  SideBarItem,
  SideBarBottom,
  SideBarItemLabel,
} from '../..';

export default {
  title: 'Examples/Side Bar',
};

export const SideBar = () => {
  return <App />;
};

const sideBarItems = [
  {
    key: 'home',
    icon: HiOutlineHome,
    label: 'Home',
  },
  {
    key: 'archived',
    icon: HiOutlineArchive,
    label: 'Archived',
  },
  {
    key: 'comments',
    icon: HiOutlineAnnotation,
    label: 'Comments',
  },
];

const sideBarToolsItems = [
  {
    key: 'calculator',
    icon: HiOutlineCalculator,
    label: 'Calculator',
  },
  {
    key: 'stats',
    icon: HiOutlineChartBar,
    label: 'Stats',
  },
];

const sideBarBottomItems = [
  {
    key: 'settings',
    icon: HiOutlineCog,
    label: 'Settings',
  },
];

const App = () => {
  const [sideBarActive, setSideBarActive] = useState(true);
  const [active, setActive] = useState('home');

  const onSideBarItemClick = (key: string) => {
    if (key === active) return;
    setSideBarActive(false);
    setActive(key);
  };

  return (
    <>
      <SideBarComp
        open={sideBarActive}
        onClose={() => setSideBarActive(false)}
        side={
          <>
            <SideBarHeader
              onToggle={() => setSideBarActive(active => !active)}
            />
            {sideBarItems.map(({ key, icon, label }) => (
              <SideBarItem
                Icon={icon}
                active={active === key}
                onClick={() => onSideBarItemClick(key)}
                key={key}
                label={label}
              />
            ))}
            <SideBarItemLabel>Tools</SideBarItemLabel>
            {sideBarToolsItems.map(({ key, icon, label }) => (
              <SideBarItem
                Icon={icon}
                active={active === key}
                onClick={() => onSideBarItemClick(key)}
                key={key}
                label={label}
              />
            ))}
            <SideBarBottom>
              {sideBarBottomItems.map(({ key, icon, label }) => (
                <SideBarItem
                  Icon={icon}
                  active={active === key}
                  onClick={() => onSideBarItemClick(key)}
                  key={key}
                  label={label}
                />
              ))}
            </SideBarBottom>
            <div className="h-2"></div>
          </>
        }
        body={
          <>
            <AppBar
              Icon={UserIcon}
              title="App Bar"
              useMenu
              onMenuIconClick={() => setSideBarActive(true)}
            />
            <Content>
              <div className="mt-3">
                <h1>
                  {[
                    ...sideBarItems,
                    ...sideBarToolsItems,
                    ...sideBarBottomItems,
                  ]
                    .filter(({ key }) => key === active)
                    .map(({ label, key }) => (
                      <span key={key}>{label}</span>
                    ))}
                </h1>
                <Divider />
                <p>Woo!</p>
              </div>
            </Content>
          </>
        }
      />
    </>
  );
};
