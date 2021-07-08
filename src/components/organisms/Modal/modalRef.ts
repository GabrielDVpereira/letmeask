import { ModalHandles } from './types'

class ModalRef {
    private modalRef: ModalHandles | null = null

    get ref() {
        return this.modalRef;
    }
    set ref(newRef) {
        this.modalRef = newRef;
    }
}
export default new ModalRef()
