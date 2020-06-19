import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ crearCita }) => {
    // Crear el state de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propetario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [ error, notificarError ] = useState(false);
    const actualizarState = (event) => { // Función que actualizar el state
        actualizarCita({
            ...cita,
            [event.target.name]: event.target.value,
        });
    }
    const { mascota, propetario, fecha, hora, sintomas } = cita;
    const validarCita = (event) => { // Función que valida la cita
        event.preventDefault();
        // Validar
        if(mascota.trim() === '' || propetario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            notificarError(true); // Notificar Error
            return;
        }
        notificarError(false);
        cita.id = uuidv4(); // Asignar un id
        crearCita(cita); // Crear una cita
        actualizarCita({
            mascota: '',
            propetario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
            <form action=""
                onSubmit={validarCita}
            >
                <label>Nombre Mascota</label>
                <input type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input type="text"
                    name="propetario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño de la mascota"
                    onChange={actualizarState}
                    value={propetario}
                />
                <label>Fecha</label>
                <input type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                />
                <button type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;

