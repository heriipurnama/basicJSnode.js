/**
 * Created by heriipurnama on 16/10/15.
 */
var json = [
    //objek dari json
    {
        nama:"Heriipurnama", //keyword dari json
        jk:"l",             //keyword dari json
        umur:23
    },
//    objek dari json
    {
        nama:"mareta",
        jk:"P",
        umur:45
    }
]

for(var i=0;i<json.length;i++){
    console.log(json[i].nama);//menampilkan satu keyword
    console.log(" ");
    console.log(json[i].nama+" "+json[i].jk);//mengambil variabel objek json
}