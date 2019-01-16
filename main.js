
const data = (STEAM.appnews.newsitems);
const containerRoot = document.getElementById("root");
const selectFeedlabel = document.getElementById("feedlabel-select");
//const data = (STEAM.appnews.newsistem)


//Mostrando la Data
const showData = (data) => {
    let result = '';
    //console.log(data)
    data.forEach(element => {
        //element --> DATA[i]
        //console.log(element.house);
       if (element.author === '' && element.feedlabel !== '') {
            result = containerRoot.innerHTML += `
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
            result = containerRoot.innerHTML += `
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
    return result;
   }

   //Filtrando
   selectFeedlabel.addEventListener('change', () => {
    let condition = selectFeedlabel.value
    let filtered = filterFeedlabel(data, condition);
    // limpio div
    containerRoot.innerHTML = '';
  
    filtered.forEach(element => {
        if (element.author === '' && element.feedlabel !== '') {
            result = containerRoot.innerHTML += `
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
            result = containerRoot.innerHTML += `
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
    })
  })


  //Ordenar

   window.onload = showData(data);

  

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