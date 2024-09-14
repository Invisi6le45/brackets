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
          close.push(`${bracketsConfig[i][j]}`);
        }
      }
    }
    console.log (`Массив открытых скобок = ${open}`)
    console.log (`Массив закрытых скобок = ${close}`);
  }
 
  openClosed(bracketsConfig);

    
  for (let z = 0; z <= str.length - 1; z++) {
    if ( open.includes(str[z])) {
      item = `${str[z]}`;
      rezult.push(item);
    } else {
      if ( close.includes(str[z]) && rezult.length !== 0) {
        rezult.pop()
      } else {
        rezultName = false;
      }
    }
  }
  


  console.log (`Выходной массив = ${rezult}`);

  if (rezult.length === 0 || rezult.length % 2 === 0) {
    rezultName = true;
  } else {
    rezultName = false;
  }

 return rezultName;
}




