// ================ Visibility toggle with state ==================
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.state = {
            show: false,
        }
    }
    onToggle() {
        this.setState((prevState) => {
            return {
                show: !prevState.show,
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggle}>{this.state.show ? 'Hide' : 'Show'}</button>
                {this.state.show && <p>Here I am</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// undefined implicitly returned
//  // return undefined;
// let show = false;

// const onToggle = () => { 
//     show = !show;
//     render();
// }

// const render = () => {
//     const templateTwo = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={onToggle}>{show ? 'Hide stuff' : 'Show stuff'}</button>
//             { show && <p>Here I am</p> }
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// const appRoot = document.getElementById('app'); 
// render(); 