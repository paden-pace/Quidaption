


import React from "react";
import TournamentAllOptions from "./TournamentAllOptions";
import TournamentAllPanel from "./TournamentAllPanel";
import helpers from "./../utilities/helpers"


// class TournamentIndividuals extends Component {
//   constructor() {
//     super();
//     // This component has an "open" state that's either true or false
//     this.state = {
//       extended: false
//     };
//     // Binding these methods to our component otherwise their 'this'
//     // will change
//     this.toggleDropdown = this.toggleDropdown.bind(this);
//     this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
//   };
//   render() {} 

const TournamentIndividuals = React.createClass({
    getInitialState: function(){
        return {
            data: this.props.data,
            handleClick: this.props.handleClick,
            //extended: false
            }
    },

    
    newExtendInformation: function(selectedId){
        console.log("selectedId");
        console.log(selectedId);
        // document.getElementsByClassName("extended-div")
        document.getElementById("extended-div-"+selectedId).className += 'practice-div';
    },
    extendInformation: function(){
        console.log("extended clicked.");
        this.setState({extended: true})
    },
    handleClick: function(tournamentID) {
        helpers.attendTournament(tournamentID);
        //(this.setState({someName}));
    },
    reduceInformation: function(){
        console.log("extended clicked.");
        this.setState({extended: false})
    },
    render: function(){
    // var TournamentIndividuals = (props) => {
    //     const { data } = props;
    //     const { handleClick } = props;
        console.log("Data in TournamentIndividuals");
        console.log(this.props.data);
        if (this.props.data){
            console.log("Data in TournamentIndividuals");
            console.log(this.data);
            //if(this.state.extended){
            return (
                <div className="individuals-all-div">
                    {
                    this.props.data.map((item) => (
                        <div className="individuals-single-outter-div" key={item._id}>
                        <div className="individuals-single-div">
                            <h3 className="h-name">{item.name}</h3>
                            <h4 className="h-date">Date: {item.date}</h4>
                            <div id={item._id} className="extended-div practice-div hide">
                                <h4 className="h-league">League: {item.league}</h4>
                                <h4 className="h-location">Location: {item.location}</h4>
                                <h4 className="h-teams">Registered Teams: </h4>
                                <div className="registered-team-all-div">
                                    {/*{item.registeredTeams.map((team)=>(
                                        <div key={team.name} className="registered-team-solo-div">
                                            <h5>{team.name}</h5>
                                        </div>
                                    ))}*/}
                                    <div className="registered-team-solo-div">
                                            <h5>Sample Team</h5>
                                    </div>
                                    <div className="registered-team-solo-div">
                                            <h5>Example Team</h5>
                                    </div>
                                </div>
                                <h4 className="h-attendees">Attendees: </h4>
                                {<div className="attendees-all-div">
                                    <ul className="attendees-list">
                                    {/*{item.attendees.map((attendee)=>(
                                        <li key={attendee.name} className="attendees-solo-li">
                                            {attendee.name}
                                        </li>
                                    ))}*/}
                                        <li className="attendees-solo-li">
                                            Johnny Example
                                        </li>
                                        <li className="attendees-solo-li">
                                            Mary Sample
                                        </li>
                                    </ul>
                                </div>}
                                <h4 className="h-comments">Comments: </h4>
                                <div className="comments-all-div">
                                    {/*{item.comments.map((comment)=>(
                                        <div key={comment.body} className="comments-solo-div">
                                            <h5>User: {comment.user}</h5>
                                            <h5>Comment:</h5>
                                            <p>{comment.body}</p>
                                        </div>
                                    ))}*/}
                                        <div className="comments-solo-div">
                                            <h5>User: Gary</h5>
                                            <h5>Comment:</h5>
                                            <p>This is a sample Comment</p>
                                        </div>
                                        <div className="comments-solo-div">
                                            <h5>User: Tony</h5>
                                            <h5>Comment:</h5>
                                            <p>I just need more than one example to see how they separate.</p>
                                        </div>
                                </div>
                            <button data-id={item._id} className="close-tournament-button">Close</button>
                            </div>
                            <button data-id={item._id} className="extend-tournament-button">Expand</button>
                            <button data-id={item._id} onClick={() => this.handleClick(item._id)}  className="attend-tournament-button">Attend</button>
                        </div>
                        </div>
                    ))
                    }
                </div>
            );
            // } else {
            //     return (
            //     <div className="individuals-all-div">
            //         {
            //         this.props.data.map((item) => (
            //             <div className="individuals-single-outter-div" key={item._id}>
            //             <div className="individuals-single-div">
            //                 <h3 className="h-name ">{item.name}</h3>
            //                 <h4 className="h-date">Date: {item.date}</h4>
            //                 <button className="extend-button" onClick={this.handleClick}>More</button>
            //             </div>
            //             </div>
            //         ))
            //         }
            //     </div>
            // );
            //}
        } else {
            return (
            <div className="panel panel-default">
                <h4>Tournament Options will display here</h4>
            </div>
            );
        }
    }
});

// Exporting this component as the default (only) export
export default TournamentIndividuals;

 {/*<h4 className="h-attendees">Attendees: </h4>
{<div className="attendees-all-div">
    <ul className="attendees-list">
    {item.attendees.map((attendee)=>(
        <li key={attendee.name} className="attendees-solo-li">
            {attendee.name}
        </li>
    ))}
    </ul>
</div>}*/}
{/*<h4 className="h-comments">Comments: </h4>
<div className="comments-all-div">
    {item.comments.map((comment)=>(
        <div key={comment.body} className="comments-solo-div">
            <h5>User: {comment.user}</h5>
            <h5>Comment:</h5>
            <p>{comment.body}</p>
        </div>
    ))}
</div>*/}


