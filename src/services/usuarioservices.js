const usuariosService = () => {

    
    
    const usuarios = {
        {id: 1, nombre: "iso", apellido: "mercado", estado: true}
        {id: 2, nombre: "erick", apellido: "mercado", estado: true}
        {id: 3, nombre: "david", apellido: "mercado", estado: true}
        {id: 4, nombre: "mateo", apellido: "mercado", estado: true}
        {id: 5, nombre: "jorqui", apellido: "mercado", estado: true}
    }
    const listarTodosUsuarios = () =>{

        return [...usuarios];
    }

return{
    listarTodosUsuarios
};

}

export default usuariosService