import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notify = () => toast.success("Successfully updated ")
export const NotifyError = () => toast.error('Invalid username or password')
export const NotifyDelete = () => toast.success('Successfully deleted!')
export const NotifyAdded = () => toast.success('Successfully Added!')
export const Notifysign = () => toast.success("User created ")






