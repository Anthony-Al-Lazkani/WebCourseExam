import React, { useState } from 'react';
import './LeaveRequest.css';

export default function LeaveRequest() { 
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Thank You, Cause Submitted, Waiting for response!');
  };







  const [notificationPermission, setNotificationPermission] = useState(
    Notification.permission
  );

  const handleAcceptClick = async () => {
    if (notificationPermission === 'granted') {
      // Create and show the notification
      const notification = new Notification('Notification Title', {
        body: 'Notification Body',
      });

      // Wait for user interaction
      await notification.onclick;

      // Update button color based on user interaction
      setNotificationPermission('green');
    } else if (notificationPermission === 'denied') {
      // Handle the case where notifications are denied
      // Update button color based on user interaction
      setNotificationPermission('red');
    } else {
      // Ask for notification permission
      Notification.requestPermission().then((permission) => {
        // Update button color based on user interaction
        setNotificationPermission(permission);
      });
    }
  };

  const handleDeclineClick = () => {
    // Handle the decline action, e.g., redirect or display a message
    // Update button color based on user interaction
    setNotificationPermission('red');
  };
    return(
        <>
        <div className='Row'>
        <div className='Big-Left-Div' style={{ backgroundColor: notificationPermission === 'green' ? 'green' : notificationPermission==='red' ? 'red' : 'darkgray' }}>
            <div className='Personal-Information'>
                <div className='First-Name'>
                    <h2>First Name</h2>
                    <input type='text' />
                </div>
                <div className='First-Name'>
                    <h2>Last Name</h2>
                    <input type='text' />
                </div>


                <div className='Identification'>
                    <h2>ID</h2>
                    <input type='number' min={0} />
                </div>


                <div className='Dropdown'>
                        <form onSubmit={handleSubmit}> 
                        <div> 
                            <label className="text-sm">Select Issue*</label> 
                            <br></br> 
                            <select className="bg-gray-50 border border-gray-300  
                                                text-gray-600 text-sm rounded-lg  
                                                focus:border-blue-500 w-full p-2.5"> 
                
                                <option value="Feedback" > 
                                    Select the cause 
                                </option> 
                                <option value="Feedback"> 
                                    Sick 
                                </option> 
                                <option value="Feedback"> 
                                    Emergency 
                                </option>
                                <option value="Feedback"> 
                                    Family Emergency 
                                </option>
                                <option value="Feedback"> 
                                    Other 
                                </option> 
        
                            </select> 
                            <br></br>   
                            <label className="text-sm">  
                            </label> 
                            <br></br> 
                            <textarea className="bg-gray-50 border border-gray-300  
                                                    text-sm rounded-lg  
                                                    focus:border-blue-500  
                                                    w-full p-2.5" 
                                        rows="4" 
                                        cols="25" 
                                        maxlength="300" 
                                        placeholder="Max Allowed Characters: 300"> 
                            </textarea> 
                            <br></br> 
                            <button className="bg-blue-500 hover:bg-blue-700  
                                                text-white font-bold  
                                                py-2 px-4 rounded" 
                                    type="submit"> 
                                Submit 
                            </button> 
                        </div> 
                    </form>
                    {message && <p className='Feedback-Message'>{message}</p>}
                </div>
            </div>
        </div>



        <div className='Big-Right-Div'>
                <div className='Header-Text'>
                    <h1>ADMIN PAGE</h1>
                </div>

                <div className='Buttons'>
                    < div className='Accept-Button'>
                        <button onClick={handleAcceptClick}>ACCEPT</button>
                    </div>
                    < div className='Accept-Button'>
                        <button onClick={handleDeclineClick}>DECLINE</button>
                    </div>
                </div>
        </div>
        </div>
        
        </>
    ) 
}