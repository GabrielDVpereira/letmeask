import modalRef from './modalRef';


export const openModal = () => {
    modalRef.ref?.openModal()
}

export const closeModal = () => {
    modalRef.ref?.closeModal()
}
