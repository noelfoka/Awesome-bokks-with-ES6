const Data = JSON.parse(localStorage.getItem('collection'));
const idDiv = document.getElementsByTagName('button');
const buttonPressed = (e) => {
  const elementId = e.target.id;
  document.getElementById(elementId).style.display = 'none';
  Data.splice(elementId, 1);
  localStorage.setItem('collection', JSON.stringify(Data));
  window.location.reload();
};

Array.from(idDiv).forEach((button) => {
  button.addEventListener('click', buttonPressed);
});

export default buttonPressed;
