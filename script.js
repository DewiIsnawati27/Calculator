function calcNumbers(result){
    form.displayResult.value = form.displayResult.value+result;
    
  }

function C(){
    form.displayResult.value = "";
  }

function Del(){
    var x = form.displayResult.value;
    form.displayResult.value = x.substring(0,x.length-1);
}
function equal(){
  var x = form.displayResult.value;
  if(x==""){
    alert('Masukan Angka terlebih dahulu');
  }
  if(x){
    form.displayResult.value = eval(x);
  }
  
  
}