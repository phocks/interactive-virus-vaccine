import React from 'react';
import styles from './styles.scss';

import testsvg from "./test.svg"



export default props => {
  return (
    <div className={styles.root}>
      <img src={testsvg} />
    </div>
  );
}
