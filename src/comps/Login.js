import React, { useEffect } from "react";
import { signInWithGoogle } from "../firebase/config";
import { useAuth } from "../providers/UserProvider";
import { useHistory } from "react-router-dom";

export default function Login() {
  const user = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/gallery");
    } else {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div className='g_body'>
      <button className='g-button' onClick={signInWithGoogle}>
        <img
          className='g-logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png'
          alt='Google Logo'
        />
        <p className='g-text'>Sign in with Google</p>
      </button>
    </div>
  );
}
