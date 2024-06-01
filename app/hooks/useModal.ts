'use client'

import { useState } from "react"
import { ContactProps } from "../types/type";

export const useModalHandler = () => {
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number>(0);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    
    
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
        showEditModal,
        showDeleteModal,
        selectedId,
        handleShowEditModal,
        handleCloseEditModal,
        handleShowDeleteModal,
        handleCloseDeleteModal
    }
}