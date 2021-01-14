
var arr = new Array();

var click = document.getElementById("myDropdown");
click.style.display ="none";
function add_element_to_array(){

    var v = document.getElementById("text1").value.split(",");
    
    for(var i=0;i<v.length;i++)
    {
        arr[i] = parseInt(v[i],10);
    }

    for(var i=0;i<v.length;i++)
    {
        console.log(arr[i]);
    }
    
    document.getElementById("text1").value = "";
}

function myFunction() {
    var click = document.getElementById("myDropdown");  
         if(click.style.display ==="none") {  
            click.style.display ="block";  
         } else {  
            click.style.display ="none";  
         }   
}

function incSort(){
    arr.sort(function(a, b){return a-b});
    var up="";
    for(i=0;i<arr.length;i++)
    {
        var s = arr[i];
        up+=s.toString();
        up+=" ";
    }
    document.getElementById("output").innerHTML = up;
}

function decSort(){
    arr.sort(function(a, b){return b-a});
    var down="";
    for(i=0;i<arr.length;i++)
    {
        var s = arr[i];
        down+=s.toString();
        down+=" ";
    }
    document.getElementById("output").innerHTML = down;

}

function maxNum(){
    var max = Math.max.apply(null,arr);
    document.getElementById("output").innerHTML = max;
}


function minNum(){
    var min = Math.min.apply(null,arr);;
    document.getElementById("output").innerHTML = min;
}

var sum="null";
function calcSum(){

    if(sum==="null")
    {
        sum=0;
        for(i=0;i<arr.length;i++)
        {
            sum+=arr[i];
        }
    }
    return sum;
}
function Sum(){
    var netSum = calcSum();
    document.getElementById("output").innerHTML = netSum;
}

var mn="null";
function calcmean(){

    if(mn==="null")
    {
        mn=0;
        var s=calcSum();
        mn=s/arr.length;
    }
    return mn;
}

function mean(){
    var meanval = calcmean();
    document.getElementById("output").innerHTML = meanval;
}

function median(){
    
    arr.sort(function(a, b){return a-b});
    
        if(arr.length%2==0)
        {
            var mid=arr.length/2;
            var m = Math.floor(mid);
            var med = (arr[m]+arr[m-1])/2;
        }
        else{
            var mid=arr.length/2;
            var m= Math.floor(mid);
            var med = arr[m];
        }

        document.getElementById("output").innerHTML = med;
}

function stdev(){

    var m=calcmean();
    var std=Math.sqrt(arr.reduce(function (sq, n) {
        return sq + Math.pow(n - m, 2);
    }, 0) / (arr.length - 1));

    document.getElementById("output").innerHTML = std;

}
