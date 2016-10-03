import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import actionUniqueLeague from './../actions/actionUniqueLeague.js';
import store from './../store/store.js';

const mapStateToProps = state => {
    return {
        feedState: state.feedState,
        urlInfo: state.urlInfo
}};

class Navigation extends Component{

    constructor(){
        super();
        this.eachNavigationLink = this.eachNavigationLink.bind(this);
        this.getUniqueLeagues = this.getUniqueLeagues.bind(this);
    }

    componentDidMount(){
        store.dispatch(actionUniqueLeague(this.leagues))
    }

    transformToURI(text){
        return text.toLowerCase().replace(/\s/g, '_');
    }

    getUniqueLeagues(){
        var feed = this.props.feedState;
        var leagues  = feed.map(league => league.league).filter((league, i, arr) => arr.indexOf(league) === i);

        leagues = leagues.map(league =>{
            let obj = {};
            obj[league] = this.transformToURI(league);
            return obj;
        });

        this.leagues = leagues;
        return leagues;
    }

    eachNavigationLink(link, index){
        var urlInfo = this.props.urlInfo;
        var leagueName = Object.keys(link)[0];
        var likeLink = link[leagueName];
        var activeLeague = likeLink === urlInfo.league ? 'active' : '';
        return <Link to={`/${likeLink}`} className={"list-group-item " + activeLeague } key={index}>{leagueName}</Link>
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


