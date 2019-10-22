import React from "react";

import { withRouter } from 'next/router'

import MyLayout from "../../components/MyLayout";

class Comprador extends React.Component {


    constructor({router, props}) {
        console.log(router);
        super(props);
        this.state = {
            name : router.query.name,
            numDoc : router.query.numDoc,
            tipDoc : router.query.tipDoc,
            lsTipDoc: [{"id": "1", "name": "DNI"}, {"id": "2", "name": "CE"}],
            titular:'0',
            correo:''
        };

    }

    handleChange = evt => {
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
    }

    render() {

        return(
            <MyLayout>
                <div className="step1">
                    <div className="resumen">
                        Hola <span className="show">{this.state.name} </span>
                        cuéntanos sobre ti
                    </div>
                    <div>
                        <span className="subtitle">Podrás protegerlos <span className="subtitlebold">por solo S/20 al mes </span> por asegurado</span>
                    </div>
                    <div className="titleForm">
                        Datos del Titular
                    </div>
                    <div className="filterstep1">
                        <div>
                            <select name="tipDoc"  value={this.state.tipDoc} disabled >
                                <option value="1" key="1">DNI</option>
                                <option value="2" key="2">CE</option>
                            </select>
                        </div>
                        <div className="form-group">
                                <input type="text"  className="form-control" name="nroDoc" value={this.state.numDoc} disabled />
                                    <label className="form-control-placeholder" >Nro. de Documento</label>
                        </div>
                    </div>
                    <div className="filterNamestep1">
                        <div className="form-group">
                            <input type="text" className="form-control" required name="correo" value={this.state.correo} onChange={this.handleChange}/>
                            <label className="form-control-placeholder">Correo</label>
                        </div>
                    </div>
                    <div className="whats">
                        ¿ESTE SEGURO ES PARA TI?
                    </div>
                    <div>
                        <div> <input type="radio" id="test1"  value="0" name="titular" checked={this.state.titular ==='0'} onChange={this.handleChange}/>
                            <label htmlFor="test1">No</label></div>
                        <div>
                            <input type="radio" id="test2" value="1" name="titular" checked={this.state.titular ==='1'} onChange={this.handleChange}/>
                            <label htmlFor="test2">Sí </label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button className="btn-return">Modificar {this.state.lsTipDoc[this.state.tipDoc-1].name}</button>
                            <button className="btn">CONTINUAR ></button>
                        </div>
                    </div>
                </div>
            </MyLayout>
        )
    }

}

export default withRouter(Comprador);
