
const data = STEAM.appnews.newsitems;
const containerRoot = document.getElementById("root");
const selectTitle = document.getElementById("title");
//const data = (STEAM.appnews.newsistem)


//Mostrando la Data
const showData = (data) => {
    let result = '';
    //console.log(STEAM)
    data.forEach(element => {
        //element --> DATA[i]
        //console.log(element.house);
        if (element.author === '' && element.feedlabel !== '') {
            result = containerRoot.innerHTML += `
            <div>
              <div class="card">
                <div class="box">
                  <div class="img">
                      <img src="${element.url}">
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