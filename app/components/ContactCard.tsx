import { BankOutlined, DeleteOutlined, DownOutlined, EditOutlined, EllipsisOutlined, EnvironmentOutlined, LinkOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Divider, Dropdown, Flex, MenuProps, Space } from "antd";
import { ContactProps } from "../types/type";
import React from "react";

type ContactCardProps = {
    contact: ContactProps,
    onEdit: (id: number) => void,
    onDelete: (id: number) => void,
}

type Event = {
    key: string
}

const items: MenuProps['items'] = [
    {
        label: <Space><EditOutlined /> Edit</Space>,
        key: 'edit',
    },
    {
        label: <Space><DeleteOutlined />Delete</Space>,
        key: 'delete',
    },
];

export default function ContactCard({
    contact,
    onEdit,
    onDelete
}: ContactCardProps) {

    const onClickMenu = (e: Event) => {
        const key = e.key;
        if (key === 'delete') {
            onDelete(contact.id)
        } else if (key === 'edit') {
            onEdit(contact.id)
        }
    }

    return (
        <Card bordered={false} className="rounded-2xl">
            <Flex justify="space-between">
                <Space size='middle'>
                    <Avatar
                        shape="square"
                        size="large"
                        src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${contact.username}`}
                        className="bg-yellow-500"
                    />
                    <div>
                        <p className="font-semibold">{contact.name}</p>
                        <Space direction="vertical" className="text-xs text-gray-600">
                            <p><Space><EnvironmentOutlined />{contact.address.city}</Space></p>
                        </Space>
                    </div>
                </Space>
                <div>
                    <Dropdown
                        menu={{
                            items,
                            onClick: onClickMenu
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <EllipsisOutlined rotate={90} />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </Flex>
            <Divider className="my-3"/>
            <Space>
                <a href={`tel:${contact.phone}`}>
                    <Avatar size={'small'}  icon={<PhoneOutlined />} className="bg-slate-400"/>
                </a>
                <a href={`mailto:${contact.email}`}>
                    <Avatar size={'small'}  icon={<MailOutlined />} className="bg-slate-400"/>
                </a>
                <a href={contact.website} target="_blank">
                    <Avatar size={'small'}  icon={<LinkOutlined />} className="bg-slate-400"/>
                </a>
            </Space>
        </Card>
    )
}
