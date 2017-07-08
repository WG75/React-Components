import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CSelectbox, CSelect, COption, CArrow} from './c/CSelectbox';
import Select from 'react-select';
import media from '../../mixins/Media/Media';

@media()
export default class Selectbox extends Component {

	static propTypes = {
		options: PropTypes.array.isRequired,
		defaultValue: PropTypes.string,
		onChange: PropTypes.func,
		matchMedia: PropTypes.object
	};

	constructor(props) {
		super(props);
		this.state = {
			selectedOption: this.getSelectedOption(props.defaultValue) || props.options[0]
		};
	}

	componentWillReceiveProps(nextProps) {
		const nextSelectedOption = nextProps.defaultValue
			? this.getSelectedOption(nextProps.defaultValue, nextProps)
			: this.state.selectedOption;

		if (this.state.selectedOption.value !== nextSelectedOption.value) {
			this.setState({selectedOption: nextSelectedOption});
		}
	}

	onChange = (e) => {

		const selectedOption = e.target
			? this.getSelectedOption(e.target.value)
			: e;
		if (this.props.onChange) {
			this.props.onChange(selectedOption);
		}

		this.setState({
			selectedOption
		}, () => {
			if (this.state.selectedOption.value !== selectedOption.value) {
				this.setState({selectedOption});
			}
		});

	}

	getSelectedOption = (value, nextProps = {}) => {
		if (!value) {
			return null;
		}

		const options = nextProps.options || this.props.options;

		return options.filter(option => (option.value === value))[0];
	}

	render() {

		const {matchMedia, options} = this.props;

		const {value, label} = this.state.selectedOption;

		return matchMedia.mobile
			? (
				<CSelectbox selectedValue={label}>
					<CSelect selectedValue={value} handleChange={this.onChange}>
						{options.map((option, key) => (<COption key={key} value={option.value} label={option.label}/>))}
					</CSelect>
				</CSelectbox>
			)
			: <Select arrowRenderer={() => <CArrow />} className="SelectBox" {...this.props} value={value} options={options} onChange={this.onChange}/>;

	}
}
