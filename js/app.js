/*const formulario =document.querySelector('#formulario');
const listatweets= document.querySelector('#lista-tweets');
const imagenees= document.querySelector('#imagenees');
let tweets=[];
const imagenes=document.querySelector('#imagen')
let imagen=[]
//aqui vpoy a crear los listeners

EventListeners();
function EventListeners(){
formulario. addEventListener('submit', agregarTweet);
formulario. addEventListener('submit', agregarimg);

//cuando el documento ya esta listo y es para que cuando se recarge no se borre de la pantalla
document.addEventListener('DOMContentLoaded', ()=>{
    tweets=JSON.parse(localStorage.getItem('tweets')) || []
    console.log(tweets)
    crearHTML()
})
document.addEventListener('DOMContentLoaded', ()=>{
    imagen=JSON.parse(localStorage.getItem('imagen')) || []
    console.log(tweets)
    crearHTML()
})
}



//aqui voy acrear las funciones
function agregarimg(o){
    o.preventDefault()
    const img =document.querySelector('#img').value
    imagen=[...imagen,tweetobjo]
    if (img===''){
        /*console.log('no puede ir vacio')
        mostrarerror('la imagen no puede ir vacia')
        return;//este lo pone para que cuando el este vacion no mande el arreglo
    
    }
    const tweetobjo ={//genera un objeto con date.nwe se mira los milisegundo con un id
        id:Date.now(),
        img:img
    }
    imagen=[... imagen,tweetobjo];//aqui se hace una copia y se agrega los valores que estan en texareas
    crearhtml()
    formulario.reset()
}


function agregarTweet(e){
 e.preventDefault();

const tweet = document.querySelector('#tweet').value  
console.log(tweet)

if (tweet===''){
    /*console.log('no puede ir vacio')
    mostrarerror('el mensaje no puede ir vacio')
    return;//este lo pone para que cuando el este vacion no mande el arreglo

}
const tweetobj ={//genera un objeto con date.nwe se mira los milisegundo con un id
    id:Date.now(),
    tweet:tweet
}
tweets=[... tweets,tweetobj];//aqui se hace una copia y se agrega los valores que estan en texareas


crearHTML();
formulario.reset();

/*tweets=[... tweets,tweet];//aqui se hace una copia y se agrega los valores que estan en texareas
console.log(tweets)
}


function mostrarerror(error){
    const mensajeerror= document.createElement('p');
    mensajeerror.textContent=error;
    mensajeerror.classList.add('error');
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeerror);//aqui adiciona a contenido un hijo que es el que tiene el mensaje error
    setTimeout(()=>{//aqui se va el mensaje en tres segundos
        mensajeerror.remove();    },   3000);
}

function crearhtml(){
    limpiarHTML();//este sirve para que muestre solo el que va escribiendo y no los repitsa
    //se valida el html que se ejecute muentras no este vacio el arreglo
    if (imagen.length>0){
        imagen.forEach((img)=>{// aqui tiene un iterador que recorre el arreglo para mostrar en lista
            const lu= document.createElement('li')
            const img = document.createElement('img')
            img.src=img.img
            lu.appendChild(img)
            imagenees.appendChild(lu)
        })
    }
}







function crearHTML(){
    limpiarHTML();//este sirve para que muestre solo el que va escribiendo y no los repitsa
    //se valida el html que se ejecute muentras no este vacio el arreglo
    if (tweets.length>0){
        tweets.forEach((tweet)=>{// aqui tiene un iterador que recorre el arreglo para mostrar en lista
             //aqui se crea el html para los tweets
             const botonborrar = document.createElement('a');
             botonborrar.classList='borrar-tweet'
             botonborrar.innerText='eliminar'
             botonborrar.onclick= ()=>{
                borrartweet(tweet.id)
            }
         
            const li = document.createElement('li')
                //añadimos el texto
            li.textContent = tweet.tweet;
              //inserta en el html
            listatweets.appendChild(li)
            li.appendChild(botonborrar);
            
        })
    }
    agregarStorage();//es para que cuando se recarge pagina quede ahi y no se borre de localstorage
}

function agregarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets))
}
function borrartweet(id){//
    tweets=tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

function limpiarHTML(){
    while(listatweets.firstChild){
        listatweets.removeChild(listatweets.firstChild)
    }
}

  

  ;*/
  const formulario = document.querySelector('#formulario');
  const listatweets = document.querySelector('#lista-tweets');
  const imagenees = document.querySelector('#imagenees');
  let tweets = [];
  let imagen = [];
  
  EventListeners();
  
  function EventListeners() {
      formulario.addEventListener('submit', (e) => {
          e.preventDefault();
          agregarTweet();
          console.log(tweets)
      });
  }
  document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    console.log(tweets);
    imagen = JSON.parse(localStorage.getItem('imagen')) || [];
    console.log(imagen);
    crearHTML();
})
  function agregarTweet() {
      const tweet = document.querySelector('#tweet').value;
      const imgInput = document.querySelector('#imagen');
      const imgFile = imgInput.files[0];
  
      const imgUrl = imgFile ? URL.createObjectURL(imgFile) : '';
  
      if (tweet === '' && !imgUrl) {
          mostrarerror('Debe ingresar un texto y/o seleccionar una imagen.');
          return;
      }
  
      const tweetobj = {
          id: Date.now(),
          tweet: tweet,
          img: imgUrl,
          liked: false 
      };
  
      tweets = [...tweets, tweetobj];
      crearHTML();
      formulario.reset();
  }
  
  function mostrarerror(error) {
      const mensajeerror = document.createElement('p');
      mensajeerror.textContent = error;
      mensajeerror.classList.add('error');
      const contenido = document.querySelector('#contenido');
      contenido.appendChild(mensajeerror);
      setTimeout(() => {
          mensajeerror.remove();
      }, 3000);
  }
  
  function crearHTML() {
      limpiarHTML();
  
      if (tweets.length > 0) {
          tweets.forEach((tweet) => {
              const botonborrar = document.createElement('a');
              botonborrar.classList = 'borrar-tweet';
              botonborrar.innerText = 'x';
              botonborrar.onclick = () => {
                  borrartweet(tweet.id);
              };
  
              const botonlike = document.createElement('a');
              botonlike.classList = 'like-tweet';
              botonlike.innerText = '\u2661'; 
              if (tweet.liked) {
                  botonlike.classList.add('liked');  
              }
              const contadorLikes = document.createElement('span');
              contadorLikes.classList = 'contador-likes';
              contadorLikes.textContent = tweet.likes || 'contador likes 0';
  
              botonlike.onclick = () => {
                  likeTweet(tweet.id);
              };
              
  
              const li = document.createElement('li');
              if (tweet.img !== '') {
                  const imgElement = document.createElement('img');
                  imgElement.src = tweet.img;
                  imgElement.style.width = '70%';
                  li.appendChild(imgElement);
              }
              if (tweet.tweet !== '') {
                  const tweetElement = document.createElement('p');
                  tweetElement.textContent = tweet.tweet;
                  li.appendChild(tweetElement);
              }
              li.appendChild(botonborrar);
              li.appendChild(contadorLikes);
              li.appendChild(botonlike);
              listatweets.appendChild(li);
          });
      }
  
      agregarStorage();
  }
  
  function likeTweet(id) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (tweet) {
          tweet.liked = !tweet.liked;
          tweet.likes = tweet.liked ? (tweet.likes || 0) + 1 : (tweet.likes || 0);
          crearHTML();
      }
  }
  
  function agregarStorage() {
      localStorage.setItem('tweets', JSON.stringify(tweets));
      localStorage.setItem('imagen', JSON.stringify(imagen));
  }
  
  function borrartweet(id) {
      tweets = tweets.filter((tweet) => tweet.id !== id);
      crearHTML();
  }
  
  function limpiarHTML() {
      while (listatweets.firstChild) {
          listatweets.removeChild(listatweets.firstChild);
      }
  
      while (imagenees.firstChild) {
          imagenees.removeChild(imagenees.firstChild);
      }
  }
  

  