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

function getLetterValueNumber(letter) {
    for (let k in abc) {
    	if (abc.hasOwnProperty(k) && k === letter){
            return abc[k]
        }
    }
}

let posiciones = new Array(10);
let posicion = 0;
function getFirstLetter(palabra_clave) {
    let f;
    let wk = palabra_clave;
    let c = 0;
    while(c < 8) {
        c++;
        posicion = 0;
    for(i=0; i<wk.length; i++){
        if (i === 0) {
            f = getLetterValueNumber(wk[i]);
        } else {
            if (f > getLetterValueNumber(wk[i])) {
                f = getLetterValueNumber(wk[i]);
                posicion = i;
            }
        }
    }
    posiciones[c] = f;
    console.log('posiciones', posiciones);
    // console.log('arreglo_pos', posiciones.sort());

    wk = wk.slice(0,posicion) +' '+ wk.slice(posicion+1, wk.length);
    console.log(wk)
    }
    // console.log('sort', posiciones.sort());
}

function encriptar() {
    // matriz = new Array();
    array_encrip = new Array();
    let palabra_clave = "CLASE";
    palabra_clave = document.getElementById("llaveinput").value.toUpperCase();
    palabra_clave = palabra_clave.replace(/ /g, '');
    getFirstLetter(palabra_clave);
    let texto = "SEGURIDADYAUDITORIADESISTEMAS";
    // palabra_clave = "SISTEMA";
    // texto = "UNIVERSIDADMARIANOGALVEZ";
    // palabra_clave = "MARIANO";
    // texto = "INGENIERIAENSISTEMAS";
    // palabra_clave = "CLASE";
    // texto = "SEGURIDADYAUDITORIADESISTEMAS";
    texto = document.getElementById("entrada").value.toUpperCase();
    texto = texto.replace(/ /g, '');
    let filas = texto.length/palabra_clave.length;
    if (!(filas === parseInt(filas, 10))) {
        filas = Math.trunc(filas)+1;
    } 
    console.error(texto.length/palabra_clave.length)
    console.log(filas);
    matriz = new Array(filas)
    for(i=0; i<filas;i++) {
        matriz[i] = new Array(palabra_clave.length);
    }
    let ip = 0;
    for(i=0; i<filas; i++) {
        for(j=0; j<palabra_clave.length; j++) {
            if (texto[ip] !== undefined)
            matriz[i][j] = texto[ip];
            ip++;
        }
    }
    console.log(matriz);
    console.log('trans')
    let encriptado = "";
    let posidx = 0;
    /* Hago transposición de la matriz */
    for (j=0; j<palabra_clave.length; j++) {
        console.log(palabra_clave[j])
        for(i=0; i<filas;i++) {
            console.log('matriz ['+i+']['+j+']'+ matriz[i][j]);
            if (((i+1) % filas) === 0) {
                // encriptado = matriz[i-2][j] + matriz[i-1][j] + matriz[i][j] + ' ';
                for(k=0; k<filas; k++){
                    if(matriz[k][j] !== undefined) {
                        encriptado = encriptado + matriz[k][j];
                    }
                }
                console.log('encriptado', encriptado);
                console.log('idx', posiciones.indexOf(getLetterValueNumber(palabra_clave[j])));
                posidx = posiciones.indexOf(getLetterValueNumber(palabra_clave[j]));
                array_encrip[posidx] = encriptado;
                posiciones[posidx] = 0;
                encriptado = "";
            }
        }
    }
    console.log('array_encrip', array_encrip);
    let texto_encriptado = "";
    for (i=1; i<array_encrip.length;i++) {
        texto_encriptado = texto_encriptado + ' ' + array_encrip[i];
    }

    console.log('texto_encriptado', texto_encriptado);
    document.getElementById("resultado_enc").innerHTML = 'Mensaje encritpado: ' + texto_encriptado;
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

document.getElementById("btn-exportar-cajas").addEventListener("click", function(){
    // var text = document.getElementById("text-val").value;
    let texto = encriptar();
    var filename = "archivo-encriptado-cajas.txt";
    
    exportar(filename, texto);
}, false);

