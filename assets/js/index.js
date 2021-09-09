const request = obj => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true)
  xhr.send()
  xhr.addEventListener('load', ()=>{
      if(xhr.status >= 200 && xhr.status<300){
        obj.succes(xhr.responseText);
      }else{
        obj.error(xhr.statusText)
      }
  })
}
document.addEventListener('click', e =>{
  const el = e.target;

  const tag = el.tagName.toLowerCase()

  if(tag === 'a'){
    e.preventDefault();
    carregaPagina(el)
  }
})

function carregaPagina(el){
  const href = el.getAttribute('href')
  console.log(href)

  request({
    method: 'GET',
    url: href,
    succes(response){
      loadResultado(response)
    },
    error(errorText){
      console.log(errorText)
    }
  })
}

function loadResultado(response){
const resultado = document.querySelector(".resultado")
resultado.innerHTML = response
}