import React, {Component} from 'react';
import Data from '../Data.js';
import {CDashboard, Header, List, ListItem, Icon} from './c/CDashboard.jsx';

class DashBoard extends React.Component {

    render() {
        const {listItems} = Data;
        const {header} = Data;

        return (
            <CDashboard>
                <Header text={header.text} icon={header.icon}/>
                <List>
                    {listItems.map((item) => {
                        return (<ListItem key={item.label} textLabel={item.label} icon={item.icon}/>);
                    })
}
                </List>
            </CDashboard>
        );
    }

}

export default DashBoard;
