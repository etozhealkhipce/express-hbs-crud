// eslint-disable-next-line no-undef
document.querySelectorAll('.price').forEach((node) => {
  // eslint-disable-next-line no-param-reassign
  node.textContent = new Intl.NumberFormat('ru-RU', {
    currency: 'usd',
    style: 'currency'
  }).format(node.textContent)
})
