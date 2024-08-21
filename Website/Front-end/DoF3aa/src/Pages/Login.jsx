import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
       <div className="grid grid-cols-12 gap-4 m-10 ">
        <div className="col-span-8 ">
          <div className="px-auto items-center py-[26%]">
            <LoginForm />
          </div>
        </div>
        <div className="col-span-4 bg-gradient-to-bl fbg-gradient-to-bl from-slate-100 via-blue-100 to-slate-100 h-[850px] rounded-3xl shadow-xl"></div>
      </div>
     </>
  );
};

export default Login;
