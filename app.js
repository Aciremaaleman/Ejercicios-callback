alert('En consola');
// 1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
function miForEach(arreglo, callback){
    console.log('Ejecicio 1 reemplanzando forEach');
    for (var i = 0;i <= arreglo.length; i++){ //El for itera el arreglo
        console.log('Devuelve el elemento' + ' ' + arreglo[i]); //Devuelve el elemento
        // console.log(arreglo.length); //Devuelve la longitud del arreglo
        console.log('Devuelve todo el arreglo' + ' ' + arreglo); //devuelve todo el arreglo
        // console.log(miForEach.indexOf()); para sacar el indice
    };
};
miForEach([1,2,3], function(callback){})

// 2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
var newArray = []
function miMap(arreglo, callback){
    console.log('Ejecicio 2 reemplanzando map');
    console.log('Devuelve todo el arreglo' + ' ' + arreglo); 
    for (var i = 0; i <= arreglo.length; i++){
        var sum = arreglo[i] * 2;
        newArray.push(sum);
        // console.log('Devuelve el elemento' + ' ' + arreglo[i]);
        console.log('Devuelve nuevo array' + ' ' + newArray);
    };
};
miMap([2,4,6], function(callback){})

// 3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
var newArray = [];
function miFilter(arreglo, filter){
    console.log('Ejecicio 3 reemplanzando filter');
    console.log('Devuelve todo el arreglo' + ' ' + arreglo);
    for (var i = 0; i < arreglo.length; i++){
        if(arreglo[i] === 'a'){
            newArray.push('a');
            console.log('Devuelve el nuevo array con los elementos filtrados' + ' ' + newArray);
        };
    };
};
miFilter(['a','b','c','d','a','d','a','w','a','z','a'], function(callback){})

// 4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
var count = 0;
function miReduce(arreglo, reduce){
    console.log('Ejecicio 4 reemplanzando reduce');
    console.log('Devuelve todo el arreglo para aplicar miReduce' + ' ' + arreglo);
    for (var i = 0; i < arreglo.length; i++){
        count = count + i;
        console.log('el total es' + count);
    };
};
miReduce([0,1,2,3,4], function(callback){})

// 1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi
function burbuja(arreglo){
    console.log('Resultado en pantalla ejercicio 6 reemplazando Sort')
        // console.log(arreglo.reverse());
        for (var i = 1; i < arreglo.length; i++){

            for ( var j = 0; j < (arreglo.length-i); j++){

                if (arreglo[j] > arreglo[j+1]){

                    k=arreglo[j+1];
                    arreglo[j+1] = arreglo[j];
                    arreglo[j] = k;
                }
            }
        }
        return(arreglo);
}

arreglo = Array(4,5,3,2,6,1,8,7,9);

document.write('Valores iniciales <br>');
for (var i = 0; i < arreglo.length; i++){
    document.write(arreglo[i] + '<br>');
}

arrayB = burbuja(arreglo);

document.write('Valores ordenados <br>');
for (var i = 0; i < arrayB.length; i++){
    document.write(arrayB[i] + '<br>');
}
// miSort(['watermelon','kiwi','banana','apple'], function(callback){})
// miSort([4,5,3,2,6,1,8,7,9], function(callback){})
