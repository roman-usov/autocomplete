The function in this mini-project implements the autocomplete capability.

The input elements on the page use the `data-autocomplete` and the `data-autocomplete-name` data attributes that are used in the implementation.

The `data-autocomplete` data attribute has a link to the resource providing data. 

The `data-autocomplete-name` has the name that can help identify the `ul` list to be used to display data.

## src/application.js

When an input changes (characters are input or deleted), the function sends a request to the server with the `search` query parameter whose value is equal to the input value. The server returns an array of countries. 

If the array is not empty, the function fills in the list with the supplied data. 

```html
<ul data-autocomplete-name="country">
  <li>pakistan</li>
  <li>panama</li>
  <li>paraguay</li>
</ul>
```
If the server returns an empty array, the list shows
```html
<ul data-autocomplete-name="country">
  <li>Nothing</li>
</ul>
```
* [URL](https://nodejs.org/api/url.html#url_url_strings_and_url_objects) is used to create a request to the server.
* The current host is extracted using `window.location.origin`.
* The current input value is extracted using e.target.value.
* The function uses `async/await`.
* The function works with multiple inputs with autocompletes on a page.
* The `input` event is used tha handle input.
