import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notify = () => toast.success("success !!")
export const NotifyError = () => toast.error('Invalid username or password')






