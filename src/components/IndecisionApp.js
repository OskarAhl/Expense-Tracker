import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    // default state
    state = {
        options: [],
        selectedOption: undefined
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNum];
        this.setState(() => ({selectedOption}));
        console.log(selectedOption);
    };
    handleDeleteOption = (option) => {
        this.setState((prevState) => ( 
            { options: prevState.options.filter((arrOption) => arrOption !== option) }
        ));
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) >= 0) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if (options) {
                this.setState(() => ( {options} ));
            }
        } catch (e) {
            console.log('error parsing json: ', e);
        }
    }
    // only fires if update to state
    componentDidUpdate(prevProp, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('Unmount');
    }
    render() {
        const subTitle = 'Robot Assistance';

        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
               <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
               />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: [],
}