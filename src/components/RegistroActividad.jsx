const RegistroActividad = ({ ultimaModificacion }) => {
  if (!ultimaModificacion || ultimaModificacion === '') {
    return (
      <div className="registro-actividad">
        <h3>Registro de Actividad</h3>
        <p>No se registraron modificaciones aún.</p>
      </div>
    );
  }

  return (
    <div className="registro-actividad">
      <h3>Registro de Actividad</h3>
      <p>Última modificación: {ultimaModificacion}</p>
    </div>
  );
}

export default RegistroActividad;
