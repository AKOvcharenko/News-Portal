import React, {Component} from 'react';
import Animate from 'rc-animate';
import fetchData from './../modules/fetchData.js';
import {connect} from 'react-redux';
import store from './../store/store.js';
import actionGotTableData from './../actions/actionGotTableData.js';
import Loader from '../component_loader/Loader.jsx';

const mapStateToProps = state => {return {tablesState: state.tablesState, uniqueLeagues: state.uniqueLeagues}};

class Table extends Component {

    constructor(){
        super();
        this.eachTeam = this.eachTeam.bind(this);
    }
    
    componentWillMount(){
        if (this.props.tablesState[this.props.league]){
            store.dispatch(actionGotTableData(league, response));
        }else{
            let src = `/data/table_${this.props.league.toLowerCase().replace(/ /g, '_')}.json`;
            fetchData(src).then(response =>store.dispatch(actionGotTableData(this.props.league, response)));
        }        
    }

    eachTeam(team, index){
        return <tr key={index}>
                    <td className="position text-center col-sm-1">{index + 1}</td>
                    <td>
                        <span className="text-left"><img src={`./img/${this.props.league.toLowerCase().replace(/ /g, '_')}/${team.imgSrc}`} alt=""/></span>
                        {team.team}
                    </td>
                    <td className="text-right col-sm-1 pad-r-20">{team.games}</td>
                    <td className="text-right col-sm-1 pad-r-20">{team.points}</td>
                </tr>;
    }

    eachLeague(text, index){
        return <button type="button" className="btn btn-default" key={index}>{text}</button>
    }

    render(){
        var tableState = this.props.tablesState[this.props.league];
        return tableState ?
            <Animate  transitionLeave={false}
                      transitionName="fade" >
                <div key={this.props.league} className="table-wrapper">
                    {this.props.hp === 'true' ?
                        <div className="btn-group" role="group">
                            {this.props.uniqueLeagues.map(this.eachLeague)}
                        </div> : null}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>{this.props.league}</th>
                                <th className="text-right">Games</th>
                                <th className="text-right">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableState.map(this.eachTeam)}
                        </tbody>
                    </table>
                </div>
            </Animate> : <Loader/>
            
    }
}

Table = connect(mapStateToProps)(Table);

export default Table;