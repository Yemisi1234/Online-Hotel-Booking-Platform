function sortCsvColumns (csv_data) {

  let st = []
   if(typeof st === 'object'){
       console.log('cool');
   }
  console.log(typeof st)



    let csvStr = csv_data.split(",");
    console.log(csvStr)
     let arrStr = [];
     let singArr = [];
     let thirdArr = [];
    for(let elem = 0; elem<csvStr.length; elem++){
        let checkword = csvStr[elem];

        if(checkword.includes('\n')){
          for(let value = 0; value<checkword.length; value++){
              console.log(checkword[value])
              singArr.push(checkword[value]);

              if(checkword[value]==='\n'){
                  console.log(checkword)
                  let endWord = checkword.split("\n");
                  console.log(endWord);
                   thirdArr[0]= endWord[0];
                   thirdArr[1]="column";
                   thirdArr[2]= endWord[1];
                   console.log(thirdArr[2])
                  arrStr.push(thirdArr[0]);
                  arrStr.push(thirdArr[1]);
                  arrStr.push(thirdArr[2]);
                  break;
                 //csvStr[elem]= thirdArr[0] + " ," + thirdArr[1] + thirdArr[2] ;
              }
              
          }
        }else{

    arrStr.push(csvStr[elem]);
        }
    }
   // console.log(singArr)
    console.log(arrStr)

     let  finalArr = [];
     let finalArr2 = [];
   
     for(let item=0,j=0; j<arrStr.length; item++,j++){
         finalArr[item]=[];
        if(arrStr[j]==='column'){

            //finalArr[item].push([arrStr[item]]);
            item=-1;

        }else{
            
      finalArr[item].push([arrStr[j]]);
      finalArr2.push(finalArr[item]);
      console.log(finalArr2)
        }
     }

     console.log(finalArr2);

//  let  finalArr = []
//  let multiple2 = [];
//     for (let item = 0,j=0; j<arrStr.length; item++, j++){
//     let multArr = [];
      
//          if(typeof arrStr[item]==='object'){
//              console.log(typeof arrStr[item])
//              console.log(arrStr[item])

//              multArr.push()
//            item =0;
//          }

        
         
//      multArr.push([arrStr[item]]);
//      console.log(multArr)
//      finalArr.push([arrStr[item]])
//     }
//     console.log(finalArr)

    console.log(csv_data);
    return csv_data;

}

//console.log(sortCsvColumns("Beth,Charles,Danielle,Adam,Eric,\\n, 17945,10091,10088,3907,10132,\\n,2,12,13,48,11"));

console.log(sortCsvColumns("Beth,Charles,Danielle,Adam,Eric\n 17945,10091,10088,3907,10132\n 2,12,13,48,11"));
