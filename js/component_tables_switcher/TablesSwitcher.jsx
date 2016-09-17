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
        this.props.fetchData(text);
    }

    eachLeague(text, index){
        return <button type="button" onClick={this.changeTableState.bind(this, text)} className="btn btn-default" key={index}>{text}</button>
    }

    render(){
        return <div className="btn-group" role="group">
                    {this.props.uniqueLeagues.map(this.eachLeague)}
                </div>
    }
}

TablesSwitcher = connect(mapStateToProps)(TablesSwitcher);

export default TablesSwitcher;