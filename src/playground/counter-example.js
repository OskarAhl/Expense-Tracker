// ================================== COUNTER APP WITH COMPONENT STATE ===================================

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // Default state object - object to 'track' for state
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        // fetch
        try {
            const count = Number(localStorage.getItem('count'));
            if (!isNaN(count)) {
                this.setState(() => ( { count } ));
            }
        } catch (e) {
            console.log('error parsing json: ', e);
        }
    }
    componentDidUpdate(prevProp, prevState) {
        // save data
        if (this.state.count !== prevState.count) {
            console.log('save');
            localStorage.setItem('count', this.state.count);
        }
    }
    // this.setState is async
    handleReset() {
        this.setState(() => {
            return {
                count: 0,
            };
        })

    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            }
        })
    }
    handleAddOne() {
        // update state 
        this.setState((prevState) => {
            return {
                // just changing specific values of state object
                count: prevState.count + 1,
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>Plus me up bro</button>
                <button onClick={this.handleMinusOne}> Minus me bro </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
// Counter.defaultProps = {
//     count: 1,
// }

ReactDOM.render(<Counter />, document.getElementById('app'));















 
 
 
// ================================== VANILLA REACT COUNTER APP  ================================
// undefined implicitly returned
// return undefined;
//  const getLocation = (location) => { if (location) return <p>Location: {location}</p>; }
//  let count = 0;
//  const addOne = () => {
//      count++;
//      renderCounterApp();
//      console.log('AddOne');
//  }
//  const decrement = () => {
//      count--;
//      renderCounterApp();
//      console.log('decrement');
//  }
 
//  const reset = () => {
//      count = 0;
//      renderCounterApp();
//      console.log('reset');
//  }
 

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: { count }</h1>
//      button ={addOne}>Plus me up bro</button>
//      button ={decrement}> Minus me bro </button>
//      button ={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp(); 