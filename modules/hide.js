const hide = document.getElementById('list');

hide.addEventListener('click', () => {
  document.getElementById('container-list').style.display = 'block';
  document.getElementById('container').style.display = 'block';
  document.getElementById('addbook').style.display = 'none';
  document.getElementById('contact-container').style.display = 'none';
  window.location.reload();
});

window.addEventListener('load', () => {
  document.getElementById('addbook').style.display = 'none';
  document.getElementById('contact-container').style.display = 'none';
});

const hide1 = document.getElementById('new');
hide1.addEventListener('click', () => {
  document.getElementById('addbook').style.display = 'flex';
  document.getElementById('container-list').style.display = 'none';
  document.getElementById('container').style.display = 'none';
  document.getElementById('contact-container').style.display = 'none';
});

const contact = document.getElementById('contact');
contact.addEventListener('click', () => {
  document.getElementById('contact-container').style.display = 'block';
  document.getElementById('addbook').style.display = 'none';
  document.getElementById('container-list').style.display = 'none';
  document.getElementById('container').style.display = 'none';
});

export default hide;
