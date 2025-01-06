// components/Navbar.tsx
import Image from "next/image";
import React from "react";
import Profile from "@/app/assets/navbar/image.png";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-end px-6 py-[12px] bg-white border-b ">
      {/* Back Button */}
      {/* <button className="w-full flex items-center text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="ml-2">Back</span>
      </button> */}

      {/* Icons and Profile */}
      <div className="w-full justify-end flex items-center space-x-6">
        {/* Search Bar */}
        <div className="flex items-center max-w-[450px] mr-[30px] flex-grow  border border-gray-100 rounded-[12px] px-[15px] py-[15px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35"
            />
          </svg>
          <input
            type="text"
            placeholder="Search here..."
            className="flex-grow ml-2 bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none"
          />
        </div>
        {/* Notification Icon */}
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            width="19"
            height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5767 1.3125C10.5767 0.71803 10.0947 0.236115 9.50027 0.236115C8.9058 0.236115 8.42388 0.71803 8.42388 1.3125V1.92698C4.77264 2.44909 1.96555 5.58817 1.96555 9.38424L1.96555 13.6902C1.96555 13.6902 1.96556 13.6901 1.96555 13.6902C1.96544 13.6923 1.96471 13.7067 1.96004 13.735C1.95444 13.7689 1.94449 13.815 1.92807 13.8743C1.89478 13.9945 1.8418 14.1442 1.76778 14.3212C1.61939 14.676 1.41018 15.0845 1.1788 15.4967C0.743785 16.2716 0.524509 17.1951 0.68913 18.0732C0.862734 18.9993 1.45883 19.8069 2.4769 20.1945C3.38635 20.5408 4.59692 20.8575 6.19561 21.046C6.23365 21.0789 6.27863 21.1167 6.3303 21.158C6.49207 21.2874 6.72318 21.4552 7.01528 21.6221C7.59498 21.9533 8.4521 22.3021 9.50027 22.3021C10.5484 22.3021 11.4056 21.9533 11.9853 21.6221C12.2774 21.4552 12.5085 21.2874 12.6702 21.158C12.7219 21.1167 12.7669 21.0789 12.8049 21.046C14.4036 20.8575 15.6142 20.5408 16.5236 20.1945C17.5417 19.8069 18.1378 18.9993 18.3114 18.0732C18.476 17.1951 18.2568 16.2716 17.8217 15.4967C17.5904 15.0845 17.3811 14.676 17.2328 14.3212C17.1587 14.1442 17.1058 13.9945 17.0725 13.8743C17.056 13.815 17.0461 13.7689 17.0405 13.735C17.0358 13.7067 17.0351 13.6925 17.035 13.6905C17.035 13.6903 17.035 13.6905 17.035 13.6905L17.035 13.6814V9.38476C17.035 5.58878 14.228 2.44918 10.5767 1.92699V1.3125ZM4.11832 9.38424C4.11832 6.41213 6.52765 4.00348 9.50027 4.00348C12.4728 4.00348 14.8822 6.41253 14.8822 9.38476V13.691C14.8822 14.1893 15.0689 14.7267 15.2467 15.1518C15.4398 15.6135 15.6928 16.1021 15.9445 16.5505C16.1893 16.9865 16.2476 17.3985 16.1955 17.6766C16.1523 17.9067 16.0373 18.0762 15.7576 18.1827C14.6006 18.6232 12.6476 19.0729 9.50027 19.0729C6.35299 19.0729 4.39991 18.6232 3.24295 18.1827C2.96324 18.0762 2.8482 17.9067 2.80505 17.6766C2.75292 17.3985 2.81128 16.9865 3.05603 16.5505C3.30773 16.1021 3.56079 15.6135 3.75388 15.1518C3.93162 14.7267 4.11832 14.1893 4.11832 13.691V9.38424Z"
              fill="#667185"
            />
          </svg>
        </button>

        {/* Chat Icon */}
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.04164 14.2292C4.44717 14.2292 3.96525 13.7473 3.96525 13.1528C3.96525 12.5583 4.44717 12.0764 5.04164 12.0764C5.63611 12.0764 6.11803 12.5583 6.11803 13.1528C6.11803 13.7473 5.63611 14.2292 5.04164 14.2292Z"
              fill="#667185"
            />
            <path
              d="M8.27081 13.1528C8.27081 13.7473 8.75272 14.2292 9.3472 14.2292C9.94167 14.2292 10.4236 13.7473 10.4236 13.1528C10.4236 12.5583 9.94167 12.0764 9.3472 12.0764C8.75272 12.0764 8.27081 12.5583 8.27081 13.1528Z"
              fill="#667185"
            />
            <path
              d="M13.6528 14.2292C13.0583 14.2292 12.5764 13.7473 12.5764 13.1528C12.5764 12.5583 13.0583 12.0764 13.6528 12.0764C14.2472 12.0764 14.7291 12.5583 14.7291 13.1528C14.7291 13.7473 14.2472 14.2292 13.6528 14.2292Z"
              fill="#667185"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.6256 12.5586L17.9544 12.8925C17.957 12.979 17.9583 13.0657 17.9583 13.1528C17.9583 17.9086 14.103 21.7639 9.3472 21.7639C8.63578 21.7639 7.94311 21.6774 7.27974 21.5138L2.65245 20.9354C1.51438 20.7932 0.723462 19.7323 0.912016 18.601L1.19585 16.898L0.98614 15.2202C0.822586 14.5569 0.736084 13.8642 0.736084 13.1528C0.736084 8.397 4.59141 4.54167 9.3472 4.54167C9.46952 4.54167 9.59125 4.54422 9.71233 4.54927C10.5968 2.03739 12.9896 0.236115 15.8055 0.236115C19.3724 0.236115 22.2639 3.12761 22.2639 6.69445C22.2639 7.22128 22.2006 7.73474 22.0807 8.22706L21.9386 9.36324L22.134 10.5355C22.2974 11.5159 21.612 12.4354 20.6256 12.5586ZM15.8055 2.38889C18.1834 2.38889 20.1111 4.31656 20.1111 6.69445C20.1111 7.06477 20.0646 7.42268 19.9776 7.76331L19.9609 7.82886L19.7952 9.1546C19.7742 9.32238 19.7777 9.49232 19.8055 9.65911L19.9414 10.4746L17.6228 10.7645C16.8199 7.97752 14.6474 5.77091 11.8809 4.92047C12.557 3.42715 14.061 2.38889 15.8055 2.38889ZM9.3472 6.69445C5.78036 6.69445 2.88886 9.58594 2.88886 13.1528C2.88886 13.7074 2.95854 14.2443 3.08906 14.7557L3.10579 14.8212L3.33444 16.6504C3.35864 16.844 3.35464 17.0401 3.32257 17.2325L3.05854 18.8167L7.67875 19.3942L7.74431 19.4109C8.2557 19.5414 8.79254 19.6111 9.3472 19.6111C12.914 19.6111 15.8055 16.7196 15.8055 13.1528C15.8055 9.58594 12.914 6.69445 9.3472 6.69445Z"
              fill="#667185"
            />
          </svg>
        </button>

        {/* Profile Avatar */}
        <Image src={Profile} alt="Profile" className="w-[32px] h-8  " />
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
