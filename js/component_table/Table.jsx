import React, {Component} from 'react';
import Animate from 'rc-animate';
import fetchData from './../modules/fetchData.js';
import {connect} from 'react-redux';
import store from './../store/store.js';
import actionGotTableData from './../actions/actionGotTableData.js';
import Loader from '../component_loader/Loader.jsx';
import TablesSwitcher from './../component_tables_switcher/TablesSwitcher.jsx';

const mapStateToProps = state => {return {tablesState: state.tablesState, uniqueLeagues: state.uniqueLeagues}};

class Table extends Component {

    constructor(){
        super();
        this.eachTeam = this.eachTeam.bind(this);
        this.eachLeague = this.eachLeague.bind(this);
        this.requestForData = this.requestForData.bind(this);
    }

    requestForData(activeLeague){
        activeLeague = activeLeague || this.props.tablesState.activeLeague;
        if (this.props.tablesState[activeLeague]){
            store.dispatch(actionGotTableData(activeLeague));
        }else{
            let src = `/data/table_${activeLeague}.json`;
            fetchData(src).then(response => store.dispatch(actionGotTableData(activeLeague, response)));
        }
    }
    
    eachTeam(team, index){
        var activeLeague = this.props.tablesState.activeLeague;
        return <tr key={index}>
                    <td className="position text-center">{index + 1}</td>
                    <td>
                        <span className="text-center"><img src={`./img/${activeLeague}/${team.imgSrc}`} alt=""/></span>
                        {team.team}
                    </td>
                    <td className="text-right col-sm-1 pad-r-20">{team.games}</td>
                    <td className="text-right col-sm-1 pad-r-20">{team.points}</td>
                </tr>;
    }

    eachLeague(text, index){
        return <button type="button" data-league={text} onClick={this.changeTableState.bind(this, text)} className="btn btn-default" key={index}>{text}</button>
    }

    getActiveLeagueName(leagues, league){
        var name = '';
        leagues.forEach(el => {let key = Object.keys(el)[0]; if(el[key] === league){name = key}});
        return name;
    }

    render(){
        var activeLeague = this.props.tablesState.activeLeague;
        var tableState = this.props.tablesState[activeLeague];
        var activeLeagueName = this.getActiveLeagueName(this.props.uniqueLeagues, activeLeague);
        return <div className="table-wrapper">
                <TablesSwitcher active={activeLeague} fetchData={this.requestForData}/>
                {tableState ?
                <Animate transitionAppear={true}
                         transitionLeave={false}
                         transitionName="fade" >
                    <table key={activeLeague} className="table table-striped">
                        <thead>
                            <tr>
                                <th className="text-center">#</th><th>{activeLeagueName}</th><th className="text-right">Games</th><th className="text-right">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                        {tableState.map(this.eachTeam)}
                        </tbody>
                    </table>
                </Animate> : <Loader/>
                }
            </div>
    }
}

Table = connect(mapStateToProps)(Table);

export default Table;