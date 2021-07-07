import { useState } from 'react'
import { Outsider, ModalContent } from './styles'
export function Modal() {
  const [modalVisibe, setMoadalVisible] = useState(true);

  if (!modalVisibe) return <div />

  return (
    <>
      <Outsider onClick={() => console.log("dsds")} />
      <ModalContent />
    </>

  )
}