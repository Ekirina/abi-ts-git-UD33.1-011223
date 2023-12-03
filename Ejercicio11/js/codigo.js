var totalTiradas = 0;
let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var cont = 0;

do {
  dado1 = Math.random() * (6 - 1) + 1;
  dado2 = Math.random() * (6 - 1) + 1;
  
  suma = dado1+dado2;
  cont++;
  switch (suma) {
    case 2:
      array[0]++;
      break;
    case 3:
      array[1]++;
      break;
    case 4:
      array[2]++;
      break;
    case 5:
      array[3]++;
      break;
    case 6:
      array[4]++;
      break;
    case 7:
      array[5]++;
      break;
    case 8:
      array[6]++;
      break;
    case 9:
      array[7]++;
      break;
    case 10:
      array[8]++;
      break;
    case 11:
      array[9]++;
      break;
    case 12:
      array[10]++;
      break; 
  }
} while (cont <= 36000);

document.write("El 2 ha salido " + [0] + " veces<br>");
document.write("El 3 ha salido " + [1] + " veces<br>");
document.write("El 4 ha salido " + [2] + " veces<br>");
document.write("El 5 ha salido " + [3] + " veces<br>");
document.write("El 6 ha salido " + [4] + " veces<br>");
document.write("El 7 ha salido " + [5] + " veces<br>");
document.write("El 8 ha salido " + [0] + " veces<br>");
document.write("El 9 ha salido " + [1] + " veces<br>");
document.write("El 10 ha salido " + [2] + " veces<br>");
document.write("El 11 ha salido " + [3] + " veces<br>");
document.write("El 12 ha salido " + [4] + " veces<br>");

