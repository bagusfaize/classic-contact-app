'use client'
import { useEffect } from "react";
import { deleteContact, setContactState } from "@/app/store/slices/contactSlices";
import { useAppDispatch, useAppSelector } from "./store/store";
import { ContactProps } from "@/app/types/type";
import { Col, Divider, Form, Input, Modal, Row, Typography } from "antd";
import ContactCard from "./components/ContactCard";
import Navigation from "./components/Navigation";
import { useModalHandler } from "./hooks/useModal";
import EditModal from "./components/modals/EditModal";

export default function Home() {
  const contactState = useAppSelector(state => state.contact.contacts);
  const dispatch = useAppDispatch();

  const {
    selectedId,
    showEditModal,
    showDeleteModal,
    handleShowEditModal,
    handleCloseEditModal,
    handleShowDeleteModal,
    handleCloseDeleteModal
  } = useModalHandler();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setContact(data)
      })
  }, [])

  const setContact = (data: Array<ContactProps>) => {
    dispatch(setContactState(data));
  }

  const handleDeleteContact = (id: number) => {
    dispatch(deleteContact(id))
    handleCloseDeleteModal()
  }

  const renderDeleteModal = () => {
    return (
      <Modal title="Delete Confirmation" open={showDeleteModal} onOk={() => handleDeleteContact(selectedId)} onCancel={handleCloseDeleteModal}>
        Are you sure want to delete?
      </Modal>
    )
  }

  return (
    <main className="py-10 px-7 bg-slate-100 min-h-screen">
      <Navigation />
      <Row gutter={[20, 20]}>
        {contactState.map(item => {
          return (
            <Col key={item.id} xs={24} sm={12} md={6}>
              <ContactCard
                contact={item}
                onEdit={handleShowEditModal}
                onDelete={handleShowDeleteModal}

              />
            </Col>
          )
        })}
      </Row>
      <EditModal 
        open={showEditModal}
        selectedId={selectedId}
        onCloseModal={handleCloseEditModal}
      />
      {renderDeleteModal()}
    </main>
  );
}
