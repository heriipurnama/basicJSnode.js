/**
 * Created by heriipurnama on 17/10/15.
 */
var obj = {
    nama:"heripurnama",
    umur:"23",
    print : function(){
        console.log(this.nama+" adalah "+this.umur+" tahun");
        console.log(this === obj);
    }
}


function obj3(){
    console.log("aku");
    console.log(this == global);
}




obj.print();
console.log("_____________________");
obj3();
//this obj.dr var obj
//index yg berisi sebuag function
//this pemangilan var. pemangilan obj