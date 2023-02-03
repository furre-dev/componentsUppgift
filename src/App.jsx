import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './Button'
import Alert from './Alert'
import { CiCircleAlert } from "react-icons/ci"
import { RiNotification2Line } from "react-icons/ri"
import Badge from './Badge'
import Card from './Card'
import Modal from './Modal'

function onDismiss(text) {
  alert(text)
};

function onClose(setModal) {
  setModal(false);
}

function App() {
  const [modal, setModal] = useState(false)


  return (
    <div className="App space-y-10">
      <div className='space-x-1'>
        <h1 className='text-2xl'>Buttons</h1>
        <Button disabled={false} color="cyan" size="large" />
        <Button disabled={true} color="red" size="small" />
      </div>
      <div className='space-x-1'>
        <h1 className='text-2xl'>Alert</h1>
        <Alert onDismiss={onDismiss} size="large" color="red" icon={<CiCircleAlert size={"60px"} color={"white"} />} />
      </div>
      <div className='space-x-1'>
        <h1 className='text-2xl'>Badge</h1>
        <div className='flex items-center space-x-3'>
          <div><Badge color="cyan" size="small" icon={<RiNotification2Line />} /></div>
          <div><Badge color="blue" size="medium" icon={<RiNotification2Line />} /></div>
          <Badge color="red" size="large" icon={<RiNotification2Line />} />
        </div>
        <div className=''>
          <h1 className='text-2xl'>Card</h1>
          <div>
            <Card title="Card!" imgSrc="https://source.unsplash.com/random" imgAlt="random photo from unsplash" href="https://source.unsplash.com/random" />
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-2xl'>Modal</h1>
        <button className='border border-gray-500 px-2 text-2xl' onClick={() => { setModal(true) }}>Open modal</button>
        <Modal size="small" show={modal} onClose={() => onClose(setModal)}>
          <Modal.Header> This is a modal popup! </Modal.Header>
          <Modal.Body>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, officia explicabo ducimus aspernatur quae modi porro consectetur in? Non nam dicta, magnam ea dolorum dignissimos a minima labore repudiandae nihil.
          </Modal.Body>
          <Modal.Footer onClose={() => { onClose(setModal) }}>Accept!</Modal.Footer>
        </Modal>
      </div>
    </div >
  )
}

export default App
