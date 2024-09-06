import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";

const HomeCourses = () => {
  const marked = false;
  const [courses, setCourses] = useState([
    { name: "1111111111111111111111111111111111", description: "Course description" },
    { name: "CCCCCCCCCCCCCCCCCCC", description: "Course description" },
    { name: "Course 3", description: "Course description" },
    { name: "Course 4", description: "Course description" },
    { name: "Course 5", description: "Course descriptiondescriptiondescriptiondescription" },
    { name: "Course 6", description: "Course descriptionCourse descri" },
    { name: "Course 7", description: "Course description" },
    { name: "Course 8", description: "Course description" },
    { name: "Course 9", description: "Course description" },
    { name: "Course 10", description: "Course description" },
    { name: "Course 11", description: "Course description" },
    { name: "Course 12", description: "Course description" },
    { name: "Course 13", description: "Course description" },
    { name: "Course 14", description: "Course description" },
    { name: "Course 15", description: "Course description" },
    { name: "Course 16", description: "Course description" },
    { name: "Course 17", description: "Course description" },
    { name: "Course 18", description: "Course description" },
    { name: "Course 19", description: "Course description" },
    { name: "Course 20", description: "Course description" },
  ]);
  return (
    <>
      
      <div className="2xl:mx-36  xl:mx-9 xl:gap-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="mx-auto lg:w-[230px] bg-white w-[320px] h-fit p-0 rounded-xl shadow-md">
            <div className="h-28 bg-gray-200 mb-2  rounded-xl">
              <img src="src/assets/images/CardTest.png" alt="course" className="rounded-t-xl w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-bold max-w-[20ch] truncate">{course.name}</h3>
              <p className="max-w-[20ch] truncate ">{course.description}</p>
              <div className="flex justify-between items-center my-1">
                <div className="text-xs text-[#6d6c6c] max-w-[20ch] truncate">mohamed badawy</div>
                <div className="border-2 text-xl text-[#303032] border-[#6d6d6d] p-1 rounded-full w-fit">{marked ? <IoBookmarkSharp /> : <FaRegBookmark />}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeCourses;
