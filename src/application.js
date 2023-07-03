import 'whatwg-fetch';

const HOST = 'https://web-js-dom-ajax-5754779.evaluator2-5.hexlet.io';

function getSearchURL (url, path, searchValue) {
  const searchUrl = new URL(path, url);
  searchUrl.searchParams.append('search', searchValue);
  return searchUrl;
}

async function getCountryData(url){
  const response = await fetch(url);
  return response.json();
}

function renderListItems(parentEl, data) {
  parentEl.innerHTML = '';
  
  if (data.length > 0) {
    data.forEach((dataItem) => {
      const listItem = document.createElement('li');
      listItem.textContent = dataItem;
      parentEl.append(listItem);
    });
  } else {
    const listItem = document.createElement('li');
    listItem.textContent = 'Nothing';
    parentEl.append(listItem);
  }
}

function renderError(parentEl, err) {
  const listItem = document.createElement('li');
  listItem.textContent = `${err.message}`;
  parentEl.innerHTML = '';
  parentEl.append(listItem);
} 


export default () => {
  const forms = [...document.querySelectorAll('.form-inline')];
  
  async function handleInput(e) {
    e.preventDefault();
    
    const clickedEl = e.target;
    
    if (!clickedEl.matches('input')) return;

    
    const inputValue = clickedEl.value;
    const inputName = clickedEl.dataset.autocompleteName;
    
    const urlName = HOST ? HOST : window.location.origin;
    const pathName = clickedEl.dataset.autocomplete;
    const searchUrl = getSearchURL(urlName, pathName, inputValue);

    const listEl = document.querySelector(`ul[data-autocomplete-name="${inputName}"]`);
    
    try {
      const data = await getCountryData(searchUrl);
      renderListItems(listEl, data);
    } catch (err) {
      renderError(listEl, err);
    }
  }
  
  forms.forEach((form) => {
    form.addEventListener('input', handleInput);
  })
};
