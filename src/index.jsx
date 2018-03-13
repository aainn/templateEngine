import 'bootstrap';
import $ from 'jquery';

import React from 'react';
import ReactDom from 'react-dom';
import Address from './Address.jsx';
import Header from './Header.jsx';
import Product from './Product.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse( localStorage.getItem('react-cart') ) || {
            data: 
            [
                {
                "id":0,
                "name":"Comté - The Definitive Guide, 6th Edition",
                "release": "September 2010",
                "amount": 1,
                "price":"2.99"
                },
                {
                "id":1,
                "name":"Limburger Cookbook",
                "release": "September 1991",
                "amount": 1,
                "price":"0.99"
                },
                {
                "id":2,
                "name":"BabyBell: Up and Running",
                "release": "March 2007",
                "amount": 1,
                "price":"30.99"
                },
                {
                "id":3,
                "name":"Roquefort pour les Connaisseurs",
                "release": "August 1910",
                "amount": 1,
                "price":"300.00"
                },
            ],
        }
    }
    render(){
        return(
            <div>
            <Header/>
            <Address/>
            {this.state.data.map((person, i) => <Product key={i} data = {person} />)}
            </div>
        );
    }
}
ReactDom.render(<App />, document.getElementById('root'));