import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){
    const notify = (message, type) => toast(message, {"type": type});

    return (
        <div>
            <button onClick={() => notify("!האימייל נשלח בהצלחה", "success")}>Success!</button>
            <button onClick={() => notify("שגיאה בשליחת האימייל", "error")}>Error!</button>
            <button onClick={() => notify("This is an info", "info")}>Info!</button>
            <ToastContainer />
        </div>
    );
}