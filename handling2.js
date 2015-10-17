/**
 * Created by heriipurnama on 16/10/15.
 */
function Order(idorder,timeout){
    console.log("ID order"+idorder);
    ProsesOrder(idorder,timeout);
}

function ProsesOrder(idorder,timeout){
        setTimeout(function(){
            console.log("Id order"+idorder+"proseset");
        },timeout);
}
Order(101,5000);
    Order(102,2000);
        Order(103,3000);