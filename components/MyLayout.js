import React from  "react";
import "../styles/core/_layouts.scss";
import logo from "../images/lrimac.png";
import rchildren from "../images/Illustration01.png";

class MyLayout extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="wrapper">
                <div className="display">
                    <div>
                        <img className="logo" src={logo}/>
                    </div>
                </div>
                <div className="intermedio"></div>
                <div className="form">
                    <div></div>
                    <div>{this.props.children}</div>
                </div>
                <img  className="imageForm" src={rchildren}></img>
            </div>
        )
    }

}

export default MyLayout;
