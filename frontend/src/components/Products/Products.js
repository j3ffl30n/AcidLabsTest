import React from 'react';
import PropTypes from "prop-types";

class Products extends React.Component {
    state = {
        inputValue: ""
    }

    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                {/* {data.map(x =>
                    <tr key={x._id}>
                        <td>{x.id}</td>
                        <td>{x.mark}</td>
                        <td>{x.image}</td>
                        <td>{x.name}</td>
                        <td>{x.description}</td>
                        <td>{x.price}</td>
                    </tr>
                )} */}

                <h1>Aqui ira el listado de productos</h1>
            </React.Fragment>
        );
    }
}

export default Products;