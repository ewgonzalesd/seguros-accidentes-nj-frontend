import React from "react";
import Head from 'next/head';

import Router from 'next/router';

import  "../styles/style.scss";
import logo from "../images/lrimac.png";
import medicine from "../images/ic_medicine.png";
import rchildren from "../images/Illustration.png";

class IndexPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
			lsTipDoc: [{"id": "1", "name": "DNI"}, {"id": "2", "name": "CE"}],
			tipDoc: '1',
			numDoc: '',
			name: '',
			cbPro: false,
			cbEnv: false,
			valForm: false,
			valid: false
		};

		this.onValidate= this.onValidate.bind(this);

	}

	onValidate(){

		this.setState({"valForm" : true});


		if(this.state.numDoc!="" && this.state.name!=""
				&& this.state.cbPro && this.state.cbEnv){
				this.setState({"valid" : true});
			Router.push({
				pathname: '/accidente/step1',
				query: {
					name: this.state.name,
					numDoc: this.state.numDoc,
					tipDoc: this.state.tipDoc
				}
			})

		} else {
				this.setState({"valid" : false});
		}

	}

	handleChange = evt => {
		const value =
			evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
		this.setState({
			[evt.target.name]: value
		});
	};

	render() {


		return (
			<div>
				<Head>
					<title>SANJ</title>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
						key="viewport"
					/>
				</Head>
				<div className="main">
					<div className="display">
						<div>
							<img className="logo" src={logo}/>
						</div>
						<div></div>
						<div className="title">
							Seguro de accidentes para
							<span className="stitle"> Niños y Jóvenes</span>
						</div>
						<div className="summary">
							En accidentes <span className="ssummary">los cubrimos al 100%</span> para que se recuperen por completo.
						</div>
						<div>
							<div className="media">
								<ul>
									<li key="i1"><img className="imediciona" src={medicine}></img>Atención médica y medicinas</li>
									<li key="i2"><img className="imediciona" src={medicine}></img>Examenes de laboratorio</li>
									<li key="i3"><img className="imediciona"src={medicine}></img>Hospitalización y rehabilitación</li>
									<li key="i4"><img className="imediciona" src={medicine}></img>Cirugías y operaciones</li>
								</ul>
							</div>
						</div>
						<div></div>
						<div className="rcopyrights">© {this.state.date.getFullYear()} RIMAC Seguros y Reaseguros.</div>
						<div></div>
					</div>
					<div className="intermedio"></div>
					<div className="form">
						<div></div>
						<div>
							<div className="rform-title">Protégelos <b className="rform-titler">ahora</b></div>
							<div className="rform-subtitle">Ingresa los datos del titular.</div>
						</div>
						<div className="filter">
							<div>
								<select name="tipDoc" value={this.state.tipDoc} onChange={this.handleChange}>
									{this.state.lsTipDoc.map((doc)=>
										(<option value={doc.id} key={doc.id}>{doc.name}</option>)
									)}
								</select>
							</div>
							<div className="form-group">
								<input className="form-control" type="text" required name="numDoc" value={this.state.numDoc}
								onChange={this.handleChange}/>
								<label className="form-control-placeholder">Nro. de Documento</label>
								<span className={this.state.valForm ? (this.state.numDoc!=""?"hidden":"handleError"):"hidden"}>*Debe ingresar número.</span>
							</div>
						</div>
						<div className="filterName">
							<div className="form-group">
								<input type="text" className="form-control"  name="name" required  value={this.state.name} onChange={this.handleChange} />
								<label className="form-control-placeholder">Nombre</label>
								<span className={this.state.valForm ? (this.state.name!=""?"hidden":"handleError"):"hidden"}>*Debe ingresar nombre.</span>
							</div>
						</div>
						<div className="disclamer">
							<ul>
								<li>
									<input type="checkbox" name="cbPro" checked={this.state.cbPro} onChange={this.handleChange}/>
									<span>Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.</span>
								</li>
								<li>
									<input type="checkbox" name="cbEnv" checked={this.state.cbEnv} onChange={this.handleChange}/>
									<span>Acepto la Política de Envío de<br/> Comunicaciones Comerciales.</span>
								</li>
							</ul>

							<span className={this.state.valForm ? (this.state.cbPro?"hidden":"handleError"):"hidden"}>*Debe seleccionar Política de Protección de Datos</span><br/>
							<span className={this.state.valForm ? (this.state.cbEnv?"hidden":"handleError"):"hidden"}>*Debe seleccionar Política de Envío</span><br/>
						</div>
						<div>
							<button  className="btn" onClick={this.onValidate} style={{"width":"206px"}}>COMENCEMOS</button>
						</div>
					</div>
				</div>
				<div >
					<img  className="image" src={rchildren}></img>
				</div>
			</div>
		)
	}
}

export default IndexPage;
