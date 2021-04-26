import React from 'react';
import "../../assets/styles/Login.css";
import {useDispatch} from 'react-redux';
import {showModal} from "../../app/features/modalSlice";
import Modal from "../common/Modal";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import {Person, Facebook, Twitter} from '@material-ui/icons';

const Content = () => <>
    <Button
        variant="outlined"
        startIcon={<Facebook className="facebook"/>}
    >
        Facebook
    </Button>
    <Button
        variant="outlined"
        startIcon={<Twitter className="twitter"/>}
    >
        Twitter
    </Button>
</>;

export default function Login() {
    const dispatch = useDispatch();

    return (
        <>
            <IconButton className="h-full" onClick={() => dispatch(showModal())}>
                <Person className="text-white"/>
            </IconButton>
            <Modal title="Login" description="Welcome back!" content={<Content/>}/>
        </>
    );
}
