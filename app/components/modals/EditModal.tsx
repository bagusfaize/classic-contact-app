import { selectContactById } from "@/app/store/slices/contactSlices";
import { useAppSelector } from "@/app/store/store";
import { ContactProps } from "@/app/types/type";
import { Button, Col, Form, Input, Modal, Row, Space, Typography } from "antd";
import { useEffect } from "react";

type ModalProps = {
    isOpen: boolean,
    selectedId: number,
    onUpdate: (updatedData: ContactProps) => void,
    onCloseModal: () => void
}

export default function EditModal({
    isOpen,
    selectedId,
    onUpdate,
    onCloseModal
}: ModalProps) {
    const [contactForm] = Form.useForm();
    const contactDetails = useAppSelector(state => selectContactById(state.contact, selectedId));

    useEffect(() => {
        if (contactDetails) {
            contactForm.setFieldValue('name', contactDetails.name)
            contactForm.setFieldValue('username', contactDetails.username)
            contactForm.setFieldValue('email', contactDetails.email)
            contactForm.setFieldValue('website', contactDetails.website)
            contactForm.setFieldValue('phone', contactDetails.phone)
            contactForm.setFieldValue('city', contactDetails.address.city)
            contactForm.setFieldValue('company', contactDetails.company.name)
            contactForm.setFieldValue('catchPhrase', contactDetails.company.catchPhrase)
            contactForm.setFieldValue('bs', contactDetails.company.bs)
        }
    }, [contactDetails])

    const handleSubmit = (data: any) => {
        const updatedData = {
            id: selectedId,
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
        onUpdate(updatedData)
    }

    return (
        <Modal
            width={900}
            open={isOpen}
            onCancel={onCloseModal}
            footer={[
                <Button key="back" onClick={onCloseModal}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={()=>contactForm.submit()}>
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
                            <Input placeholder="input username"/>
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
