import React, {Component} from 'react';
import {connect} from 'react-redux';
import actionUniqueLeague from './../actions/actionUniqueLeague.js';
import store from './../store/store.js';

const mapStateToProps = state => {return {feedState: state.feedState}};

class Navigation extends Component{

    getUniqueLeagues(){
        var leagues;
        var feed = this.props.feedState;
        var set = new Set();
        feed.forEach(el => set.add(el.league));
        leagues = Array.from(set);
        store.dispatch(actionUniqueLeague(leagues));
        return leagues;
    }

    eachNavigationLink(text, index){
        return <a href={"/" + text} className={"list-group-item " + text} key={index}>{text}</a>
    }

    render(){
        const leagues = this.getUniqueLeagues();
        return <div className="league-navigation list-group col-sm-3 col-md-2">
                    {leagues.map(this.eachNavigationLink)}
               </div>
    }
}

Navigation = connect(mapStateToProps)(Navigation);

export default Navigation;


