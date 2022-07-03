import React from "react";

const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, image,attack,defense, id } = el;

  return (
    
    <tr>
      <td>{name}</td>
      <td><img src={image} /></td>
      <td>{attack}</td>
      <td>{defense}</td>
      
      <td>
    
        <button onClick={() => setDataToEdit(el)}>Editar </button>
     
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
