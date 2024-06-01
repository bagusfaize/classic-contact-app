import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'Contact',
        key: 'contact',
    },
];

export default function Navigation() {
    const [current, setCurrent] = useState('contact');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
