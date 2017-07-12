





import React, { Component } from "react";
import helpers from "./../utilities/helpers"



// const LoginContainer = React.createClass({
//     getInitialState: function(){
//         return{}
//     }
// },
// render: function(){

const LoginContainer = (props) => {
    const { user } = props;
    const { handleClick } = props;
    console.log("user from Results.js");
    console.log(user);
    console.log("handleClick from Results.js");
    console.log(handleClick);

    return (
        <div className="body body-div" id="login-body">
            <h2 className="page-header"> Log-in </h2>
            
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="username" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-default"
                    onClick={() => handleClick(username, password).bind(this)}
                >
                    Submit
                </button>
            
        </div>
    );
}


// Exporting our Panel component
export default LoginContainer;
//module.exports = LoginContainer;
