import { useAppSetting } from "../Context/AppSettingContext";
import RecentUsersAvatar from "../components/RecentUsersAvatar";
import "../Style/Anmation.css";
const HeroSection = () => {
  const { language } = useAppSetting();
  const Text = {
    Title: {
      en: "DoF3aa",
      ar: "دفعة",
    },
    Description: {
      en: "Our platform provides students with the tools, and guidance they need to excel in their studies and achieve their academic goals, we are here to help every step of the way.",
      ar: "توفر منصتنا للطلاب الأدوات والموارد والإرشادات التي يحتاجونها للتفوق في دراستهم وتحقيق أهدافهم الأكاديمية. سواء كنت تستعد للامتحانات، تبحث عن دعم تعليمي، أو تسعى لتطوير مهاراتك، نحن هنا لمساعدتك في كل خطوة.",
    },
    buttonStart: {
      en: "Start Learning",
      ar: "ابدأ التعلم",
    },
    buttonLogin: {
      en: "Login",
      ar: "تسجيل الدخول",
    },
  };
  return (
    <>
      <div className="flex items-center flex-col justify-center h-[70vh] LandElement">
        <div className="border-t border-[#cdcdcd] my-4 w-[40%] LandElement"></div>

        <RecentUsersAvatar />
        <div className="border-t border-[#cdcdcd] my-4 w-[40%]"></div>

        <br />
        <br />
        <div className="border-t border-[#cdcdcd] my-4 w-[40%]"></div>

        <h1
          className="text-[140px] leading-none font-black LandElement
        bg-gradient-to-tr tracking-widest from-slate-500 to-slate-800 hover:bg-gradient-to-br bg-clip-text text-transparent
        "
        >
          {Text.Title[language]}
        </h1>
        <div className="border-t border-[#cdcdcd] my-4 w-[40%]"></div>
        <p className="text-[15px] text-center w-[40%]">{Text.Description[language]}</p>
        <div className="border-t border-[#cdcdcd] my-4 w-[40%]"></div>

        <div className="flex gap-2">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-[#000] via-[#2c2a2a] to-[#000] hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center my-[-16px] "
          >
            {Text.buttonLogin[language]}
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center my-[-16px] "
          >
            {Text.buttonStart[language]}
          </button>
        </div>

        <div className="border-t border-[#cdcdcd] my-4 w-[40%]"></div>
      </div>
    </>
  );
};

export default HeroSection;
