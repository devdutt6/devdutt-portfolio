document.querySelectorAll(`.clickEvent`).forEach((ele) => {
  ele.addEventListener('click', () => {
    scrollTo(ele.dataset.related);
  });
});
function scrollTo(id) {
  const scrollToElement = document.querySelector(`#${id}`);
  scrollToElement?.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
