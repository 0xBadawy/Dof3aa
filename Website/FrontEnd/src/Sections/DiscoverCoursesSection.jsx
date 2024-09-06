import React, { useState } from "react";

const DiscoverCoursesSection = () => {
  const [courses, setCourses] = useState([
    "Python",
    "Web Development",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Mongoose",
    "Django",
    "Flask",
    "Java",
    "C++",
    "C#",
    "PHP",
    "Laravel",
    "Vue JS",
    "Angular JS",
    "Svelte JS",
    "Next JS",
    "Nuxt JS",
    "Electron JS",
    "React Native",
    "Flutter",
    "Dart",
    "Swift",
    "Kotlin",
    "Android Development",
    "IOS Development",
    "Xamarin",
    "Unity",
    "Unreal Engine",
    "Game Development",
  ]);
  return (
    <>
      <div className="flex items-center flex-col justify-center LandElement">
        <div className="w-[50%] text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8"> Discover Courses</h1>
          {courses.map((course) => (
            <button
              key={course}
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 "
            >
              {course}
            </button>
          ))}
        </div>
      </div>


      
    </>
  );
};

export default DiscoverCoursesSection;
