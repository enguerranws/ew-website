import './index.scss';
export const getFaderElements = () => {
  return document.querySelectorAll('.fader');
}


export const faderFadeIn = ():void => {
  const faders = getFaderElements();
  let currentElementIndex = 0;
  let delay = 100;
  if(faders.length){
    setInterval(() => {
      if(faders[currentElementIndex]){
        faders[currentElementIndex].classList.add('fader--in');
        currentElementIndex++;
      }
      
    }, delay)
  }
  
}

export const initFaders = () => {
  faderFadeIn();
}