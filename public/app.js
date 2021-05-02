// eslint-disable-next-line no-undef
document.querySelectorAll('.price').forEach((node) => {
  // eslint-disable-next-line no-param-reassign
  node.textContent = new Intl.NumberFormat('ru-RU', {
    currency: 'usd',
    style: 'currency'
  }).format(node.textContent)
})

// eslint-disable-next-line no-undef
const $cart = document.querySelector('#cart')
if ($cart) {
  $cart.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      const { id } = e.target.dataset

      // eslint-disable-next-line no-undef
      fetch(`/cart/remove/${id}`, {
        method: 'delete'
      })
        .then((res) => res.json())
        .then((cart) => console.log(cart))
    }
  })
}
