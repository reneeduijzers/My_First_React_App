import React, { useState } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes);

  const increment = () => {
    set_numLikes(numLikes + 1);
  };

  const reset = () => {
    set_numLikes(0);
  };

  // console.log("A render!");

  // useEffect(() => {
  //   console.log("The useEffect action!");
  // }, []);

  return (
    <div>
      <p>
        This App has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
}
