import React from 'react';

class Registro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: 'Sandra',
            apellidoPaterno: '',
            apellidoMaterno: ''
        }
    }

    actualizaNombre(event) {
        let datoIngresado = event.target.value;
        let nombreAnterior = { ...this.state };
        nombreAnterior.nombre = datoIngresado;
        this.setState(nombreAnterior);
    }


    actualizaApellidoPaterno(event) {
        let datoIngresado2 = event.target.value;
        let apellidoPaternoAnterior = { ...this.state };
        apellidoPaternoAnterior.apellidoPaterno = datoIngresado2;
        this.setState(apellidoPaternoAnterior);
    }

    actualizaApellidoMaterno(event) {
        let datoIngresado3 = event.target.value;
        let apellidoMaternoAnterior = { ...this.state };
        apellidoMaternoAnterior.apellidoMaterno = datoIngresado3;
        this.setState(apellidoMaternoAnterior);
    }

    enviar(event) {
        alert(JSON.stringify(this.state));
        //this.setState(apellidoAnterior);
    }

    validarCampos(){
         return (this.state.nombre === '' || this.state.apellidoPaterno === ''|| this.state.apellidoMaterno === '')
    }

    render() {
        return (
            <div>
                <div>
                    Nombre: <input value={this.state.nombre} onChange={(event) => this.actualizaNombre(event)} />
                </div>
                <div>
                    Apellido Paterno: <input value={this.state.apellidoPaterno} onChange={(event) => this.actualizaApellidoPaterno(event)} />
                </div>
                <div>
                    Apellido Materno: <input value={this.state.apellidoMaterno} onChange={(event) => this.actualizaApellidoMaterno(event)} />
                </div>
                <button
                    disabled={this.state.nombre === '' || this.state.apellidoPaterno === '' || this.state.apellidoMaterno === ''} onClick={(event) => this.enviar(event)}>Enviar
                </button>
                <button
                    disabled={this.validarCampos()} onClick={(event) => this.enviar(event)}>Cancelar
                </button>
            </div>
        )
    }
}

export default Registro;