import React from "react";
import {showModal} from "../../app/features/modalSlice";
import {useDispatch, useSelector} from 'react-redux';
import CloseIcon from "@material-ui/icons/Close";
import {Dialog, DialogContentText, DialogTitle, DialogContent, DialogActions} from "@material-ui/core";

const Modal = ({title, description, content, action}) => {
    const dispatch = useDispatch();
    const isShow = useSelector((state) => state.modal.value);

    return (
        <>
            <Dialog open={isShow} onClose={() => dispatch(showModal())} aria-labelledby="form-dialog-title"
                    fullWidth={true} maxWidth={'xs'}>
                <DialogTitle id="form-dialog-title">
                    <span>{title}</span>
                    <CloseIcon style={{fontSize: 22}} className="cursor-pointer float-right"
                               onClick={() => dispatch(showModal())}/>
                </DialogTitle>
                <DialogContent className="flex flex-col space-y-2 w-2/3 text-center my-0 mx-auto">
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                    {content}
                </DialogContent>
                {action &&
                <DialogActions>
                    {action}
                </DialogActions>
                }
            </Dialog>
        </>
    )
}

export default Modal;