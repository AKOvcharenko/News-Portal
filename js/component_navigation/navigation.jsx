import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {return {feedState: state.feedState}};

class Navigation extends Component{
    getUniqueLeagues(){
        var feed = this.props.feedState;
        var set = new Set();
        feed.forEach(el => set.add(el.league));
        return set;
    }

    render(){
        var leagues = this.getUniqueLeagues();
        debugger;
        return <div className="league-navigation list-group col-sm-3 col-md-2">

                    {leagues.map(this.eachItem)}
                    <a href="#" className="list-group-item">first league</a>
                    <a href="#" className="list-group-item">second league</a>
                    <a href="#" className="list-group-item">third league</a>
                    <a href="#" className="list-group-item">fourth league</a>
                    <a href="#" className="list-group-item">fifth league</a>
                </div>
    }
}

Navigation = connect(mapStateToProps)(Navigation);

export default Navigation;


