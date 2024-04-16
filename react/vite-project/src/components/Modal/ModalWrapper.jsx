const ModalWrapper = ({children, onClick}) => {
    return (
        <div className="bg" onClick={onClick}>{children}</div>
    )
}

export default ModalWrapper;