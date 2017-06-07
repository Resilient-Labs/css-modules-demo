import styles from './Demo.css';

import React, { Component } from 'react';

export default class Demo extends Component {

  render() {
    return (
      <div className={ styles.root }>
        <p className={ styles.text }>Boston CSS</p>
      </div>
    );
  }

};
