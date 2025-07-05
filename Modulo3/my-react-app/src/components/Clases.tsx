const personas = [
  { nombre: "Juan", apellido: "Pérez" },
  { nombre: "Ana", apellido: "García" },
  { nombre: "Luis", apellido: "Martínez" },
];

const TableName: React.FC = () => {
  return (
    <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        {personas.map((persona, idx) => (
          <tr key={idx}>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableName;