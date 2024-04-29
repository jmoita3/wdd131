const year = () => {
    const yearElement = document.querySelector("#currentYear");
    const lastModifiedElement = document.querySelector("#lastModified");
    let oLastModif = new Date(document.lastModified);
    let currentDate = new Date();
    const year = currentDate.getFullYear();

    const modifiedDate = oLastModif.getDate();
    const modifiedMonth = oLastModif.getMonth();
    const modifiedYear = oLastModif.getFullYear();
    const modifiedHours = oLastModif.getHours();
    const modifiedMinutes = oLastModif.getMinutes();


    yearElement.innerHTML = '©' + ' ' +  year + ' ' + 'Joao Moita';
    lastModifiedElement.innerHTML = 'Last modified:' + ' ' + modifiedDate + '/' + modifiedMonth + '/' + modifiedYear + ' ' + modifiedHours + ':' + modifiedMinutes







  };
  year();


