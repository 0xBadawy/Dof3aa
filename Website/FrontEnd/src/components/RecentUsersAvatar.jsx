import React from 'react'

const RecentUsersAvatar = () => {
  return (
    <div>
      <div className="flex -space-x-4 rtl:space-x-reverse my-[-16px]">
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="src/assets/images/Profile/image (1).png" alt="" />
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="src/assets/images/Profile/image (2).png" alt="" />
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="src/assets/images/Profile/image (3).JPG" alt="" />

        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="src/assets/images/Profile/image (4).JPG" alt="" />
        <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="src/assets/images/Profile/image (5).JPG" alt="" />
      </div>
    </div>
  );
}

export default RecentUsersAvatar
