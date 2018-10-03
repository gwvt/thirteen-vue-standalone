/* eslint-disable */

const mainViewsCollection = document.getElementsByClassName('main');
const mainViews = Array.prototype.slice.call(mainViewsCollection);

window.addEventListener('load', () => {
  mainViews.forEach((mainView, index) => {
    if (index === 0) {
      mainView.style.display = 'block';
    } else {
      mainView.style.display = 'none';
    }
  });
});

function show(id) {
  mainViews.forEach((mainView) => {
    if (id === mainView.id) {
      mainView.style.display = 'block';
    } else {
      mainView.style.display = 'none';
    }
  })
}
