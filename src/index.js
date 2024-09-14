module.exports = function check(str, bracketsConfig) {
  console.log (`Входящий массив равен ${str}`);
  
/*   console.log (`Массив скобок равен ${bracketsConfig}`);
  console.log (`Длина входящего массива скобок ${bracketsConfig[0].length}`); */


  const rezult = [];
  let item = '';
  let open = '';
  let close = '';
  let rezultName = true;

 /*  console.log (`Исходящий массив равен ${typeof(rezult)}`); */




  function openClosed (bracketsConfig, group) {
    for (let j = 0; j <= bracketsConfig[group].length - 1; j++) {
      if ( j === 0) {
        open = bracketsConfig[group][j]; 
      } else {
        close = bracketsConfig[group][j];
      }
    }
    

    console.log (`Открытая скобка = ${open}`)
    console.log (`Закрытая скобка = ${close}`);
    
  }
 
  
  for (let i = 0; i <= bracketsConfig.length - 1; i++) {
    
    openClosed(bracketsConfig, i);
    for (let z = 0; z <= str.length - 1; z++) {
      if (str[z] === open) {
        item = `${str[z]}`;
        rezult.push(item);
      } else {
        if (str[z] === close && rezult.length !== 0) {
          rezult.pop()
        } else {
          rezultName = false;
        }
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




