console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Reduce decisions reduce anxiety',
    options: [],
};

// BIND
const obj = {
    name: 'Oskar',
    getName() {
        return this.name;
    },
};

// first argument of bind(here, ) - set 'this' context
const getName = obj.getName.bind(obj);
console.log(getName()); 

// cmd shift k - cmd shift L - alt shit down
// JSX - Javascript XML (from react)
// outside div is wrapper div
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted: ', e.target.elements);

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}
const onClearOptions = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
}

const appRoot = document.getElementById('app'); 

const render = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        { app.subtitle && <p>Subtitle: {app.subtitle}</p> }
        <p> {(app.options && app.options.length > 0) ? 'Here are your options:'  : 'No options'}</p>
        <button disabled={(app.options && app.options.length > 0) ? false : true} onClick={onMakeDecision}>What Should I do?</button>
        <button onClick={onClearOptions}>Remove All</button>
        <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }         
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="test" name="option"/>
            <button>Add option</button>
        </form>
    </div>
);
    ReactDOM.render(template, appRoot);
}
render();