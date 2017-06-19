var rectis = require('./Insertion-Sort');

var arrin01 = [-20, -8 , 48, 120, 220 , 390 , 1000 ];
var arrin02 = [20, -8 , 480 , 120, 220 , 390 , 1000 ];
var arrin03 = [1120, 800 , 480 , 120, 20 , -390 , -1000 ];

function solveIS(arr) {
    var arr_original = arr.toString() ;
    var result = rectis.insertionSort(arr);
    if (result==-1){
    console.log("Fail attempt to sort array ["+arr.toString()+" ] by Insertion Sort " );
    } else {
    console.log("Success attempt to sort array ["+arr_original+" ] and result is : [ "
                + result + " ]" );
    }
        
}

solveIS(arrin01);
solveIS(arrin02);
solveIS(arrin03);