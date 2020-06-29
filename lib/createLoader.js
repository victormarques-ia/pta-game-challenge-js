

function createLoader () {
  const loader = document.createElement('div');
  loader.classList.add('loader');

  document.body.insertBefore(loader, document.body.childNodes[0]);

  return loader;
}

export default createLoader;