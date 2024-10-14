import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Proetected({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status); // state is for callback, auth is the name of the Slice (check authSlice.js)

  const navigate = useNavigate(); // this is for navigate page.
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authentication !== authStatus) {
      navigate("/login");
      /*
        authentication -> true and authStatus -> false
        means, you are supposed to be logedIn, but you are not. so, you need to login first. 
      */
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
      /*
        authentication -> false and authStatus -> true
        means, you are not authenticated to see login and signup pages and your authStatus is true, that means, you are loged in. 
        so, redirect to root("\") page. 
      */
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader ? null : <>{children}</>;
}
