import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {firstName, lastName, updateEmail} from '../../ducks/reducer'

class WizardTen extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(e)=>firstName(e.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {(e)=>lastName(e.target.value)}/>
                    <input type="text" placeholder="email" onChange={(e)=>updateEmail(e.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {firstName,lastName,updateEmail} = state
    return{
        firstName,
        lastName,
        updateEmail
    }
}
export default connect(mapStateToProps, {firstName, lastName, updateEmail}) (WizardTen);