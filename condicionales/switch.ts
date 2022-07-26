var cantidadDeNumerosEnviados:number = 50;

switch(cantidadDeNumerosEnviados){
    case 25:{
        console.log("son veinticinco");
    break;
    }
    case 20: {
        console.log("son veinte");
        break;
    }
    case 15: {
        console.log("son quince");
        break;
    }
    default: {
    console.log("no se encontro una opcion");
    }

}
//1 menu de canciones
//2 menu de album
//3 menu de artista
enum tipoMenu{
    canciones=1,
    album=2,
    artista=3

};

var menu:number = 3

/* switch(menu){
    case 1:{
        console.log("menu de canciones");
        break;
    }
    case 2:{
        console.log("menu de album");
        break;
    }
    case 3:{
        console.log("menu de artista");
        break;
    }
    default:{
        console.log("no se encontro una opcion");
    }
} */

switch(menu){
    case tipoMenu.canciones:{
        console.log("menu de canciones");
        break;
    }
    case tipoMenu.album:{
        console.log("menu de album");
        break;
    }
    case tipoMenu.artista:{
        console.log("menu de artista");
        break;
    }
    default:{
        console.log("no se encontro una opcion");
    }
}