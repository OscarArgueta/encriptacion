function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    alert(inputVal);
}

let contenido_encriptado;

let abc = new Object();
abc['A'] = 1;
abc['B'] = 2;
abc['C'] = 3;
abc['D'] = 4;
abc['E'] = 5;
abc['F'] = 6;
abc['G'] = 7;
abc['H'] = 8;
abc['I'] = 9;
abc['J'] = 10;
abc['K'] = 11;
abc['L'] = 12;
abc['M'] = 13;
abc['N'] = 14;
//abc['Ñ'] = 15;
abc['O'] = 15;
abc['P'] = 16;
abc['Q'] = 17;
abc['R'] = 18;
abc['S'] = 19;
abc['T'] = 20;
abc['U'] = 21;
abc['V'] = 22;
abc['W'] = 23;
abc['X'] = 24;
abc['Y'] = 25;
abc['Z'] = 26;
abc[' '] = 27;

let matrizLlave = new Array(3);
matrizLlave[0] = new Array(3);
matrizLlave[1] = new Array(3);
matrizLlave[2] = new Array(3);
/* Matriz Llave */
matrizLlave[0][0] = -2; matrizLlave[0][1] = 1; matrizLlave[0][2] = 1;
matrizLlave[1][0] = -2; matrizLlave[1][1] = -3; matrizLlave[1][2] = 1;
matrizLlave[2][0] = 3;  matrizLlave[2][1] = 1; matrizLlave[2][2] = -3;

/* Inversa */
let matrizInversa = new Array(3);
matrizInversa[0] = new Array(3);
matrizInversa[1] = new Array(3);
matrizInversa[2] = new Array(3);

function getLetterValueNumber(letter) {
    for (let k in abc) {
    	if (abc.hasOwnProperty(k) && k === letter){
            return abc[k]
        }
    }
}

function getLetter(number) {
    let i = 1;
    for (let k in abc) {
        if (i === number) {
            return k;
        }
        i++;
    }
}

function run2() {
    //document.write('<h4> Inicia encripcion </h4>');
    var inputVal = document.getElementById("entrada").value;
    
    // Displaying the value
    alert(inputVal);
}

function relleno() {
    let texto_plano = '';
    texto_plano = document.getElementById("entrada").value.toUpperCase();
    let chars = texto_plano.length-(Math.trunc(texto_plano.length / 3)*3);
    console.log('chars', chars);
    console.log('['+texto_plano+']');
    for(i=0;i<chars;i++) {
        texto_plano = texto_plano + ' ';
    }
    console.log('['+texto_plano+']');
}

function encriptar () {
    let texto_plano = 'UNIVERSIDAD MARIANO GALVEZ';
    //document.write('<h4> Inicia encripcion </h4>');
    texto_plano = document.getElementById("entrada").value.toUpperCase();
    let chars = texto_plano.length-(Math.trunc(texto_plano.length / 3)*3);
    console.log('chars', chars);
    console.log('['+texto_plano+']');
    for(i=0;i<chars;i++) {
        texto_plano = texto_plano + ' ';
    }
    console.log('['+texto_plano+']');
    //document.write('<p> [' + texto_plano + ']</p>');
    /*for(var i=0; i<3; i++) {
    //Bucle que recorre el array que está en la posición i
    for(var j=0; j<3; j++) {
    document.write(matrizLlave[i][j]);
    }
    document.write('<br/>');
    }*/
    let texto_encriptado = "";
    for (let i = 0; i <= texto_plano.length - 1; i++) {
    	//document.write('<span>' + texto_plano[i] + '</span>');
        //document.write('<span>' + getLetterValueNumber(texto_plano[i]) + ' , </span>');
        if (((i+1) % 3) == 0 ) {
            let val1 = getLetterValueNumber(texto_plano[i-2]);
            let val2 = getLetterValueNumber(texto_plano[i-1]);
            let val3 = getLetterValueNumber(texto_plano[i-0]);
	    //document.write('<br/><span>' + val1 + ' , '+ val2 + ' , ' + val3 + '</span>');
            let valenc1 = (val1 * matrizLlave[0][0]) + (val2 * matrizLlave[0][1]) + (val3 * matrizLlave[0][2]);
	        let valenc2 = (val1 * matrizLlave[1][0]) + (val2 * matrizLlave[1][1]) + (val3 * matrizLlave[1][2]);
	        let valenc3 = (val1 * matrizLlave[2][0]) + (val2 * matrizLlave[2][1]) + (val3 * matrizLlave[2][2]);
	    //document.write('<br/><b>' + valenc1 + ' , '+ valenc2 + ' , '+ valenc3 + '</b>');            
            //document.write('<hr/>');
            texto_encriptado = texto_encriptado + '|' + valenc1 + '|' + valenc2 + '|' + valenc3;
        }
    }
    // document.write('<hr/>');
    // document.write('<h3>' + texto_encriptado + '</h3>');
    console.log('-----');
    console.log('texto_encrip', texto_encriptado);
    document.getElementById("resultado_enc").innerHTML = 'Mensaje encriptado: ' + texto_encriptado;
    return texto_encriptado;
}

function exportar(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("btn-exportar").addEventListener("click", function(){
    // var text = document.getElementById("text-val").value;
    let texto = encriptar();
    var filename = "archivo-encriptado.txt";
    
    exportar(filename, texto);
}, false);

function leerLlave(evt) {
    matrizLlave[0] = [];
    matrizLlave[1] = [];
    matrizLlave[2] = [];

    var f = evt.target.files[0]; 
    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
          var contents = e.target.result;
          //document.write("File Uploaded! <br />" + "name: " + f.name + "<br />" + "content: " + contents + "<br />" + "type: " + f.type + "<br />" + "size: " + f.size + " bytes <br />");
          console.log('Archivo subido \n Nombre: ' + f.name + '\n Contenido: ' + contents + '\n Tipo: ' + f.type + '\n Tamaño: ' + f.size + ' bytes \n ' );
          var lines = contents.split("\n"), output = [];
          let fila=0;
          console.log('lines', lines.length);
          for (var i=0; i<lines.length-1; i++){
            // contenido_encriptado = lines[i];
            let digitos = lines[i].split(',');
            console.log('digi ', digitos[0]+', '+digitos[1]+', '+digitos[2]);
            matrizLlave[fila][0] = parseInt(digitos[0]); matrizLlave[fila][1] = parseInt(digitos[1]); matrizLlave[fila][2] = parseInt(digitos[2]);
            fila++;
            // output.push("<tr><td>" + lines[i].split(",").join("</td><td>") + "</td></tr>");
            console.log('matrizLlave '+ fila, matrizLlave);
          }
          output = "<table>" + output.join("") + "</table>";
          //document.write(output);
        //   console.log('----');
        //   console.log(output);
        //   document.getElementById('msj_encrip').innerHTML = contenido_encriptado.replaceAll('|', '');
     }
      r.readAsText(f);
    //   document.write(output);
    //  console.warn(output);
    } else { 
      alert("Failed to load file");
    }
    document.getElementById("llaveinput").value = "";
  }

  document.getElementById('llaveinput').addEventListener('change', leerLlave);

function leerArchivo(evt) {
    var f = evt.target.files[0]; 
    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
          var contents = e.target.result;
          //document.write("File Uploaded! <br />" + "name: " + f.name + "<br />" + "content: " + contents + "<br />" + "type: " + f.type + "<br />" + "size: " + f.size + " bytes <br />");
          console.log('Archivo subido \n Nombre: ' + f.name + '\n Contenido: ' + contents + '\n Tipo: ' + f.type + '\n Tamaño: ' + f.size + ' bytes \n ' );
          var lines = contents.split("\n"), output = [];
          for (var i=0; i<lines.length; i++){
            contenido_encriptado = lines[i];
            output.push("<tr><td>" + lines[i].split(",").join("</td><td>") + "</td></tr>");
          }
          output = "<table>" + output.join("") + "</table>";
          //document.write(output);
          console.log('----');
          console.log(output);
          document.getElementById('msj_encrip').innerHTML = contenido_encriptado.replaceAll('|', '');
     }
      r.readAsText(f);
    //   document.write(output);
    //  console.warn(output);
    } else { 
      alert("Failed to load file");
    }
  }
  document.getElementById('fileinput').addEventListener('change', leerArchivo);

  function obtieneMatrizInversa() {
    // total=a00*a11*a22 + a10*a21*a02 +a20*a01*a12;
    // total=total+(a02*a11*a20)*-1 + (a12*a21*a00)*-1 + (a22*a01*a10)*-1;
   
    let total=matrizLlave[0][0]*matrizLlave[1][1]*matrizLlave[2][2] + matrizLlave[1][0]*matrizLlave[2][1]*matrizLlave[0][2] + matrizLlave[2][0]*matrizLlave[0][1]*matrizLlave[1][2];
    //console.error('*** total ***', total);
    total=total+(matrizLlave[0][2]*matrizLlave[1][1]*matrizLlave[2][0])*-1 + (matrizLlave[1][2]*matrizLlave[2][1]*matrizLlave[0][0])*-1 + (matrizLlave[2][2]*matrizLlave[0][1]*matrizLlave[1][0])*-1;
   console.log('=======')
   console.log(' TOTAL ', total)
   console.log('=======')

    if(total!=0){
    //  var t=$("#total");
        
    //    t.html((a11*a22-a21*a12)/total+"  ");
       matrizInversa[0][0] = ((matrizLlave[1][1]*matrizLlave[2][2]-matrizLlave[2][1]*matrizLlave[1][2])/total);
       console.error('erro', matrizInversa[0][0])
    //    t.html(t.html()+"  "+((a01*a22-a21*a02)*-1)/total);
       matrizInversa[0][1] = ((matrizLlave[0][1]*matrizLlave[2][2]-matrizLlave[2][1]*matrizLlave[0][2])*-1)/total;
    //    t.html(t.html()+"  "+(a01*a12-a11*a02)/total+"<br>"); 
       matrizInversa[0][2] = (matrizLlave[0][1]*matrizLlave[1][2]-matrizLlave[1][1]*matrizLlave[0][2])/total; 
    //    console.error('err',matrizInversa[0][2]);
    //    t.html(t.html()+"  "+((a10*a22-a20*a12)*-1)/total);
       matrizInversa[1][0] = ((matrizLlave[1][0]*matrizLlave[2][2]-matrizLlave[2][0]*matrizLlave[1][2])*-1)/total;
    //    t.html(t.html()+"  "+((a00*a22-a20*a02))/total);
       matrizInversa[1][1] = (matrizLlave[0][0]*matrizLlave[2][2]-matrizLlave[2][0]*matrizLlave[0][2])/total;
    //    t.html(t.html()+"  "+((a00*a12-a10*a02)*-1)/total+"<br>");
       matrizInversa[1][2] = ((matrizLlave[0][0]*matrizLlave[1][2]-matrizLlave[1][0]*matrizLlave[0][2])*-1)/total;
    // t.html(t.html()+"  "+((a10*a21-a20*a11))/total);
       matrizInversa[2][0] = (matrizLlave[1][0]*matrizLlave[2][1]-matrizLlave[2][0]*matrizLlave[1][1])/total;
    //    t.html(t.html()+"  "+((a00*a21-a20*a01)*-1)/total);
       matrizInversa[2][1] = ((matrizLlave[0][0]*matrizLlave[2][1]-matrizLlave[2][0]*matrizLlave[0][1])*-1)/total;
    //    t.html(t.html()+"  "+(a00*a11-a10*a01)/total);
       matrizInversa[2][2] = (matrizLlave[0][0]*matrizLlave[1][1]-matrizLlave[1][0]*matrizLlave[0][1])/total;
    console.log(' - - - - ');
    console.log('inversa', matrizInversa);
    
    }else{
        // var t=$("#total");
        //    t.html("Error el det da 0");}
        alert('ERROR: el determinante dio 0 ');
    }     
}
  
function desencriptar() {
    let str_des = "";
    obtieneMatrizInversa();
    let arreglo_enc = contenido_encriptado.replace('|','');
    arreglo_enc = arreglo_enc.split('|');
    // console.log('==>', arreglo_enc[0],arreglo_enc[1], arreglo_enc[2]);
    for (let i = 0; i <= arreglo_enc.length - 1; i++) {
        if (((i+1) % 3) == 0 ) {
            let val1 = arreglo_enc[i-2];
            let val2 = arreglo_enc[i-1];
            let val3 = arreglo_enc[i-0];
            console.log('<br/><spa>' + val1 + ' , '+ val2 + ' , ' + val3 + '</span>');
            let valdes1 = Math.round((val1 * matrizInversa[0][0]) + (val2 * matrizInversa[0][1]) + (val3 * matrizInversa[0][2]));
            let valdes2 = Math.round((val1 * matrizInversa[1][0]) + (val2 * matrizInversa[1][1]) + (val3 * matrizInversa[1][2]));
            let valdes3 = Math.round((val1 * matrizInversa[2][0]) + (val2 * matrizInversa[2][1]) + (val3 * matrizInversa[2][2]));
            let tmp = (val1 * matrizInversa[2][0]) + (val2 * matrizInversa[2][1]) + (val3 * matrizInversa[2][2]);
            console.log('real', tmp);
            console.error('ERR', valdes1, valdes2, valdes3);
            //document.write('<br/><b>' + valenc1 + ' , '+ valenc2 + ' , '+ valenc3 + '</b>');            
        //document.write('<hr/>');
            str_des = str_des + getLetter(valdes1) + getLetter(valdes2) + getLetter(valdes3);
        }
    }/**/

    document.getElementById('resultado_desenc').innerHTML = 'Mensaje desencriptado: ' + str_des ;
    
  }