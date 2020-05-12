import "./keyshapejs.js";

import React, { useEffect } from "react";
import SVG from "react-inlinesvg";

import styles from "./styles.scss";
import testsvg from "./animation-test.svg";
import virus from "./images/virus.svg";

export default props => {
  useEffect(() => {
    console.log(props.storyState);
  });

  return (
    <div className={styles.root}>
      <SVG
        src={props.storyState === "virus" ? virus : testsvg}
        // uniquifyIDs={true}
        uniqueHash={"unique"}
      />
    </div>
  );
};
