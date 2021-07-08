import { useState, useImperativeHandle, useRef, forwardRef, ForwardRefRenderFunction, useCallback } from 'react'
import { Outsider, ModalContent } from './styles'
import { ModalHandles } from './types';

const  Modal:ForwardRefRenderFunction<ModalHandles>  = (props, ref) =>  {
  const [modalVisibe, setMoadalVisible] = useState(true);

  const openModal = useCallback(() => {
    setMoadalVisible(true)
  },[])

  const closeModal = useCallback(() => {
    setMoadalVisible(true)
  },[])

  useImperativeHandle(ref, () => ({
    openModal, 
    closeModal
  }),[closeModal, openModal])

  if (!modalVisibe) return <div />
  return (
    <>
      <Outsider onClick={() => setMoadalVisible(false)} />
      <ModalContent />
    </>

  )
}

export default forwardRef(Modal)