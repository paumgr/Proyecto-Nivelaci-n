


let data = (window.STEAM.appnews.newsitems);
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
    
    /*document.getElementById('az').addEventListener('click', (evento) => {
      evento.preventDefault();
      data = window.orderData(data, 'az');
      cardSteam(orderData);
    });
    document.getElementById('za').addEventListener('click', (evento) => {
      evento.preventDefault();
      data = window.orderData(data, 'za');
      cardSteam(orderData);
    });*/

    /*const orderCards = document.getElementById("steamOrder");
    //const orderCards = document.getElementById('steamOrder');
    orderCards.addEventListener('change', () => {
        let condition =  orderCards.options[orderCards.selectedIndex].value;
        steamOrder(data,condition);
        cardSteam(data);
    });*/


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
 

 