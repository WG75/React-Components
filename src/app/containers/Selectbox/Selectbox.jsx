import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CSelectbox, CSelect, COption} from './c/CSelectbox';
import Select from 'react-select';
import media from '../../mixins/Media/Media';


@media()
export default class Selectbox extends Component {

    static propTypes = {
        options: PropTypes.array.isRequired,
        onChange: PropTypes.func,
        defaultValue: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: this.getSelectedOption(props.defaultValue) || props.options[0]
        };
    }


    onChange = (e) => {

        const selectedOption = e.target ? this.getSelectedOption(e.target.value) : e;

        if (this.props.onChange) {
            this.props.onChange(selectedOption);
            this.setState({selectedOption});
        }else {
						this.setState({selectedOption});
				}
    }

    getSelectedOption = (value) => {
        if (!value) return;
        const {options} = this.props;

        return options.filter(option => (option.value === value))[0];
    }

    render() {

        const {
              matchMedia,
              options
              } = this.props;

        const {value, label} = this.state.selectedOption;

        return matchMedia.mobile
            ? (
                <CSelectbox selectedValue={label}>
                    <CSelect selectedValue={value} handleChange={this.onChange}>
                        {options.map((option, key) => (<COption key={key} value={option.value} label={option.label}/>))}
                    </CSelect>
                </CSelectbox>
            )
            : <Select {...this.props} value={value} options={options} onChange={this.onChange} />;

    }
}
