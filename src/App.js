import React, { Children } from "react";

class App extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div>
      {/* <h1>hi {this.props?.data?.title}</h1>
      <h3>{this.props?.title} is js library</h3>
      <h5>
        {this.props?.data?.title } is {this.props?.data?.status || "unknown"}
      </h5> */}
      {/* {children} */}
        
      <li className="fruit-item">
        <img className="fruit-pic" src={data.url}/>
        {data.name}
      </li>

       
      </div>
    )
  }
}

export default App;