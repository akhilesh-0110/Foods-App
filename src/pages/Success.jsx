import React, { useEffect, useState } from 'react'
import { PacmanLoader } from "react-spinners";

const Success = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {loading ? (
              <PacmanLoader color="#36d7b7 "/>
            ) : (
                <div>
                  <h2 className="text-green-500 font-bold text-3xl text-center">Your order Successful!!</h2>
                  <p>Your order has been successfully placed</p>
                </div>  
            )}  
        </div>
    
    )
}

export default Success