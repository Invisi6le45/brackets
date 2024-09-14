module.exports = function check(str, bracketsConfig) {
  console.log (`Входящий массив равен ${str}`);
  
  console.log (`Массив скобок равен ${bracketsConfig}`);
  /* console.log (`Длина входящего массива скобок ${bracketsConfig[0].length}`); */


  const rezult = [];
  let item = '';
  let open = [];
  let close = [];
  let rezultName = true;

 /*  console.log (`Исходящий массив равен ${typeof(rezult)}`); */




  function openClosed (bracketsConfig) {


    for (let i = 0; i <= bracketsConfig.length - 1; i++) {
      for (let j = 0; j <= bracketsConfig[i].length - 1; j++) {
        if ( j === 0) {
          open.push(`${bracketsConfig[i][j]}`);
        } else {
          close[bracketsConfig[i][j]] = open[open.length - 1];
        } 
      }
    }
    for ( key in close) {
      console.log (`Элемент ${key} = ${close[key]}`);
    }
    console.log (`Массив открытых скобок = ${open}`);
   }
 
  openClosed(bracketsConfig);

    
  for (let z = 0; z <= str.length - 1; z++) {


    if (str[z] !== rezult[rezult.length - 1]) {
      if (open.includes(str[z])) {
        item = `${str[z]}`;
        rezult.push(item);
      } else {
          if (rezult.length === 0) {
            rezultName = false;
            console.log (`Выходной массив = ${rezult}`);
            console.log (rezultName); 
           return rezultName;
          }
      
          let endElement = rezult[rezult.length - 1];
  
          console.log (`Текущий элемент - ${close[str[z]]}`);
          console.log (`Его пара в массиве - ${close[str[z]]}`);
          console.log (`"Элеммент для сравнения - ${endElement}`);
  
  
  
          if (endElement === close[str[z]]) {
              rezult.pop();
  
            } else {
              rezultName = false;
              console.log (`Выходной массив = ${rezult}`);
              console.log (rezultName); 
               return rezultName;
              }  
        }





    } else {
      return rezultName = true;
    }











    
    
  }
        


  console.log (`Выходной массив = ${rezult}`);

  

  if (rezult.length === 0) {
    rezultName = true;
  } else {
    rezultName = false;
  }


 console.log (rezultName); 
 return rezultName;
}




