import React, { useState } from "react";

export default function LikeButton() {
  const [like, set_like] = useState(false); // <- using state!

  const toggle = () => {
    set_like(!like);
  };

  return (
    <div>
      <p>
        <button onClick={toggle}>
          {like ? "You like this" : "You don't like this"}
        </button>
      </p>
    </div>
  );
}
