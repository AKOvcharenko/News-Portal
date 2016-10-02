import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import actionUniqueLeague from './../actions/actionUniqueLeague.js';
import store from './../store/store.js';

const mapStateToProps = state => {return {feedState: state.feedState}};

class Navigation extends Component{

    constructor(){
        super();
        this.eachNavigationLink = this.eachNavigationLink.bind(this);
    }

    transformToURI(text){
        return text.toLowerCase().replace(/\s/g, '_');
    }

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
        debugger;
        return <Link to={`/${this.transformToURI(text)}`} className={"list-group-item " + text} key={index}>{text}</Link>
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


