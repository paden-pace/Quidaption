


import React from "react";
import TeamAllOptions from "./TeamAllOptions";
import TeamAllPanel from "./TeamAllPanel";



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

const TeamIndividuals = React.createClass({
    getInitialState: function(){
        return {
            data: this.props.data,
            handleClick: this.props.handleClick,
            //extended: false
            }
    },

    render: function(){
    // var TeamIndividuals = (props) => {
    //     const { data } = props;
    //     const { handleClick } = props;
        console.log("Data in TeamIndividuals");
        console.log(this.props.data.teams);
        if (this.props.data.teams){
            console.log("Data in TeamIndividuals");
            console.log(this.props.data.teams);
            //if(this.state.extended){
            return (
                <div className="individuals-all-div">
                    {
                    this.props.data.teams.map((item) => (
                        <div className="individuals-single-outter-div" key={item._id}>
                            <div className="individuals-single-div">
                                <h3 className="h-name">{item.name}</h3>
                                <div id={item._id} className="extended-div practice-div hide">
                                    <h4 className="h-members">Registered Members: </h4>
                                    {<div className="members-all-div">
                                        <ul className="members-list">
                                        {/*{item.members.map((member)=>(
                                            <li key={member.name} className="members-solo-li">
                                                {member.name}
                                            </li>
                                        ))}*/}
                                            <li className="members-solo-li">
                                                Johnny Example
                                            </li>
                                            <li className="members-solo-li">
                                                Mary Sample
                                            </li>
                                        </ul>
                                    </div>}
                                    
                                    <button data-id={item._id} className="close-members-button">Hide Members</button>
                                </div>
                                <button data-id={item._id} className="extend-members-button">Show Members</button>

                                <h4 className="h-chat">Team Chat: </h4>
                                <div className="chat-all-div">
                                    {/*{item.chats.map((chat)=>(
                                        <div key={chat._id} className="chat-solo-div">
                                            <p className="chat-body">{comment.body}</p>
                                            <h5 className="chat-user">{comment.user}</h5>
                                            <h5 className="chat-date">Comment:</h5>
                                        </div>
                                    ))}*/}
                                        <div className="chat-solo-div">
                                            <p className="chat-body">This is a sample Comment</p>
                                            <h5 className="chat-user">Gary</h5>
                                            <h5 className="chat-date">July 9, 2017</h5>
                                        </div>
                                        <div className="chat-solo-div">
                                            <p className="chat-body">I just need more than one example to see how they separate.</p>
                                            <h5 className="chat-user">Tony</h5>
                                            <h5 className="chat-date">July 10, 2017</h5>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            );
        } else {
            return (
            <div className="panel panel-default">
                <h4>Your Teams will display here</h4>
            </div>
            );
        }
    }
});

// Exporting this component as the default (only) export
export default TeamIndividuals;



