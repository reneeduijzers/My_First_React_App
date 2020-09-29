import React from "react";

export default function ArticleCard(props) {
  return (
    <div className="Article">
      <h5>{props.title}</h5>
      <p>{props.body}</p>
    </div>
  );
}
