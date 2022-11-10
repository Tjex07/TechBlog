const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('#content-title').value.trim();
  const body = document.querySelector('#content-body').value.trim();

  await fetch(`/api/content`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('.new-content-form')
  .addEventListener('submit', newFormHandler);
