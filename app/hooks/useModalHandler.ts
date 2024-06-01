'use client'

import { useState } from "react"
import { ContactProps } from "../types/type";

export const useModalHandler = () => {
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number>(0);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    
    const handleShowAddModal = () => {
        setShowAddModal(true);
    }

    const handleCloseAddModal = () => {
        setShowAddModal(false);
    }

    const handleShowEditModal = (id: number) => {
        setSelectedId(id);
        setShowEditModal(true);
    }
    const handleCloseEditModal = () => {
        setSelectedId(0);
        setShowEditModal(false);
    }

    const handleShowDeleteModal = (id: number) => {
        setSelectedId(id)
        setShowDeleteModal(true)
    }
    const handleCloseDeleteModal = () => {
        setSelectedId(0)
        setShowDeleteModal(false);
    }

    return {
        showAddModal,
        showEditModal,
        showDeleteModal,
        selectedId,
        handleShowAddModal,
        handleCloseAddModal,
        handleShowEditModal,
        handleCloseEditModal,
        handleShowDeleteModal,
        handleCloseDeleteModal
    }
}