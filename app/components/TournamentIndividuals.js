


import React from "react";
import TournamentAllOptions from "./TournamentAllOptions";
import TournamentAllPanel from "./TournamentAllPanel";



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


var TournamentIndividuals = (props) => {
    const { data } = props;
    if (data){
    return (
      <div className="individuals-all-div">
        {
          data.map((item) => (
            <div className="individuals-single-div" key={item.name}>
                <h3 className="h-name">{item.name}</h3>
                <h4 className="h-date">Date: {item.date}</h4>
                <button className="extend-button">More</button>
                <div className="extended-div hide">
                    <h4 className="h-league">League: {item.league}</h4>
                    <h4 className="h-location">Location: {item.location}</h4>
                    <h4 className="h-teams">Registered Teams: </h4>
                    <div className="registered-team-all-div">
                        {item.registeredTeams.map((team)=>(
                            <div key={team.name} className="registered-team-solo-div">
                                <h5>{team.name}</h5>
                            </div>
                        ))}
                    </div>
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
                </div>
            </div>
          ))
        }
      </div>
    );
  } else {
    return (
      <div className="panel panel-default">
          <h4>Tournament Options will display here</h4>
      </div>
    );
  }
};

// // An object we'll use to apply inline styles to this component
// const styles = {
//   containerStyle: {
//     marginTop: 50,
//     textAlign: "center"
//   }
// };

// Exporting this component as the default (only) export
export default TournamentIndividuals;
