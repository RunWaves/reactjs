import React from "react";
import {showModal} from "../../app/features/modalSlice";
import {useDispatch, useSelector} from 'react-redux';
import Dialog from "@material-ui/core/Dialog";

const Modal = ({ children }) => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.modal.value);

    return (
        <>
            <Dialog open={count} onClose={() => dispatch(showModal())} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth={'xs'}>
                {children}
            </Dialog>
        </>
    )
}

export default Modal;