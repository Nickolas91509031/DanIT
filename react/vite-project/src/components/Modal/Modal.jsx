import Button from '../Button'
import ModalWrapper from './ModalWrapper'
import ModalHeader from './ModalHeader'
import ModalDescription from './ModalDescription'
import ModalFooter from './ModalFooter'
import ModalClose from './ModalClose'
import ModalBody from './ModalBody'

const Modal = ({ onClick, text }) => {

    return (
        <div className="container">
            <ModalBody>
                <ModalHeader>
                    <ModalClose
                        onClick={onClick}
                    />
                    <ModalDescription 
                        children='Do you really want to add this Product?'
                    />
                </ModalHeader>
                <ModalFooter>
                    <Button
                        className='purple-btn'
                        onClick={onClick}
                    >
                        {text}
                    </Button>
                </ModalFooter>
            </ModalBody>
            <ModalWrapper />
        </div>
    )
}

export default Modal;