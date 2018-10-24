import React from 'react' ; 
import Article1 from './article.jsx' ; 
 
export default class App extends React.Component {
  render() {
        return (
        <div style={{textAlign: 'center'}}>
            <h1>Conceitos de ReactJS</h1>                 
            <Article1 />
        </div>
        );
    }
}