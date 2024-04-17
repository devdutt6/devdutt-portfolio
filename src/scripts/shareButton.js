document.querySelector('#share')?.addEventListener('click', (_) => {
  const span = document.querySelector('#share span');
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
    if (span) span.textContent = 'Copied!';
    setTimeout(() => {
      if (span) span.textContent = 'Copy Link';
    }, 1500);
  } else {
    console.log('clipboard restricted');
    if (span) span.textContent = 'Failed!';
    setTimeout(() => {
      if (span) span.textContent = 'Copy Link';
    }, 1500);
  }
});
