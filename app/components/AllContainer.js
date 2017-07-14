


import React from "react";
import TournamentContainer from "./../tournament/TournamentContainer";
import TournamentAllPanel from "./../tournament/TournamentAllPanel";
import TeamContainer from "./../team/TeamContainer";
//import TeamAllPanel from "./../tournament/TeamAllPanel";
import SiteNav from "./../siteNav";
import helpers from "./../utilities/helpers";
import HomeContainer from "./../dynamics/homeContainer";
import GameContainer from "./../dynamics/gameContainer";
import LinksContainer from "./../dynamics/linksContainer";
// import LoginContainer from "./../dynamics/loginContainer";
// import RegisterContainer from "./../dynamics/registerContainer"; 
// // Our Container component's only purpose will be to hold and center the rest of our content
// // props.children will be substituted for any nested components deployed
// const TournamentContainer = props => (
//   <div style={styles.containerStyle} className="container">
//     <div className="row">
//       <div className="col-md-12 col-md-offset-3">
//         {props.children}
//       </div>
//     </div>
//   </div>
// );

var AllContainer = React.createClass({
    getInitialState: function(){
        return {
            display: {
                loggedIn: [
                    {
                        title: "Home",
                        value: "home"
                    },
                    {
                        title: "Game",
                        value: "game"
                    },
                    {
                        title: "Tournaments",
                        value: "tournaments"
                    },
                    {
                        title: "Profile",
                        value: "profile"
                    },
                    {
                        title: "Teams",
                        value: "teams"
                    },
                    {
                        title: "Links",
                        value: "links"
                    },
                    {
                        title: "Log-out",
                        value: "logout",
                        loggedIn: "loggedIn"
                    }
                    ],
                loggedOut: [
                    {
                        title: "Home",
                        value: "home"
                    },
                    {
                        title: "Game",
                        value: "game",
                        loggedIn: "both"
                    },
                    {
                        title: "Tournaments",
                        value: "tournaments",
                        loggedIn: "both"
                    },
                    {
                        title: "Links",
                        value: "links",
                    },
                    {
                        title: "Log-in",
                        value: "login",
                    },
                    {
                        title: "Register",
                        value: "register",
                    }
                ]
            },
            currentDisplay: "home", 
            currentUser: "",
            currentUserId: "", 
            inputName: '',
            inputPassword: '',
            registerName: '',
            registerUsername: '',
            registerEmail: '',
            registerPassword: '',
            registerPassword2: ''
        }
    },
    componentDidMount: function() {
        // console.log("checkUser at least activated.");
        // helpers.getUserTournaments().then(function(response){
        //     console.log("response.data from AllContainer");
        //     console.log(response.data);
        //     if (response.data.name !== this.state.currentUser) {
        //         console.log("Current User " +  response.data.name);
        //         this.setState({ currentUser: response.data.name });
        //     }
        // }.bind(this));
    },
    selectDisplay: function (title, value){
        this.setState({currentDisplay: value})
        console.log(title + " Title select clicked.");
        console.log(value + " Value select clicked.");
    },

    updateInputName: function(username) {
        this.setState({
        inputName: username.target.value
        });
    },

    updateInputPassword: function(password) {
        this.setState({
        inputPassword: password.target.value
        });
    },

    submitInputValue: function() {
        if(this.state.inputName != '' && this.state.inputPassword != ''){
            console.log("this.state.inputName from AllCon.SubmitInput")
            console.log(this.state.inputName)
                        console.log("this.state.inputPassword from AllCon.SubmitInput")
            console.log(this.state.inputPassword)
            helpers.userLogin(this.state.inputName, this.state.inputPassword, this.selectUser)
        } else {
            console.log("missing a value before submit in AllContainer");
            alert("Missing Username or Password")
        }
        this.setState({
            inputPassword: '',
            inputName: ''
        });      
    },

    updateRegisterName: function(name) {
        this.setState({
        registerName: name.target.value
        });
    },

    updateRegisterUsername: function(username) {
        this.setState({
        registerUsername: username.target.value
        });
    },

    updateRegisterEmail: function(email) {
        this.setState({
        registerEmail: email.target.value
        });
    },

    updateRegisterPassword: function(password) {
        this.setState({
        registerPassword: password.target.value
        });
    },

    updateRegisterPassword2: function(password2) {
        this.setState({
        registerPassword2: password2.target.value
        });
    },


    submitRegisterValue: function() {
        if(this.state.registerName != '' && this.state.registerEmail != '' && this.state.registerUsername != '' && this.state.registerPassword != ''){
            console.log("(Name, username, email, pass, pass2) from AllCon.SubmitRegister")
            console.log(this.state.registerName + " " +  this.state.registerUsername + " " +  this.state.registerEmail + " " +  this.state.registerPassword + " " + this.state.registerPassword2)
            helpers.userRegister(this.state.registerName, this.state.registerUsername, this.state.registerEmail, this.state.registerPassword, this.state.registerPassword2)
        } else {
            console.log("missing a value before submit in AllContainer");
            alert("Missing Username or Password")
        }
        this.setState({
            registerName: '',
            registerUsername: '',
            registerEmail: '',
            registerPassword: '',
            registerPassword2: '',
            currentDisplay: "login"
        });      
    },



    homeUser: function (user){
        //this.setState({currentUser: user})
        console.log(this.currentUser + " Current user from homeUser");
        console.log(user + " User from homeUser");
    },
    

    selectUser: function(username){
        console.log("selectUser Clicked!")
        console.log("Username:" + username);
        this.setState({currentUser: username});
        this.setState({currentDisplay: "profile"})
        // const newUser = {
        //     username: username, 
        //     password: password
        // },
    },

    resetUser: function(){
        helpers.userLogout();
        this.setState({currentUser: ''});
        this.setState({currentDisplay: "home"})

    },
    
    // save: function (){
    //     this.props.updateCommentText(this.refs.newText.value, this.props.index)
    //     this.setState({editing: false});
    // },
        // // After we've received the result... then post the search term to our article.
        // helpers.postArticle(newArticle).then(function() {
        //     console.log("Updated!");

        //     // After we've done the post... then get the updated article
        //     helpers.getArticle().then(function(response) {
        //         console.log("Current Article");
        //         console.log("Current Article", response.data);

        //         console.log("Article", response.data);

        //         this.setState({ article: response.data });

        //     }.bind(this));
        // }.bind(this));
    // },



    render: function() {
        if(this.state.currentUser != ""){
        switch (this.state.currentDisplay) {
            case "home": return (
                <div className="container home-container" id="home-container">
		            <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                    {/*<TournamentAllOptions />*/}
                    <HomeContainer checkUser={this.state.homeUser}/>
                </div>
            )
            case "game": return (
                <div className="container game-container" id="game-container">
		            <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                    <h2 className="page-header"> Game </h2>
                    {/*<TournamentAllOptions />*/}
                    <GameContainer />
                </div>
            )
            case "tournaments": return (
                <div className="container tournaments-container" id="tournaments-container">
		            <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                    <h2 className="page-header"> Tournaments </h2>
                    {/*<TournamentAllOptions />*/}
                    <TournamentContainer />
                </div>
            )
            case "profile": return (
                <div className="container profile-container" id="profile-container">
		            <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                    <h2 className="page-header"> Profile </h2>
                    {/*<TournamentAllOptions />*/}
                    <TournamentAllPanel />
                </div>
            )
            case "teams": return (
                <div className="container teams-container" id="teams-container">
		            <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                    <h2 className="page-header"> Teams </h2>
                    {/*<TournamentAllOptions />*/}
                    <TeamContainer />
                </div>
            )
            case "links": return (
                <div className="container links-container" id="links-container">
		            <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                    <h2 className="page-header"> Links </h2>
                    {/*<TournamentAllOptions />*/}
                    <LinksContainer />
                </div>
            )
            case "login": 
                return (
                    <div className="container login-container" id="login-container">
                        <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                        <div className="body body-div" id="login-body">

                            <h2 className="page-header"> Log-in </h2>    
                            <h3>Username: </h3>
                            <input type="text" value={this.state.inputName} onChange={this.updateInputName}/>
                            <h3>Password: </h3>
                            <input type="password"value={this.state.inputPassword} onChange={this.updateInputPassword}/>
                            <br />
                            <button type="submit" 
                                className="btn btn-default"
                                onClick={this.submitInputValue}
                                >Submit
                            </button>
                        </div>
                    </div>
                );
            case "register": return (
                <div className="container register-container" id="register-container">
		            <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                    <div className="body body-div" id="register-body">
                        <h2 className="page-header"> User Registration </h2>    
                        <h3>Name: </h3>
                        <input type="text" value={this.state.registerName} onChange={this.updateRegisterName}/>
                        <h3>Username: </h3>
                        <input type="text" value={this.state.registerUsername} onChange={this.updateRegisterUsername}/>
                        <h3>Email: </h3>
                        <input type="text" value={this.state.registerEmail} onChange={this.updateRegisterEmail}/>
                        <h3>Password: </h3>
                        <input type="text"value={this.state.registerPassword} onChange={this.updateRegisterPassword}/>
                        <h3>Confirm Password: </h3>
                        <input type="text"value={this.state.registerPassword2} onChange={this.updateRegisterPassword2}/>
                        <br />
                        <button type="submit" 
                            className="btn btn-default"
                            onClick={this.submitRegisterValue}
                            >Register
                        </button>
                    </div>
                </div>
            );
            case "logout": 
                return (
                    <div className="container logout-container" id="logout-container">
                        {/*<SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>*/}
                        <h2 className="page-header"> You have now been logged-out. </h2>
                        {/*<TournamentAllOptions />*/}
                        <button onClick={this.resetUser}>Ok</button>
                    </div>
                )
        } 
        } else {
            switch (this.state.currentDisplay) {
                case "home": return (
                    <div className="container home-container" id="home-container">
                        <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                        {/*<TournamentAllOptions />*/}
                        <HomeContainer />
                    </div>
                )
                case "game": return (
                    <div className="container game-container" id="game-container">
                        <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                        <h2 className="page-header"> Game </h2>
                        {/*<TournamentAllOptions />*/}
                        <GameContainer />
                    </div>
                )
                case "tournaments": return (
                    <div className="container tournaments-container" id="tournaments-container">
                        <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                        <h2 className="page-header"> Tournaments </h2>
                        {/*<TournamentAllOptions />*/}
                        <TournamentAllPanel />
                    </div>
                )
                case "profile": return (
                    <div className="container profile-container" id="profile-container">
                        <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                        <h2 className="page-header"> Profile </h2>
                        {/*<TournamentAllOptions />*/}
                        <TournamentAllPanel />
                    </div>
                )
                case "teams": return (
                    <div className="container teams-container" id="teams-container">
                        <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                        <h2 className="page-header"> Teams </h2>
                        {/*<TournamentAllOptions />*/}
                        <TeamContainer />
                    </div>
                )
                case "links": return (
                    <div className="container links-container" id="links-container">
                        <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                        <h2 className="page-header"> Links </h2>
                        {/*<TournamentAllOptions />*/}
                        <LinksContainer />
                    </div>
                )
                case "register": return (
                    <div className="container register-container" id="register-container">
                        <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                        <div className="body body-div" id="register-body">
                            <h2 className="page-header"> User Registration </h2>    
                            <h3>Name: </h3>
                            <input type="text" value={this.state.registerName} onChange={this.updateRegisterName}/>
                            <h3>Username: </h3>
                            <input type="text" value={this.state.registerUsername} onChange={this.updateRegisterUsername}/>
                            <h3>Email: </h3>
                            <input type="text" value={this.state.registerEmail} onChange={this.updateRegisterEmail}/>
                            <h3>Password: </h3>
                            <input type="text"value={this.state.registerPassword} onChange={this.updateRegisterPassword}/>
                            <h3>Confirm Password: </h3>
                            <input type="text"value={this.state.registerPassword2} onChange={this.updateRegisterPassword2}/>
                            <br />
                            <button type="submit" 
                                className="btn btn-default"
                                onClick={this.submitRegisterValue}
                                >Register
                            </button>
                        </div>
                    </div>
                );
                case "login": 
                    return (
                        <div className="container login-container" id="login-container">
                            <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                            <div className="body body-div" id="login-body">

                                <h2 className="page-header"> Log-in </h2>    
                                <h3>Username: </h3>
                                <input type="text" value={this.state.inputName} onChange={this.updateInputName}/>
                                <h3>Password: </h3>
                                <input type="password"value={this.state.inputPassword} onChange={this.updateInputPassword}/>
                                <br />
                                <button type="submit" 
                                    className="btn btn-default"
                                    onClick={this.submitInputValue}
                                    >Submit
                                </button>
                            </div>
                        </div>
                    );
                case "logout": 
                        return (
                            <div className="container logout-container" id="logout-container">
                                {/*<SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>*/}
                                <h2 className="page-header"> You have now been logged-out. </h2>
                                {/*<TournamentAllOptions />*/}
                                <button onClick={this.resetUser}>Ok</button>
                            </div>
                        )

            } 
        }
        
    }
})

// // An object we'll use to apply inline styles to this component
// const styles = {
//   containerStyle: {
//     marginTop: 50,
//     textAlign: "center"
//   }
// };

// Exporting this component as the default (only) export
export default AllContainer;
