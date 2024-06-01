import { ContactProps } from "@/app/types/type";
import { Button, Col, Form, Input, Modal, Row, Typography } from "antd";

type ModalProps = {
    isOpen: boolean,
    onSubmit: (data: ContactProps) => void,
    onCloseModal: () => void
}

export default function AddModal({
    isOpen,
    onSubmit,
    onCloseModal
}: ModalProps) {
    const [contactForm] = Form.useForm();

    const handleCloseModal = () => {
        contactForm.resetFields();
        onCloseModal()
    }

    const handleSubmit = (data: any) => {
        const newData = {
            id: Math.floor(Math.random() * 10000),
            name: data.name,
            username: data.username,
            email: data.email,
            website: data.website,
            phone: data.phone,
            address: {
                city: data.city
            },
            company: {
                name: data.company,
                catchPhrase: data.catchPhrase,
                bs: data.bs
            }
        }
        onSubmit(newData)
    }

    return (
        <Modal
            width={900}
            open={isOpen}
            onCancel={handleCloseModal}
            footer={[
                <Button key="back" onClick={handleCloseModal}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={() => contactForm.submit()}>
                    Submit
                </Button>,
            ]}
        >
            <Form
                form={contactForm}
                layout="vertical"
                onFinish={handleSubmit}
            >
                <Typography.Title level={5}>Personal Data</Typography.Title>
                <Row gutter={20}>
                    <Col xs={8}>
                        <Form.Item label="Name" name="name" required rules={[{ required: true }]}>
                            <Input placeholder="input name" />
                        </Form.Item>
                    </Col>
                    <Col xs={8}>
                        <Form.Item label="Username" name="username" required rules={[{ required: true }]}>
                            <Input placeholder="input username" />
                        </Form.Item>
                    </Col>
                    <Col xs={8}>
                        <Form.Item label="Email" name="email" required rules={[{ required: true }]}>
                            <Input placeholder="input email" />
                        </Form.Item>
                    </Col>
                    <Col xs={8}>
                        <Form.Item label="Phone" name="phone" required rules={[{ required: true }]}>
                            <Input placeholder="input phone" />
                        </Form.Item>
                    </Col>
                    <Col xs={8}>
                        <Form.Item label="City" name="city" required rules={[{ required: true }]}>
                            <Input placeholder="input city" />
                        </Form.Item>
                    </Col>
                    <Col xs={8}>
                        <Form.Item label="Website" name="website">
                            <Input placeholder="input website" />
                        </Form.Item>
                    </Col>
                </Row>
                <Typography.Title level={5}>Company Data</Typography.Title>
                <Row gutter={20}>
                    <Col xs={8}>
                        <Form.Item label="Company Name" name="company" required rules={[{ required: true }]}>
                            <Input placeholder="input company name" />
                        </Form.Item>
                    </Col>
                    <Col xs={8}>
                        <Form.Item label="Company Catchphrase" name="catchPhrase">
                            <Input placeholder="input company catchphrase" />
                        </Form.Item>
                    </Col>
                    <Col xs={8}>
                        <Form.Item label="Company BS" name="bs">
                            <Input placeholder="input company bs" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}
