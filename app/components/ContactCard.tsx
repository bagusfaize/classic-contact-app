import { LinkOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Divider, Space } from "antd";
import { ContactProps } from "../types/type";

type ContactCardProps = {
    contact: ContactProps
}

export default function ContactCard({contact}: ContactCardProps) {
    return (
        <Card bordered={false}>
            <div>
                <Avatar size="large" icon={<UserOutlined />} />
                <p>{contact.name}</p>
                <p>Australia</p>
            </div>
            <Divider />
            <Space>
                <Avatar size={'small'} icon={<LinkOutlined />} />
                <Avatar size={'small'} icon={<MailOutlined />} />
            </Space>
        </Card>
    )
}
