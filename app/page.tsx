'use client'
import { useEffect, useState} from "react";
import { addContact, deleteContact, setContactState, updateContact } from "@/app/store/slices/contactSlices";
import { useAppDispatch, useAppSelector } from "./store/store";
import { ContactProps } from "@/app/types/type";
import { Button, Col, Empty, Row, Spin } from "antd";
import ContactCard from "./components/ContactCard";
import Navigation from "./components/Navigation";
import { useModalHandler } from "./hooks/useModalHandler";
import EditModal from "./components/modals/EditModal";
import AddModal from "./components/modals/AddModal";
import DeleteModal from "./components/modals/DeleteModal";
import toast from "react-hot-toast";

export default function Home() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const contactState = useAppSelector(state => state.contact.contacts);

  const {
    selectedId,
    showAddModal,
    showEditModal,
    showDeleteModal,
    handleShowAddModal,
    handleCloseAddModal,
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
        setIsLoading(false)
      })
  }, [])

  const setContact = (data: Array<ContactProps>) => {
    dispatch(setContactState(data));
  }

  const handleAddContact = (newData: ContactProps) => {
    dispatch(addContact(newData));
    handleCloseAddModal();
    toast.success('New contact added.')
  }

  const handleUpdateContact = (updatedData: ContactProps) => {
    dispatch(updateContact(updatedData));
    handleCloseEditModal();
    toast.success('Contact updated.');
  }

  const handleDeleteContact = () => {
    dispatch(deleteContact(selectedId))
    handleCloseDeleteModal();
    toast.success('Contact deleted.');
  }

  const showLoading = isLoading && contactState.length === 0;
  const isEmptyData = !isLoading && contactState.length === 0;

  return (
    <main className="px-5 py-7 md:px-7 md:py-9 bg-slate-100 min-h-screen">
      <Navigation
        onAddContact={handleShowAddModal}
      />
      <Row gutter={[20, 20]}>
        {contactState.map(item => {
          return (
            <Col key={item.id} xs={24} sm={12} md={8}>
              <ContactCard
                contact={item}
                onEdit={handleShowEditModal}
                onDelete={handleShowDeleteModal}
              />
            </Col>
          )
        })}
      </Row>
      <AddModal
        isOpen={showAddModal}
        onSubmit={handleAddContact}
        onCloseModal={handleCloseAddModal}
      />
      <EditModal
        isOpen={showEditModal}
        selectedId={selectedId}
        onUpdate={handleUpdateContact}
        onCloseModal={handleCloseEditModal}
      />
      <DeleteModal
        isOpen={showDeleteModal}
        onDelete={handleDeleteContact}
        onClose={handleCloseDeleteModal}
      />
      {showLoading && <div className="w-full flex justify-center my-2"><Spin /></div>}
      {isEmptyData && 
        <div className="w-full flex justify-center my-2 flex-col items-center">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          <Button type="primary" onClick={handleShowAddModal}>Create New</Button>
        </div>}
    </main>
  );
}
