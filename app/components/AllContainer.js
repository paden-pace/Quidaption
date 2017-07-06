


import React from "react";
import TournamentAllPanel from "./../tournament/TournamentAllPanel";
import SiteNav from "./../siteNav";
import helpers from "./../utilities/helpers";
import HomeContainer from "./../dynamics/homeContainer";
import GameContainer from "./../dynamics/gameContainer";
import LinksContainer from "./../dynamics/linksContainer";
import LoginContainer from "./../dynamics/loginContainer";
import RegisterContainer from "./../dynamics/registerContainer"; 
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
            currentUser: ""
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
    render: function() {
        if(this.state.currentUser != ""){
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
                    <TournamentAllPanel />
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
            case "login": return (
                <div className="container login-container" id="login-container">
		            <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                    <h2 className="page-header"> Log-In </h2>
                    {/*<TournamentAllOptions />*/}
                    <LoginContainer />
                </div>
            )
            case "register": return (
                <div className="container register-container" id="register-container">
		            <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                    <h2 className="page-header"> Register </h2>
                    {/*<TournamentAllOptions />*/}
                    <RegisterContainer />
                </div>
            )
            case "logout": return (
                <div className="container logout-container" id="logout-container">
		            <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                    <h2 className="page-header"> Log-Out </h2>
                    {/*<TournamentAllOptions />*/}
                    <TournamentAllPanel />
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
                        <TournamentAllPanel />
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
                case "login": return (
                    <div className="container login-container" id="login-container">
                        <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                        <h2 className="page-header"> Log-In </h2>
                        {/*<TournamentAllOptions />*/}
                        <LoginContainer />
                    </div>
                )
                case "register": return (
                    <div className="container register-container" id="register-container">
                        <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                        <h2 className="page-header"> Register </h2>
                        {/*<TournamentAllOptions />*/}
                        <RegisterContainer />
                    </div>
                )
                case "logout": return (
                    <div className="container logout-container" id="logout-container">
                        <SiteNav data={this.state.display} user={this.state.currentUser} handleClick={this.selectDisplay}/>
                        <h2 className="page-header"> Log-Out </h2>
                        {/*<TournamentAllOptions />*/}
                        <TournamentAllPanel />
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
