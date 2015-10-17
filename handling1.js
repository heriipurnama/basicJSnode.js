/**
 * Created by heriipurnama on 17/10/15.
 */
function Order(idorder){
    console.log("ID order"+idorder);
    ProsesOrder(idorder);
}

function ProsesOrder(idorder){
    setTimeout(function(){
        console.log("Id order"+idorder+"proseset");
    },3000);
}
Order(101);
Order(102);
Order(103);