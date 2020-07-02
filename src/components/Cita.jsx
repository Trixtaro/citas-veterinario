import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({cita, elminarCita}) => {
    const { mascota, propetario, n_telefono, fecha, hora, sintomas } = cita;
    return (
        <div className="cita">
            <p>Mascota: <span>{ mascota }</span></p>
            <p>Dueño: <span>{ propetario }</span></p>
            {
                (n_telefono) || (
                    <p>Nº de teléfono: <span>{ n_telefono }</span></p>
                )
            }
            <p>Fecha: <span>{ fecha }</span></p>
            <p>Hora: <span>{ hora }</span></p>
            <p>Sintomas: <span>{ sintomas }</span></p>
            <button
                className="button eliminar u-full-width"
                onClick={ () => elminarCita(cita.id) }
            >Eliminar &times;</button>
        </div>
    );
}

Cita.propType = {
    cita: PropTypes.object.isRequired,
    elminarCita: PropTypes.func.isRequired
}

export default Cita;