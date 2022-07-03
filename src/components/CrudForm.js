import React, { useState, useEffect } from "react";

const initailForm = {
  name: "",
  image: "",
  attack:"",
  defense:"",
  hp:"",
  type:"",
  id_autor:"",
  id: null,
};

const CrudForm = ({ updateData,createData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.id || !form.name || !form.image || !form.attack || !form.defense || !form.hp || !form.type || !form.id_autor) {
      alert("Datos incompletos")
      return;
    }
    createData(form);

    if (form.id != null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="id"
          placeholder="id"
          onChange={handleChange}
          value={form.id}
        />
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="image"
          placeholder="Imagen"
          onChange={handleChange}
          value={form.image}
        />
        <input
          type="text"
          name="attack"
          placeholder="Ataque"
          onChange={handleChange}
          value={form.attack}
        />
         <input
          type="text"
          name="defense"
          placeholder="Defensa"
          onChange={handleChange}
          value={form.defense}
        />
         <input
          type="text"
          name="hp"
          placeholder="HP"
          onChange={handleChange}
          value={form.hp}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          onChange={handleChange}
          value={form.type}
        />
        <input
          type="text"
          name="id_author"
          placeholder="ID_Autor"
          onChange={handleChange}
          value={form.id_author}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
