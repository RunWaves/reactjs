import React from 'react';
import {logoutUser} from "../../app/features/userSlice";
import {Popover, Avatar, MenuItem} from "@material-ui/core";
import {useDispatch} from "react-redux";

const User = ({user}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Avatar className="cursor-pointer" onClick={handleClick}>A</Avatar>

            <Popover
                id="simple-menu"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem>My account</MenuItem>
                <MenuItem>Setting</MenuItem>
                <MenuItem onClick={() => dispatch(logoutUser())}>Logout</MenuItem>
            </Popover>
        </>
    );
}

export default User;