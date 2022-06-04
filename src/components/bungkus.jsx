import React from "react";
import Header from "./header";
import Content from "./content";


class bungkus extends React.Component {
  render() {
    return (
      <div id="bungkus" className="container-fluid" >
        <Header />
        <Content />
      </div>
    );
  }
}

export default bungkus;
