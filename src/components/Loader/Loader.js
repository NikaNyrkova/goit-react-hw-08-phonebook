import React from "react";
import Loader from "react-loader-spinner";
export default class App extends React.Component {
  render() {
    return (
      <Loader type="TailSpin" color="#00BFFF" height={180} width={180} />
    );
  }
}