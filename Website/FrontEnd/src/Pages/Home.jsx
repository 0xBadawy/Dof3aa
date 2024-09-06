import React from "react";
import HomeCourses from "../components/HomeCourses";
import { IoSearch } from "react-icons/io5";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div>
        <div className="bg-gradient-to-br h-[2000px] from-[#f9fafc] via-[#d1d9e6] to-[#f9fafc] ">
          <div className=" h-[150px]"></div>
          <div className="container mx-auto">
            <div className="">
              <div className="flex  gap-3 flex-reverse mx-[145px] justify-between">
                <div>
                  <h2 className="text-4xl font-extrabold dark:text-white">Discover courses</h2>
                </div>
                <div className="flex  gap-3 flex-reverse">
                  <button
                    type="button"
                    className="text-white h-8 w-[90px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                    <span className="text-xl">
                      <IoSearch />
                    </span>
                  </button>

                  <input
                    type="text"
                    id="first_name"
                    className="w-52 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Course name"
                    required
                  />
                </div>
              </div>
              <br />
              <HomeCourses />
              <div className="flex  gap-3 flex-reverse mx-[145px] justify-between mt-4 mx-auto">
                <nav aria-label="Page navigation example">
                  <ul className="flex items-center -space-x-px h-8 text-sm">
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <span className="sr-only">Previous</span>
                        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" d="M5 1 1 5l4 4" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        5
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
      
                        <span className="sr-only">Next</span>
                        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" d="m1 9 4-4-4-4" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
