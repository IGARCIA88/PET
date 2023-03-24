function displayCards(){
    const DIV=document.getElementById
    ("mascotas");
    let card="";
    for(let i=0;i<pets.length;i++){
         card +=`
         <div class="card">
            <p>Nombre: ${pets[i].Nombre}</p>
            <p>Genero: ${pets[i].Genero}</p>
            <p>Raza: ${pets[i].Raza}</p>
            <p>Edad: ${pets[i].Edad}</p>
            <p>Consulta: ${pets[i].consulta}</p>
            <p>Direccion: ${pets[i].direccion}</p>
             <p>Telefono: ${pets[i].telefono}</p>
            </div>           
            `;
        }
        console.log(card);
        DIV.innerHTML=card;
}