import React from 'react';
import "../../assets/styles/Login.css";
import {useDispatch} from 'react-redux';
import {showModal} from "../../app/features/modalSlice";
import Modal from "../common/Modal";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Login() {
    const dispatch = useDispatch();

    function login() {
        alert('Login successfully')
    }

    return (
        <>
            <IconButton className="h-full focus:outline-none" onClick={() => dispatch(showModal())}>
                <PersonIcon className="text-white"/>
            </IconButton>
            <Modal>
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent className="flex flex-col space-y-2 w-2/3 text-center my-0 mx-auto">
                    <DialogContentText>
                        Welcome back.
                    </DialogContentText>
                    <Button
                        variant="outlined"
                        startIcon={<FacebookIcon className="facebook"/>}
                    >
                        Facebook
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<TwitterIcon className="twitter"/>}
                    >
                        Twitter
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={login} variant="contained">
                        CREATE
                    </Button>
                    <Button onClick={() => dispatch(showModal())} variant="contained">
                        CLOSE
                    </Button>
                </DialogActions>
            </Modal>
        </>
    );
}
