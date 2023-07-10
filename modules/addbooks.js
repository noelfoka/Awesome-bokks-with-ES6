const add = document.getElementById('add');

const addfunction = () => {
  let existingEntries = JSON.parse(localStorage.getItem('collection'));
  if (existingEntries == null) existingEntries = [];
  const entryTitle = document.getElementById('title').value;
  const entryOwner = document.getElementById('author').value;
  const book = {
    title: entryTitle,
    author: entryOwner,
  };
  localStorage.setItem('book', JSON.stringify(book));
  existingEntries.push(book);
  localStorage.setItem('collection', JSON.stringify(existingEntries));
  document.getElementById('form').reset();
};

add.addEventListener('click', addfunction);

export default addfunction;
