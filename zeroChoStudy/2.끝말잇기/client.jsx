const React = require('react');
const ReactDom = require('react-dom');
const WordRelay = require('./wordRelay')

ReactDom.render(<WordRelay />, document.querySelector('#root'));
//  ReactDOM.createRoot(document.querySelector('#root')).render(<WordRelay/>);