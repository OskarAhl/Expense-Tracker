class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options,
        };
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
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(option) {
        this.setState((prevState) => ( 
            { options: prevState.options.filter((arrOption) => arrOption !== option) }
        ));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) >= 0) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }
    render() {
        const subTitle = 'Robot Assistance';

        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: [],
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}
// default for header - but can be changed by setting title={...} in parent. 
Header.defaultProps = {
    title: 'Indecision App'
};

// Why stateless functional components ?
// performance - less 'overhead' to compile vs Class based component (e.g. no lifecyclehooks or state functionality)
const Action = (props) => {
    return (
        <div>
            <button 
                disabled={!props.hasOptions} 
                onClick={props.handlePick}
            >
                What should I do?
            </button>  
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Clear Options</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        handleDeleteOption={props.handleDeleteOption} 
                        optionText={option} 
                    />
                ))                    
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
            Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined,
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
            
        // error is same as error: error (es6)
        this.setState(() =>( { error } ));
        // only clear input if NO error - to give user chance to fix error 
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text" placeholder="Add your option here" />
                    <button type="submit">Add Option</button>                                   
                </form>
            </div>
        )
    }
}

// stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));