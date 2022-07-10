var words = ['DEVELOPER', 'BACKEND'],
    wordWrapper = document.getElementById('word'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setTimeout(runEscribir,2500);    

function runEscribir(){
setInterval(escribir, 230);
};

function escribir(){  
  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }
  
  if(wordWrapperContent === "DEVELOPER") {
    detener();
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }
  
  if( counter == words.length) {
    counter = 0;
  }

};

function detener(){
clearInterval(changeWord, 0);
};