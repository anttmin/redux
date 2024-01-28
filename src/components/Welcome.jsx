import React from "react";
import {  useDispatch } from "react-redux";
import { authActions } from "../store/authReducer";

const Welcome = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };
  return (
    <div className="Welcome">
      <button className="welcomebtn" onClick={loginHandler}>
        Login to Redux Counter
      </button>
    </div>
  );
};

export default Welcome;
