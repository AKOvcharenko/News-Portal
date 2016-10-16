import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from './../store/store.js';
import actionChangeTableState from './../actions/actionChangeTableState.js';

const mapStateToProps = state => {return {uniqueLeagues: state.uniqueLeagues}};

class TablesSwitcher extends Component {

    constructor(){
        super();
        this.eachLeague = this.eachLeague.bind(this);
        this.changeTableState = this.changeTableState.bind(this);
    }

    changeTableState(text){
        store.dispatch(actionChangeTableState(text));
    }

    componentDidUpdate(){
        this.props.fetchData();
    }

    eachLeague(league, index){
        var leagueName = Object.keys(league)[0];
        var likeLink = league[leagueName];
        var active = this.props.active;
        return <li className={active === likeLink ? 'active' : ''} key={index}>
                    <a onClick={this.changeTableState.bind(this, likeLink)}  href="javascript:void(0)">{leagueName}</a>
                </li>
    }

    render(){
        return <ul className="nav nav-pills nav-justified">
                    {this.props.uniqueLeagues.map(this.eachLeague)}
                </ul>
    }
}

TablesSwitcher = connect(mapStateToProps)(TablesSwitcher);

export default TablesSwitcher;