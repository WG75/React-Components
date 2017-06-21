import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CDashboard, CHeader, CList, CListItem} from './c/CDashboard';






export default class Dashboard extends Component {
	static propTypes = {
		list: PropTypes.array.isRequired,
		backgroundColor: PropTypes.string,
	}
	render() {
		const {
			list,
			backgroundColor,
		} = this.props;

		return (
			<CDashboard backgroundColor={backgroundColor}>
				<CHeader text={'Portfolio'}/>
				<CList>
					{list.map((item) => (
						<CListItem key={item.label} textLabel={item.label} icon={item.icon}/>
					))}
				</CList>
			</CDashboard>
		);
	}

}
