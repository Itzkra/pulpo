let mostrarFecha = document.getElementById('fecha');
let mostrarReloj = document.getElementById('reloj');

let fecha = new Date();

let diaSemana = ['Domingo','Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado'];

let mesAnyo = ['01','02', '03','04','05','06','07','08','09','10','11','12'];

mostrarFecha.innerHTML = ` ${fecha.getDate()} / ${mesAnyo[fecha.getMonth()]} / ${fecha.getFullYear()}`;



setInterval(()=>{
  let hora = new Date();
  mostrarReloj.innerHTML = hora.toLocaleTimeString()
},1000);
