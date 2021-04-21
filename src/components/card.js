import React from "react";

function Card() {
  return (
    <div className="bg-white rounded-lg p-4 max-w-xs">
      <h1 className="text-left text-2xl leading-6 font-bold mb-2">
        Build a Corporate Website
      </h1>
      <p className="text-left text-sm text-gray-700 leading-5">
        Get a team of experienced professionals to build a coporate website for
        your company using modern technologies
      </p>
      <div className="flex flex-wrap mt-2 gap-1">
        <h2 className="flex justify-center items-center px-3 py-2 bg-gray-200 rounded-xl cursor-pointer text-xs font-bold">
          Web Developement
        </h2>
        <h2 className="flex justify-center items-center px-3 py-2 bg-gray-200 rounded-xl cursor-pointer text-xs font-bold">
          User Experience
        </h2>
        <h2 className="flex justify-center items-center px-3 py-2 bg-gray-200 rounded-xl cursor-pointer text-xs font-bold">
          CMS Development
        </h2>
      </div>
    </div>
  );
}

export default Card;
