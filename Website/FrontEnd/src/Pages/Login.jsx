import React from "react";
import LoginForm from "../components/LoginForm";
import { useAppSetting } from "../Context/AppSettingContext";

const Login = () => {
  const { darkTheme } = useAppSetting();
  
  return (
    <>
      <div className={`${darkTheme && "dark"}`}>
        <div className="h-screen   p-10 dark:bg-black">
          <div className="grid grid-cols-12 gap-4 h-full ">
            <div className="col-span-8 ">
              <div className="flex items-center justify-center h-full">
                <LoginForm />
              </div>
            </div>
            <div
              className="col-span-4 bg-gradient-to-bl fbg-gradient-to-bl h-full
          from-slate-100 via-blue-100 to-slate-100 rounded-3xl shadow-xl"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
