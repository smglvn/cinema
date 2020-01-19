import { h, render } from 'preact';
import App from './components/App/App';

const mountNode = document.getElementById('app');
render(<App />, mountNode, mountNode.lastChild);
