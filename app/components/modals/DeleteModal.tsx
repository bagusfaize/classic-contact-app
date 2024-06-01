import { Modal } from "antd";

type DeleteModalProps = {
    isOpen: boolean,
    onDelete: () => void,
    onClose: () => void
}

export default function DeleteModal({
    isOpen,
    onDelete,
    onClose,
}: DeleteModalProps) {
    return (
        <Modal title="Delete Confirmation" open={isOpen} onOk={onDelete} onCancel={onClose}>
            Are you sure want to delete?
        </Modal>
    )
}
