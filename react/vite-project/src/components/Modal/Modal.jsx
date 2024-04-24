import Button from '../Button'
import ModalWrapper from './ModalWrapper'
import ModalHeader from './ModalHeader'
import ModalDescription from './ModalDescription'
import ModalFooter from './ModalFooter'
import ModalClose from './ModalClose'
import ModalBody from './ModalBody'

const Modal = ({ onClick, text, onCancel, secondText }) => {

    return (
        <div className="container">
            <ModalBody>
                <ModalHeader>
                    <ModalClose
                        onClick={onCancel}
                    />
                    <ModalDescription 
                        children={secondText}
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
            <ModalWrapper onClick={onCancel}/>
        </div>
    )
}

export default Modal;