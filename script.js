var  resquest = new XMLHttpRequest();
resquest.open("GET","https://restcountries.com/v3.1/all");
resquest.send();
resquest.onload = function(){
var res= JSON.parse(resquest.response);
console.log(res);
var details_asia = res.filter((ele)=>ele.region == "Asia");
console.log(details_asia);
var details_asia = res.map((ele)=>ele.name.common);
console.log(details_asia);

var data_popu = res.filter((ele)=>ele.population>100000);
console.log(data_popu);
for(i=0;i<data_popu.length;i++)
console.log(`Country name:${data_popu[i].name.common} Capital:${data_popu[i].capital}`);
}



