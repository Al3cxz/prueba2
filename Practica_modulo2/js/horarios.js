const nombreInput = document.getElementById("nombre");
const diasButtons = document.querySelectorAll("#dias button");
const horasDiv = document.getElementById("horas");
const guardarButton = document.getElementById("guardar");
const tablaHorarios = document.getElementById("tablaHorarios");
const datosSeleccionados = [];

// Escucha los clics en los botones de días
diasButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Cambia el estado seleccionado del botón
        button.classList.toggle("seleccionado");
        generarFormulariosHorasParaDias(); // Actualiza los formularios de horas cuando se cambian los días
    });
});

// Escucha el clic en el botón "Agregar Usuario"
const agregarUsuarioButton = document.getElementById("agregarUsuario");
agregarUsuarioButton.addEventListener("click", () => {
    agregarUsuario();
});

// Escucha el clic en el botón "Guardar y Generar Tabla"
guardarButton.addEventListener("click", () => {
    generarTabla();
});

// Función para generar la tabla con los datos seleccionados
function generarTabla() {
    const nombre = nombreInput.value;

    // Limpia los datos seleccionados previos
    datosSeleccionados.length = 0;

    // Recopila los datos de días y horas
    const filasFormulario = horasDiv.querySelectorAll(".formulario-dia");
    filasFormulario.forEach((formularioDia) => {
        const dia = formularioDia.getAttribute("data-dia");
        const horaInicio = formularioDia.querySelector(".hora-inicio").value;
        const horaFin = formularioDia.querySelector(".hora-fin").value;
        datosSeleccionados.push({ Nombre: nombre, Día: dia, "Hora de Inicio": horaInicio, "Hora de Fin": horaFin });
    });

    // Genera la tabla con los datos seleccionados
    generarTablaHTML(datosSeleccionados);
}

// Función para generar la tabla HTML con los datos seleccionados
function generarTablaHTML(datos) {
    const tbody = document.createElement("tbody");

    datos.forEach((dato, index) => {
        const fila = document.createElement("tr");
        for (const key in dato) {
            const celda = document.createElement("td");
            celda.textContent = dato[key];
            fila.appendChild(celda);
        }

        // Agrega un botón "Editar" en la última columna
        const editarCelda = document.createElement("td");
        const editarBoton = document.createElement("button");
        editarBoton.textContent = "Editar";
        editarBoton.addEventListener("click", () => editarFila(index));
        editarBoton.classList.add("editar-button"); // Agrega esta línea para identificar el botón de edición
        editarCelda.appendChild(editarBoton);
        fila.appendChild(editarCelda);

        tbody.appendChild(fila);
    });

    // Limpia la tabla existente y agrega la nueva
    tablaHorarios.innerHTML = "";
    tablaHorarios.appendChild(tbody);
}




// Genera los formularios de selección de horas para cada día
function generarFormulariosHorasParaDias() {
    const horasDiv = document.getElementById("horas");
    horasDiv.innerHTML = ""; // Limpia los formularios existentes

    // Filtra los días seleccionados
    const diasSeleccionados = Array.from(diasButtons)
        .filter((button) => button.classList.contains("seleccionado"))
        .map((button) => button.getAttribute("data-dia"));

    // Genera un formulario para cada día seleccionado
    diasSeleccionados.forEach((dia) => {
        const formularioDia = generarFormularioHoras(dia);
        horasDiv.appendChild(formularioDia);
    });
}

// Función para generar un formulario de selección de horas para un día
function generarFormularioHoras(dia) {
    const formularioDia = document.createElement("div");
    const idFormulario = `formulario-${dia.toLowerCase()}`; // Crea un ID único
    formularioDia.id = idFormulario;
    formularioDia.classList.add("formulario-dia");
    formularioDia.setAttribute("data-dia", dia);

    formularioDia.innerHTML = ` 
    <!-- Horas despues de seleccionar el dia -->
<h4>${dia}</h4>
<label>Hora de Inicio:</label>
<select class="hora-inicio">

    <option value="00:00">12:00 AM</option>
    <option value="01:00">01:00 AM</option>
    <option value="02:00">02:00 AM</option>
    <option value="03:00">03:00 AM</option>
    <option value="04:00">04:00 AM</option>
    <option value="05:00">05:00 AM</option>
    <option value="06:00">06:00 AM</option>
    <option value="07:00">07:00 AM</option>
    <option value="08:00">08:00 AM</option>
    <option value="09:00">09:00 AM</option>
    <option value="10:00">10:00 AM</option>
    <option value="11:00">11:00 AM</option>
    <option value="12:00">12:00 PM</option>
    <option value="1:00">01:00 PM</option>
    <option value="2:00">02:00 PM</option>
    <option value="3:00">03:00 PM</option>
    <option value="4:00">04:00 PM</option>
    <option value="5:00">05:00 PM</option>
    <option value="6:00">06:00 PM</option>
    <option value="7:00">07:00 PM</option>
    <option value="8:00">08:00 PM</option>
    <option value="9:00">09:00 PM</option>
    <option value="10:00">10:00 PM</option>
    <option value="11:00">11:00 PM</option>
    
    
</select>
<label>Hora de Fin:</label>
<select class="hora-fin">

<option value="00:00">12:00 AM</option>
<option value="01:00">01:00 AM</option>
<option value="02:00">02:00 AM</option>
<option value="03:00">03:00 AM</option>
<option value="04:00">04:00 AM</option>
<option value="05:00">05:00 AM</option>
<option value="06:00">06:00 AM</option>
<option value="07:00">07:00 AM</option>
<option value="08:00">08:00 AM</option>
<option value="09:00">09:00 AM</option>
<option value="10:00">10:00 AM</option>
<option value="11:00">11:00 AM</option>
<option value="12:00">12:00 PM</option>
<option value="1:00">01:00 PM</option>
<option value="2:00">02:00 PM</option>
<option value="3:00">03:00 PM</option>
<option value="4:00">04:00 PM</option>
<option value="5:00">05:00 PM</option>
<option value="6:00">06:00 PM</option>
<option value="7:00">07:00 PM</option>
<option value="8:00">08:00 PM</option>
<option value="9:00">09:00 PM</option>
<option value="10:00">10:00 PM</option>
<option value="11:00">11:00 PM</option>

</select>
`;

    return formularioDia;
}

// Función para agregar un usuario
function agregarUsuario() {
    const nombre = nombreInput.value;
    if (!nombre) {
        alert("Por favor, ingresa un nombre de usuario.");
        return;
    }

    // Recopila los datos de días y horas
    const filasFormulario = horasDiv.querySelectorAll(".formulario-dia");
    const datosUsuario = [];
    filasFormulario.forEach((formularioDia) => {
        const dia = formularioDia.getAttribute("data-dia");
        const horaInicio = formularioDia.querySelector(".hora-inicio").value;
        const horaFin = formularioDia.querySelector(".hora-fin").value;
        datosUsuario.push({ Nombre: nombre, Día: dia, "Hora de Inicio": horaInicio, "Hora de Fin": horaFin });
    });


    // Limpia el campo de nombre
    nombreInput.value = "";
    // Deselecciona los días
    diasButtons.forEach((button) => button.classList.remove("seleccionado"));
    // Limpia los formularios de horas
    horasDiv.innerHTML = "";

    // Agrega los datos del usuario a la lista global de datosSeleccionados
    datosSeleccionados.push(...datosUsuario);

    // Genera la tabla con todos los datos seleccionados
    generarTablaHTML(datosSeleccionados);
}
// Función para editar una fila
function editarFila(index) {
    console.log("Editando fila en el índice:", index);
    const dato = datosSeleccionados[index];
    const idFormulario = `formulario-${dato.Día.toLowerCase()}`; // Crea un ID único basado en el día
    const formularioDia = document.getElementById(idFormulario);
    if (formularioDia) {
        const horaInicioInput = formularioDia.querySelector(".hora-inicio");
        const horaFinInput = formularioDia.querySelector(".hora-fin");

        // Actualiza los valores del formulario con los datos del usuario seleccionado
        horaInicioInput.value = dato["Hora de Inicio"];
        horaFinInput.value = dato["Hora de Fin"];

        // Agrega el día a la lista de días seleccionados
        const diaSeleccionado = formularioDia.getAttribute("data-dia");
        diasButtons.forEach((button) => {
            if (button.getAttribute("data-dia") === diaSeleccionado) {
                button.classList.add("seleccionado");
            }
        });

        // Actualiza la tabla después de la edición
        generarTablaHTML(datosSeleccionados);
    }
}

// Escucha el clic en el botón "Editar"
function habilitarEdicion() {
    const editarBotones = document.querySelectorAll(".editar-button");
    editarBotones.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            editarFila(index);
        });
    });
}

// Luego, llamas a esta función para habilitar la edición cuando sea necesario
habilitarEdicion();

// Escucha el clic en el botón "Comparar"
const compararButton = document.getElementById("compararButton");
compararButton.addEventListener("click", () => {
    compararDisponibilidad();
});

// Función para comparar la disponibilidad de usuarios
function compararDisponibilidad() {
    // Obtiene la hora y el día seleccionados por el usuario
    const horaSeleccionada = document.getElementById("horaSeleccionada").value;
    const diaSeleccionado = document.getElementById("diaSeleccionado").value;

    // Filtra los usuarios que están disponibles en la misma hora y día
    const usuariosDisponibles = datosSeleccionados.filter((usuario) => {
        return usuario["Hora de Inicio"] <= horaSeleccionada &&
            usuario["Hora de Fin"] >= horaSeleccionada &&
            usuario["Día"] === diaSeleccionado;
    });

    // Genera la segunda tabla con los usuarios disponibles
    generarTablaDisponibilidad(usuariosDisponibles);
}

// Función para generar la segunda tabla de disponibilidad
function generarTablaDisponibilidad(usuarios) {
    const tablaDisponibilidad = document.getElementById("tablaDisponibilidad");
    const tbody = tablaDisponibilidad.querySelector("tbody"); // Obtén el tbody existente

    // Limpia la tabla existente
    tbody.innerHTML = "";

    usuarios.forEach((usuario) => {
        const fila = document.createElement("tr");
        const nombreCelda = document.createElement("td");
        nombreCelda.textContent = usuario["Nombre"];
        fila.appendChild(nombreCelda);
        tbody.appendChild(fila);
    });
}
