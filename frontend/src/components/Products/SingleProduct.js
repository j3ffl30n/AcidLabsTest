import React from 'react';
import axios from 'axios';


const ObjectId = require('mongoose').Types.ObjectId;

class SingleProduct extends React.Component {


    state = {
        product: {},
        long: 0,
        palindromo: 0
    }
    componentDidMount() {
        console.log('componentDidMount() lifecycle')
        const url = 'http://0.0.0.0:8080/products/'
        axios.get(url)
            .then((response) => {
                let count = response.data.length
                console.log(response)
                this.setState({
                    product: response.data,
                    long: count
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        let inpVal = event.target[0].value

        let isid = ObjectId.isValid(inpVal);
        let palindromo
        let fraserReverse

        inpVal = inpVal.toLowerCase().replace(/\s/g, "");
        fraserReverse = inpVal.split("").reverse().toString();
        for (var i = 0; i < ((fraserReverse.length) - 1); i++) {
            fraserReverse = fraserReverse.replace(",", "");
        };
        if (inpVal == fraserReverse) {
            this.setState({
                palindromo: 1
            });
        } else {
            this.setState({
                palindromo: 0
            });
        }

        let url;
        if (isid) {
            url = 'http://0.0.0.0:8080/products/id/'
        } else {
            url = 'http://0.0.0.0:8080/products/find/'
        }

        await axios.get(url + inpVal)
            .then((response) => {
                let resp
                if (isid) {
                    resp = [response.data]
                } else {
                    resp = response.data
                }
                let count = Object.keys(resp).length
                this.setState({
                    product: resp,
                    long: count
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        var { product, long, palindromo } = this.state;

        if (long >= 1) {
            return (

                <div className="col-lg-8">
                    <div className="pb-5">
                        <form onSubmit={this.handleSubmit} className="w-100 d-flex">
                            <input className="maininput w-75 text-center" type="text" placeholder="Ingrese un parametro para buscar un producto" />
                            <button className="mainbtn w-25">Buscar</button>
                        </form>
                    </div>

                    <div className="greyultralightbg text-center">


                    <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Precio Con Descuento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map(x =>
                                <tr key={x._id}>
                                    <td>{x.name}</td>
                                    <td>{x.mark}</td>
                                    <td><img className="tbimg" src= {x.image} alt={x.name}/></td>
                                    <td>{x.description}</td>
                                    <td>{x.price}</td>
                                    <td>{palindromo ? x.price - (x.price * 0.20) : x.price}</td>
                                </tr>
                                )}
                            </tbody>
                        </table>




                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-lg-8  d-flex justify-content-center">
                    <div className="w-100 d-flex ">
                        <form onSubmit={this.handleSubmit} className="w-100 d-flex">
                            <input className="maininput w-75 text-center" type="text" placeholder="Ingrese un parametro para buscar un producto" />
                            <button className="mainbtn w-25">Buscar</button>
                        </form>
                    </div>
                </div>
            );
        }



    }
}

export default SingleProduct;