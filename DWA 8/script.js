
// imported data from data.js
//@ts check
import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';
import BookPreview from "../DWA 9/index.js";

//declared let variables and assigned them
let page = 1;
let matches = books
//preview class function
const preview = (author, id, image, title) => {
    const element = document.createElement('button')
    element.classList = 'preview'
    element.setAttribute('data-preview', id)
     // Set innerHTML for the button element
    element.innerHTML = `

        <img
            class="preview__image"
            src="${image}"
        />
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
        `;

        return element;
}
    
 // Append the button element to the starting document fragment

const fragment = document.createDocumentFragment();
/**
  * The code then creates book previews for the initial page.
  * Code to set class, attributes, and innerHTML for the button element
*/
//starting preview for the first 36 books
for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
// Create button element
   const previewButton = createBookPreview(author, id, image, title);
   fragment.appendChild(previewButton);
}
// Append the starting document fragment to the specified element in the HTML document
document.querySelector('[data-list-items]').appendChild(fragment)
/**
 * Generating Genre and Author Select Options
 */
const createOptions =(option, genreOrAuthor)=>{
const fragment= document.createDocumentFragment()
// Create the "All Genres" option
const firstElement = document.createElement('option')
      firstElement.value = 'any'
      firstElement.innerText = option
      fragment.appendChild(firstElement)
/**
 * Create option elements for each genre
 */
for (const [id, name] of Object.entries(genreOrAuthor)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    fragment.appendChild(element)
}
return fragment
}
//genre options
const genreOptions = createOptions("All Genres", genres)
document.querySelector('[data-search-genres]').appendChild(genreOptions)
const authorsHtml = createOptions("All Authors", authors)
document.querySelector('[data-search-authors]').appendChild(authorsHtml)
/**
 * Setting Theme based on User Preference
 */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Set theme to night mode
    document.querySelector('[data-settings-theme]').value = 'night'
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    // Set theme to day mode
} else {
    document.querySelector('[data-settings-theme]').value = 'day'
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}
/**
 * show more option
 * Updating UI Elements:
 */
    document.querySelector('[data-list-button]').innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
    document.querySelector('[data-list-button]').enabled = (matches.length - (page * BOOKS_PER_PAGE)) > 0
    document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`
/**
 * Adding Event Listeners:
 */
const handlesetting = ()=>{
    document.querySelector('[data-search-overlay]').toggleAttribute('open')
};
    document.querySelector('[data-header-search]').addEventListener('click', handlesetting)
    document.querySelector('[data-search-cancel]').addEventListener('click', handlesetting)
        html.search.title.focus()
    document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { theme } = Object.fromEntries(formData)
if (theme === 'night') {
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}
    document.querySelector('[data-settings-overlay]').open = false
})
    document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    const result = []
for (const book of books) {
    let genreMatch = filters.genre === 'any'
for (const singleGenre of book.genres) {
    if (genreMatch) break;
        if (singleGenre === filters.genre) { genreMatch = true }
}
if (
    (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
    (filters.author === 'any' || book.author === filters.author) &&
    genreMatch
) {
    result.push(book)
}
    }
page = 1;
matches = result
if (result.length < 1) {
    document.querySelector('[data-list-message]').classList.add('list__message_show')
} else {
    document.querySelector('[data-list-message]').classList.remove('list__message_show')
    }
    document.querySelector('[data-list-items]').innerHTML = ''
for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
  preview(
    author,
    id,
    image,
    title,
  )
}
    document.querySelector('[data-list-items]').appendChild(fragment)
    document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1
    document.querySelector('[data-list-button]').innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.querySelector('[data-search-overlay]').open = false
})
document.querySelector('[data-list-button]').addEventListener('click', () => {
    for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
        preview (
            author,
            id,
            image,
            title
        )
    }
    document.querySelector('[data-list-items]').appendChild(fragment)
    page += 1
})
document.querySelector('[data-list-items]').addEventListener('click', (event) => {
    const pathArray = Array.from(event.path || event.composedPath())
    let active = null
    for (const node of pathArray) {
        if (active) break
        if (node?.dataset?.preview) {
            let result = null
            for (const singleBook of books) {
                if (result) break;
                if (singleBook.id === node?.dataset?.preview) result = singleBook
            }
            active = result
        }
    }
    if (active) {
        document.querySelector('[data-list-active]').open = true
        document.querySelector('[data-list-blur]').src = active.image
        document.querySelector('[data-list-image]').src = active.image
        document.querySelector('[data-list-title]').innerText = active.title
        document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        document.querySelector('[data-list-description]').innerText = active.description
    }
})