var totalTiradas = 0;
let array = [0,0,0,0,0,0,0];
var cont = 0

        do{ 
            for (let index = 0; index < 36000; index++) {
                dado1 = Math.floor(Math.random() * 6) + 1
                dado2 = Math.floor(Math.random() * 6) + 1
                cont++;                
            }
        
        }while (cont <= 36000){
                switch(dado1){
                case 1:
                    array[0]++;
                    break;
                case 2:
                    array[1]++;
                    break;
                case 3:
                    array[2]++;
                    break;
                case 4:
                    array[3]++;
                    break;
                case 5:
                    array[4]++;
                    break;
                case 6:
                    array[5]++;
                    break;
                }
            array[6] = cont;
                switch (dado2) {
                    case 1:
                        array[0]++;
                        break;
                    case 2:
                        array[1]++;
                        break;
                    case 3:
                        array[2]++;
                        break;
                    case 4:
                        array[3]++;
                        break;
                    case 5:
                        array[4]++;
                        break;
                    case 6:
                        array[5]++;
                        break;
                }
            array[6] = cont;    
        }
        
                
        document.write("El 1 ha salido " +  [0] + " veces<br>");
        document.write("El 2 ha salido " +  [1] + " veces<br>");
        document.write("El 3 ha salido " +  [2] + " veces<br>");
        document.write("El 4 ha salido " +  [3] + " veces<br>");
        document.write("El 5 ha salido " +  [4] + " veces<br>");
        document.write("El 6 ha salido " +  [5] + " veces<br>");
        document.write("--------------------------------------");
        document.write("Total de lanzamientos: " + [6] + (dado1+dado2));

 /*       // Inicializar array para contar las sumas
let sumasArray = new Array(11).fill(0); // Las sumas posibles van de 2 a 12

// Simular el lanzamiento de dos dados 36000 veces
for (let i = 0; i < 36000; i++) {
    // Lanzamiento de dos dados
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    // Calcular la suma de los dados
    let suma = dado1 + dado2;

    // Contar las apariciones de la suma
    sumasArray[suma - 2]++; // Restamos 2 ya que las sumas posibles van de 2 a 12
}

// Imprimir los resultados
for (let i = 2; i <= 12; i++) {
    console.log(`La suma ${i} ha aparecido ${sumasArray[i - 2]} veces.`);
}*/

        
