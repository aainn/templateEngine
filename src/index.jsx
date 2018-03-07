import 'bootstrap';
import $ from 'jquery';

import React from 'react';
import ReactDom from 'react-dom';

class Products extends React.Component {
    render(){
        return(
        <div>
            <li className="list-group-item d-flex jstify-content-between lh-condensed">
                <div>
                    <h6 className="my-0"> Product 1</h6>
                    <small className="text-muted"> 1.000€ </small>
                </div>
                <div className="d-flex flex-column">
                    <span className="text-muted d-flex justify-conent-center align-items-baseline">
                        <button className="btn btn-sm btn-light">-</button>
                        <button className="btn btn-sm btn-light">+</button>
                    </span>
                     <span className= "badge"> something </span>
                </div>
            </li>

            <li className="list-group-item d-flex jstify-content-between lh-condensed">
            <div>
                <h6 className="my-0"> Product 2</h6>
                <small className="text-muted"> 2.000€ </small>
            </div>
            <div className="d-flex flex-column">
                <span className="text-muted d-flex justify-conent-center align-items-baseline">
                    <button className="btn btn-sm btn-light">-</button>
                    <button className="btn btn-sm btn-light">+</button>
                </span>
                 <span className= "badge"> something else</span>
            </div>
        </li>

        <li className="list-group-item d-flex jstify-content-between lh-condensed">
        <div>
            <h6 className="my-0"> Product 3</h6>
            <small className="text-muted"> 3.000€ </small>
        </div>
        <div className="d-flex flex-column">
            <span className="text-muted d-flex justify-conent-center align-items-baseline">
                <button className="btn btn-sm btn-light">-</button>
                <button className="btn btn-sm btn-light">+</button>
            </span>
             <span className= "badge"> some more </span>
        </div>
        </li>

        <li className="list-group-item d-flex jstify-content-between lh-condensed">
        <div>
            <h6 className="my-0"> Product 4</h6>
            <small className="text-muted"> 4.000€ </small>
        </div>
        <div className="d-flex flex-column">
            <span className="text-muted d-flex justify-conent-center align-items-baseline">
                <button className="btn btn-sm btn-light">-</button>
                <button className="btn btn-sm btn-light">+</button>
            </span>
             <span className= "badge"> whatever </span>
        </div>
        </li>
    </div>
        );
    }
}
ReactDom.render(<Products />, document.getElementById('root'));