const loaders = document.querySelectorAll('.loader');

loaders.forEach((loader) => {

 setTimeout(() => {

  loader.classList.remove('loader')

 }, 6000)

})