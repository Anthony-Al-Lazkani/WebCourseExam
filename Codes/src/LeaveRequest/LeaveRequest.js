import React, { useState, useEffect } from 'react';
import './LeaveRequest.css';

export default function LeaveRequest() { 
    const [message, setMessage] = useState('');
        const [requestStatus, setRequestStatus] = useState(null);

        useEffect(() => {
            // Check for stored status on component mount
            const storedStatus = localStorage.getItem('requestStatus');
            if (storedStatus) {
            setRequestStatus(storedStatus);
            }
        }, []);

        const handleSubmit = (event) => {
            event.preventDefault();
            setMessage('Thank You, Cause Submitted, Waiting for response!');
            // Assuming the request is pending after submission
            localStorage.setItem('requestStatus', 'pending');
        };

        const handleAccept = () => {
            setMessage('Accepted! Changes will be applied on the next refresh.');
            // Set status to 'accepted' in local storage
            localStorage.setItem('requestStatus', 'accepted');
        };

        const handleDecline = () => {
            setMessage('Declined! Changes will be applied on the next refresh.');
            // Set status to 'declined' in local storage
            localStorage.setItem('requestStatus', 'declined');
        };

        useEffect(() => {
            // Apply changes on component mount
            if (requestStatus === 'accepted') {
            // Apply styling for accepted status
            document.body.classList.add('accepted');
            } else if (requestStatus === 'declined') {
            // Apply styling for declined status
            document.body.classList.add('declined');
            }
        }, [requestStatus]);
    return(
        <>
        <div className={`Row ${requestStatus === 'accepted' ? 'Accepted' : ''} ${requestStatus === 'declined' ? 'Declined' : ''}`}>
        <div className='Big-Left-Div'>
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
                        <button onClick={handleAccept}>ACCEPT</button>
                    </div>
                    < div className='Accept-Button'>
                        <button onClick={handleDecline}>DECLINE</button>
                    </div>
                </div>
        </div>
        </div>
        
        </>
    ) 
}