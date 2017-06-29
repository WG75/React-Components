import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
	CSelectbox, CSelect, COption
} from './c/CSelectbox';
import media from '../../mixins/Media/Media';

@media()
export default class Selectbox extends Component {
	static propTypes = {
		options: PropTypes.array.isRequired,
		defaultId: PropTypes.string.isRequired,
		handleSelect: PropTypes.func,
	};
	constructor(props) {
		super(props);
		this.state = {
			selectedId: props.defaultId,
			opened: false
		};
	}
	componentWillReceiveProps(nextProps, nextState) {
		if (nextProps.defaultId !== this.state.selectedId) {
			this.setState({
				selectedId: nextProps.defaultId
			});
		}
	}
	selectChange = (e) => {
		const {handleSelect} = this.props;
		// const key = options.findIndex((option) => option.id === e.target.value);
		this.setState({
			selectedId: e.target.value
		});
		this.setState({
			opened: false
		});
		if (handleSelect) {
			handleSelect(e.target.value);
		}
	}
	toggle = () => {
		this.setState({
			opened: !this.state.opened
		});
	}
	render() {
		const {options, matchMedia} = this.props;

		const {opened, selectedId} = this.state;
		const selectedItem = options.find(item => item.id === selectedId);

		return matchMedia.mobile
			? (
				<CSelectbox selectedText={selectedItem.title} toggle={this.toggle}>
					<CSelect selectedId={selectedId} selectChange={this.selectChange}>
						{options.map((item, key) => (
							<COption key={key} value={item.id} text={item.title} />
						))}
					</CSelect>
				</CSelectbox>
			)
			: null; // custom selectbox goes here
	}
}
