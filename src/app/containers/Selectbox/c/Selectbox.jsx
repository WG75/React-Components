import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CSelectbox, CSelect, COption} from './CSelectbox';
import Select from 'react-select';
import media from '../../../mixins/Media/Media';
import {svgArrow16} from '../../../theme/svg-inline';
import SVGInline from 'react-svg-inline';
import styles from './selectbox.scss';

@media()
export default class Selectbox extends Component {

	static propTypes = {
		options: PropTypes.array.isRequired,
		defaultValue: PropTypes.string,
		onChange: PropTypes.func ,
		matchMedia: PropTypes.object
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
        }

				this.setState({selectedOption}, () => {
					if (this.state.selectedOption.value !=  selectedOption.value) {
						this.setState({selectedOption})
					}
				})


    }

    getSelectedOption = (value, nextProps = {}) => {
        if (!value) return null;

        const options =  nextProps.options || this.props.options;

        return options.filter(option => (option.value === value))[0];
    }


		componentWillReceiveProps(nextProps) {
			const nextSelectedOption = nextProps.defaultValue ?
																this.getSelectedOption(nextProps.defaultValue, nextProps) :
																nextProps.options[0]

			if (this.state.selectedOption.value != nextSelectedOption.value) {
				this.setState({selectedOption: nextSelectedOption})
			}
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
            : <Select
							arrowRenderer={() =><span className={styles.down}><SVGInline svg={svgArrow16}/></span>}
							className='SelectBox' {...this.props} value={value} clearable={false} searchable={false}
							options={options}
							onChange={this.onChange} />;

    }
}
