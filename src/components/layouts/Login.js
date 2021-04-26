import React from 'react';
import "../../assets/styles/Login.css";
import {useDispatch, useSelector} from 'react-redux';
import {userLoading, userReceived} from "../../app/features/userSlice";
import {showModal} from "../../app/features/modalSlice";
import Modal from "../common/Modal";
import User from "./User";
import {Button, IconButton} from "@material-ui/core";
import {Person, Facebook, Twitter} from '@material-ui/icons';

export default function Login() {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.user.info);

    function loginFacebook() {
        dispatch(userLoading());
        setTimeout(function () {
            dispatch(userReceived({
                name: 'An Nguyen',
                age: 25,
                gender: 'Male',
            }));
            dispatch(showModal());
        }, 3000);
    }

    let Content = () => <>
        <Button
            onClick={loginFacebook}
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

    if (_.isEmpty(userInfo)) {
        return (
            <>
                <IconButton className="h-full" onClick={() => dispatch(showModal())}>
                    <Person className="text-white"/>
                </IconButton>
                <Modal title="Login" description="Welcome back!" content={<Content/>}/>
            </>
        )
    }
    return (
        <User user={userInfo} />
    );
}
