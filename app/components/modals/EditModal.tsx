import { selectContactById, updateContact } from "@/app/store/slices/contactSlices";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { Avatar, Button, Col, Form, Input, Modal, Row, Space, Typography } from "antd";
import { useEffect } from "react";

type ModalProps = {
    open: boolean,
    selectedId: number,
    onCloseModal: () => void
}

export default function EditModal({
    open,
    selectedId,
    onCloseModal
}: ModalProps) {
    const dispatch = useAppDispatch();
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
        dispatch(updateContact(updatedData));
        onCloseModal();
    }

    return (
        <Modal
            width={900}
            open={open}
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
                        <Form.Item label="Name" name="name">
                            <Input placeholder="input name" />
                        </Form.Item>
                    </Col>
                    <Col xs={8}>
                        <Form.Item label="Username" name="username">
                            <Input placeholder="input username" value={contactDetails?.username} />
                        </Form.Item>
                    </Col>
                    <Col xs={8}>
                        <Form.Item label="Email" name="email">
                            <Input placeholder="input email" value={contactDetails?.email} />
                        </Form.Item>
                    </Col>
                    <Col xs={8}>
                        <Form.Item label="Phone" name="phone">
                            <Input placeholder="input phone" />
                        </Form.Item>
                    </Col>
                    <Col xs={8}>
                        <Form.Item label="City" name="city">
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
                        <Form.Item label="Company Name" name="company">
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
