





import React, { Component } from "react";
import helpers from "./../utilities/helpers"



const RegisterContainer = React.createClass({
    getInitialState: function(){
            // helpers.getTournaments().then(function(response){
            //     console.log("response");
            //     console.log(response);
            //     if (response !== this.state.tournaments) {
            //         console.log("Tournaments", response.data);
            //         this.setState({ tournaments: response.data });
            //     }
            // });
        return {}
    },
            
    render: function(){
        return (
            <div className="body body-div" id="register-body">
                <h2 className="page-header"> Register </h2>
                <form method="post" action="/users/register">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" name="username" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Email" name="email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" name="password" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Password" name="password2" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
});

// Exporting our Panel component
export default RegisterContainer;
