import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {return {list: state.modifydList}};

class Navigation extends Component{
    render(){
        return <div className="league-navigation list-group col-sm-3 col-md-2">
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


