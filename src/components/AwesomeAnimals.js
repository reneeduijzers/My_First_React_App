import React from "react";

export default function Animals(props) {
  return (
    <div>
      {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
        (animal, index) => {
          return (
            <ul>
              <li>
                Awesomeness level {index + 1}: {animal}
              </li>
            </ul>
          );
        }
      )}
    </div>
  );
}
