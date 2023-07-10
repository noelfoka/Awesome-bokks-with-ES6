import { DateTime } from './modules/luxon.js';
import Book from './modules/book.js';
import Storage from './modules/storage.js';

const form = document.querySelector('.form-input');

class DisplayPage {
  addingBooks = () => {
    const storage = new Storage();
    const books = storage.getBooks();
    books.forEach((book) => {
      this.newBook(book);
    });
  };

  /* creating a new Book */
  newBook = (book) => {
    const booksCatalogue = document.querySelector('.lib-catalogue');
    const bookCatalogue = document.createElement('div');
    bookCatalogue.className = 'single-book';
    const authorSection = document.createElement('div');
    authorSection.className = 'author-name';
    const span = document.createElement('span');
    span.textContent = 'by';
    const bookTitle = document.createElement('h6');
    bookTitle.className = 'title';
    const bookAuthor = document.createElement('h6');
    bookAuthor.className = 'author';
    const buttonRemove = document.createElement('button');
    buttonRemove.className = 'btn-remove';
    buttonRemove.textContent = 'Remove';
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    authorSection.append(bookTitle, span, bookAuthor);
    bookCatalogue.append(authorSection, buttonRemove);
    booksCatalogue.appendChild(bookCatalogue);
  };

  saveBook = (book) => {
    this.newBook(book);
  };

  deleteBook = (button) => {
    const divTag = button.parentNode;
    divTag.remove();
  };

  clearForm = () => {
    form.elements.title.value = '';
    form.elements.author.value = '';
  };
}

/* displaying the UI */
const displayContent = new DisplayPage();
const storage = new Storage();

const saveInfo = document.querySelector('.form-container');
const contactInfo = document.querySelector('.contact');
const displayInfo = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {
  displayContent.addingBooks();
  contactInfo.style.display = 'none';
  saveInfo.style.display = 'none';
});

/* Adding a Book */
const addButton = document.querySelector('#add-btn');
addButton.addEventListener('click', () => {
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const newBook = new Book(title, author);

  displayContent.saveBook(newBook);
  storage.saveBook(newBook);
  displayContent.clearForm();
});

/* removing a book */

document.addEventListener('click', (e) => {
  const button = e.target;
  if (button.className === 'btn-remove') {
    displayContent.deleteBook(button);
    storage.deleteBook(button);
  } else if (button.parentNode.id === 'list') {
    displayInfo.style.display = 'flex';
    contactInfo.style.display = 'none';
    saveInfo.style.display = 'none';
  } else if (button.parentNode.id === 'add') {
    saveInfo.style.display = 'flex';
    contactInfo.style.display = 'none';
    displayInfo.style.display = 'none';
  } else if (button.parentNode.id === 'contact') {
    saveInfo.style.display = 'none';
    contactInfo.style.display = 'flex';
    displayInfo.style.display = 'none';
  }
});

// Displaying current date and Time using Luxon
const dateTime = document.querySelector('#date-time');
const currentTime = () => {
  const currentDateTime = DateTime.now().toLocaleString(
    DateTime.DATETIME_FULL_WITH_SECONDS,
  );
  dateTime.innerHTML = currentDateTime;
};
setInterval(currentTime, 500);
