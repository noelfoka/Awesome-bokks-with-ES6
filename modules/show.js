const Data = JSON.parse(localStorage.getItem('collection'));
if (Data) {
  const container = document.getElementById('container');
  for (let i = 0; i < Data.length; i += 1) {
    const div = document.createElement('div');
    div.className = 'book';
    div.id = i;
    container.appendChild(div);

    const div1 = document.createElement('div');
    div.appendChild(div1);
    div1.className = 'div1';

    const h2 = document.createElement('h3');
    h2.textContent = `"${Data[i].title}" by`;
    div1.appendChild(h2);

    const h3 = document.createElement('h3');
    h3.textContent = Data[i].author;
    div1.appendChild(h3);

    const div2 = document.createElement('div');
    div.appendChild(div2);
    div2.className = 'div2';

    const remove = document.createElement('button');
    remove.id = i;
    remove.innerHTML = 'Remove';
    div2.appendChild(remove);

    const list = document.querySelector('.addBook');
    list.before(container);
  }
}

export default Data;
