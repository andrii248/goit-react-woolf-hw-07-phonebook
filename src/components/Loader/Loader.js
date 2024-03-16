import { Component } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import css from './Loader.module.css';
import React from 'react';

class Loader extends Component {
  render() {
    return (
      <div className={css.loader}>
        <CirclesWithBar
          height="100"
          width="100"
          color="#20CCE2"
          outerCircleColor="#20CCE2"
          innerCircleColor="#20CCE2"
          barColor="#20CCE2"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
