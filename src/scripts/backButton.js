document.querySelectorAll('.back').forEach((ele) => {
  ele?.addEventListener('click', () => {
    history.go(-1);
  });
});
