import { Button } from '@mui/material';
import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "./StateProvider";


const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className='login'>
        <div className='login_logo'>

            <img
            src="https://th.bing.com/th/id/R.a6e5f3216580bf8c363d124dbf68e577?rik=orABX27DGqnncA&pid=ImgRaw&r=0"
            alt=''
            />
             <img
            src="https://4.bp.blogspot.com/-MXAClp-AX5U/X13_rcQXlvI/AAAAAAAAA4k/2bp1gDhAh7QTbAGGps9kY2foP2O2tVrwwCK4BGAYYCw/s1024/f.jpeg"
            alt=''
            />
            
             </div>


             <Button type='submit' onClick={signIn}
             >
                Sign In
             </Button>

    </div>
  )
}

export default Login;