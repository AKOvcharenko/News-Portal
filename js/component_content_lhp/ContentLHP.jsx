import React, {Component} from 'react';
import Table from './../component_table/Table.jsx';
import ArticlesCarusel from './../component_articles_carusel/ArticlesCarusel.jsx';

class ContentLHP extends Component {
    render(){
        return <div className="main col-sm-5 col-md-7">
                    <ArticlesCarusel/>
                    <Table/>
                </div>
    }
}

export default ContentLHP;