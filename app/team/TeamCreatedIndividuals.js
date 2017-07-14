


import React from "react";
import TeamAllOptions from "./TeamAllOptions";
import TeamCreatedPanel from "./TeamCreatedPanel";



const TeamCreatedIndividuals = React.createClass({
    getInitialState: function(props){
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
        document.getElementById("extended-div"+selectedId)
    },
    extendInformation: function(){
        console.log("extended clicked.");
        this.setState({extended: true})
    },
    reduceInformation: function(){
        console.log("extended clicked.");
        this.setState({extended: false})
    },
    render: function(){
    // var TeamCreatedIndividuals = (props) => {
    //     const { data } = props;
    //     const { handleClick } = props;
        console.log("data in TeamCreatedIndividuals");
        console.log(this.props.data.createdTeams);
        if (this.props.data.createdTeams){
            console.log("Data.createdTeams in TeamCreatedIndividuals");
            console.log(this.props.data.createdTeams);
            //if(this.state.extended){
            return (
                <div className="individuals-all-div">
                    {
                    this.props.data.createdTeams.map((item) => (
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
export default TeamCreatedIndividuals;




