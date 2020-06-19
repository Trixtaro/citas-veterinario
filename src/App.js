import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import PropTypes from 'prop-types'

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem('citas')); // Citas iniciales en localStorage
  if(!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, guardarCitas] = useState(citasIniciales);
  useEffect(() => {
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
    console.log('listo');
  }, [citas])
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  }
  const elminarCita = (id) => { // Función para elimnar cita
    const NuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(NuevasCitas);
  }
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{ titulo }</h2>
            {
              citas.map(cita => (
                <Cita
                  key={cita.id}
                  cita={cita}
                  elminarCita={elminarCita}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Formulario.propType = {
  crearCita: PropTypes.func.isRequired
}

export default App;
