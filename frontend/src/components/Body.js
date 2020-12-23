import React, { Component } from 'react';


import Products from './Products/Products'
import SingleProduct from './Products/SingleProduct'


class Body extends Component {



    render() {



        return (
            <div className="col-12 greenbg py-5 bodybg">
                <div className="row d-flex justify-content-center">
                    <SingleProduct />
                </div>
            </div>
        )
    }
}
export default Body;