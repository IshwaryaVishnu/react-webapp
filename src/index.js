import ReactDOM from 'react-dom';

const greetingMessage = <div>Hello Reeact!</div>;

const menu = <ul>
<li> Home</li>
<li> Login</li>
<li> Contact Us</li>
</ul>

console.log("Hello React!");
//ReactDOM.render(menu, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppClass />);