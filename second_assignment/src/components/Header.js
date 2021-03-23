import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";

function Header({ storyId }) {
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //     const delayDebounceFn = setTimeout(() => {
  //       if (!searchTerm) {
  //         setDataList(story);
  //       } else {
  //         const searchResult = dataList.filter((list) => {
  //           return list.title.toLowerCase().includes(searchTerm.toLowerCase());
  //         });
  //         setDataList([...searchResult]);
  //       }
  //     }, 50);

  //     return () => clearTimeout(delayDebounceFn);
  //   });

  return (
    <>
      <div className="header-section">
        <img src={logo} alt="logo" width="50" height="50" />

        <input
          type="text"
          placeholder="Search stories by title, url or author"
          id="search"
          name="Search"
        />
        <p className="by ">
          by <span className="algolia">⏰ algolia </span>
        </p>
      </div>
    </>
  );
}

export default Header;
