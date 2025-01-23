import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const dispatch = useDispatch();
    const Naviagte = useNavigate();

    const logoutHandler =  () => {
       authService.Logout().then(() => {
        dispatch(logout());
        Naviagte("/login")
    });
       
    };
  return (
    <button
            className="inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full"
            onClick={logoutHandler}
        >
            Logout
        </button>
  )
}

export default Logout
