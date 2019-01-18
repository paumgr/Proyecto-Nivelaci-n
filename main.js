


const data = (window.STEAM.appnews.newsitems);
const containerRoot = document.getElementById("root");
const selectFeedlabel = document.getElementById("feedlabel-select");
const orderData = document.getElementById("orderdata")
//const data = (STEAM.appnews.newsistem)

//Mostrando la Data
const showData = (data) => {
    let result = '';
    //console.log(data)
    cardSteam(data);
    return result;
}
        
  
   //Filtrando
    selectFeedlabel.addEventListener('change', () => {
    let condition = selectFeedlabel.value
    let filtered = window.filterFeedlabel(data, condition);
    //limpiando mi div
    containerRoot.innerHTML = '';
    cardSteam(filtered);
    })

    //Ordenando


  //Función para todas las tarjetas
  function cardSteam(dataSteam){
    // limpio div
    containerRoot.innerHTML = '';
    dataSteam.forEach(element => {
      if (element.author === '' && element.feedlabel !== '') {
          containerRoot.innerHTML += `
          <div>
            <div class="card">
              <div class="box">
                <div class="ahref">
                    <a href="${element.url}">
                </div>
                <h2>${element.title}<br><span>Autor: Desconocido</span></h2>
                <p>FeedLabel: ${element.feedlabel}</p>
              </div>
            </div>
          </div>`
        } else {
          containerRoot.innerHTML += `
          <div>
            <div class="card">
              <div class="box">
                <div class="img">
                    <img src="${element.url}">
                </div>
                <h2>${element.title}<br><span>${element.author}</span></h2>
                <p>FeedLabel: ${element.feedlabel}</p>
              </div>
            </div>
          </div>` 
        }
      });
 }

  window.onload = showData(data);
 

  //Ordenar

  

  

  

  /* result = containerRoot.innerHTML += `
            <div class="card">
              <div class="box">
                <div class="img">
                    <img src="${element.url}">
                </div>
                <h2>${element.title}<br><span>${element.author}</span></h2>
                <p>${element.feedlabel}</p>
              </div>
            </div>`
        
    });*/