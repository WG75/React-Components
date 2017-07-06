import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SelectBox from './c/Selectbox.jsx';
// import 'react-select/scss/default.scss';
import {Grid, GridItem} from '../../components/Grid/Grid.jsx';

export default class SelectBoxes extends Component {

    static propTypes = {
        SBListOfOptions: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = this.getInitialStateOfDepSB(props);
    }

    // a recursive function that get the depth of nested options

    getDepthLevel = ({options}, depth, start) => {
        return options
			? this.getDepthLevel(options[0], depth + 1, start)
			: depth;
    }

    // get initial state for dependant select boxes

    getInitialStateOfDepSB = (props) => {

        const start = this.getDependantSelectBoxesIndex(props);
        const dependentSBState = start
            ? this.syncStateToOptions(start, props.SBListOfOptions[start][0])
            : null;

        return dependentSBState;
    }

    // a functions that gets the number of all selectboxes

    getSelectBxesNum = (selectboxes) => {
        let Num = 0;

        for (const selectbox of selectboxes) {
            Num += this.getDepthLevel(selectbox[0], 0, 0);
        }

        return Num + selectboxes.length;
    }

    // catch the first dependent selectbox and gets it's index

    getDependantSelectBoxesIndex = ({SBListOfOptions}) => {
        let start;

        for (const optionsList of SBListOfOptions) {
            if (optionsList[0].options !== undefined) {
                start = SBListOfOptions.indexOf(optionsList);
            }
        }

        return start;
    }

    // another recursive function that's responsible for updating the state for changing selectbox
    // and all selectboxes that depends on it

    syncStateToOptions = (start, selectedOption, state = {}) => {
        state[`selectBox${start}`] = selectedOption;

        if (selectedOption.options) {
            return this.syncStateToOptions(start + 1, selectedOption.options[0], state);
        }

        return state;
    }

    // a function that fires when a dependent selectbox changes it's selected option.
    // it takes the index number of the changed SB change it's state and all subsequent dependent selectboxes's state

    updateDpendentSBState = (boxNum) => {
        return (option, num = boxNum) => {
            this.setState(this.syncStateToOptions(num, option));
        };

    }

    render() {

        const {SBListOfOptions} = this.props;
        const selectBoxesNum = this.getSelectBxesNum(SBListOfOptions);

        return (

            <Grid num={selectBoxesNum}>
                {SBListOfOptions.map((optionsList, key) => {

                    if (!optionsList[0].options) {
                        return (
                            <GridItem key={key}>
                                <SelectBox options={optionsList}/>
                            </GridItem>
                        );
                    } else {
                        const depth = this.getDepthLevel(SBListOfOptions[key][0], 0, key);
                        const dependentSB = [];

                        for (let i = 0; i <= depth; i++) {
                            i === 0
                                ? dependentSB.push(
                                    <GridItem key={key + i}>
                                        <SelectBox options={optionsList} defaultValue={this.state[`selectBox${key + i}`].value} onChange={this.updateDpendentSBState(key + i)}/>
                                    </GridItem>
                                )

                                : dependentSB.push(
                                    <GridItem key={key + i}>
                                        <SelectBox defaultValue={this.state[`selectBox${key + i}`].value} options={this.state[`selectBox${ (key + i) - 1}`].options} onChange={this.updateDpendentSBState(key + i)}/>
                                    </GridItem>
                                );
                        }

                        return dependentSB;
                    }
                })}
            </Grid>
        );

    }
}
