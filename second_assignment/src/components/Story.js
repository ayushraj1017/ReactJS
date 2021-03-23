import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";
import { mapTime } from "./Mapper";

function Story({ storyId }) {
  const [story, setStory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //console.log(story);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!searchTerm) {
        setStory(story);
      } else {
        const searchResult = story.filter((list) => {
          return list.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setStory([...searchResult]);
      }
    }, 50);
    return () => clearTimeout(delayDebounceFn);
  });

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <>
      <p className="title">
        {story.title}{" "}
        <span>
          |<a href={story.url}>Link</a>|
        </span>
      </p>
      <p className="attribute">
        {" "}
        <b>Written By: </b> {story.by}
      </p>
      <p className="attribute">
        {" "}
        <b>Posted On: </b> {mapTime(story.time)}
      </p>
      <hr />
    </>
  ) : null;
}

export default Story;
