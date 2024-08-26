document.addEventListener("DOMContentLoaded", function() {
  var words = ['DEVELOPER', 'BACKEND'],
      wordWrapper = document.getElementById('word'),
      wordWrapperContent = '',
      addingWord = false,
      counter = 0;

  // setTimeout(runEscribir,2500);    

  // function runEscribir(){
  // setInterval(escribir, 230);
  // };
  //
  var changeWord = setInterval(escribir, 230);

  function escribir(){ 

     // while(!wordWrapperContent === "DEVELOPER"){
     //   escribir();
     // }
     
     if(wordWrapperContent.length > 0 && !addingWord ) {
          wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
          wordWrapperContent = wordWrapper.innerHTML;
      } else {
          addingWord = true;
      }

      if( addingWord ){
          if( wordWrapperContent.length < words[counter].length ) {
              wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
              wordWrapperContent = wordWrapper.innerHTML;
          } else {
              addingWord = false;
              counter++;
          }
      }
      
      if( counter == words.length) {
          counter = 0;
      }
  };

  function detener(){
      clearInterval(changeWord);
  }
});