export default class Storage {
  getBooks = () => {
    let books;
    if (localStorage.getItem('booksKeeper') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('booksKeeper'));
    }
    return books;
  };

  saveBook = (book) => {
    const books = this.getBooks();

    books.push(book);
    localStorage.setItem('booksKeeper', JSON.stringify(books));
  };

  deleteBook = (button) => {
    const books = this.getBooks();
    const divTag = button.parentNode;
    const myTitle = divTag.querySelector('.title').textContent;
    const myAuthor = divTag.querySelector('.author').textContent;
    const remainBooks = books.filter(
      (book) => book.title !== myTitle && book.author !== myAuthor,
    );
    localStorage.setItem('booksKeeper', JSON.stringify(remainBooks));
  };
}
