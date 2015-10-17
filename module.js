/**
 * Created by heriipurnama on 17/10/15.
 */
//module(modularity)memangil satu file ke file lain require/include
var nama = "heriipurnama";
var umur = 23;

function Prnt(){
    console.log("namaku"+nama+"umur"+umur);
}
module.exports.namaku = nama;//membuat var tidak lagi bersifat  prifat bila bersifat privat tidak bisa diakses di appm.js
module.exports.umurku = umur;
module.exports.Prnt = Prnt();



module.exports =  {
    nama:"heripurnama",
    umr:23,
    print : function(){
        console.log("akua");
    }
}