const toCurrency = (price) =>
  new Intl.NumberFormat('ru-RU', {
    currency: 'usd',
    style: 'currency'
  }).format(price)

// eslint-disable-next-line no-undef
document.querySelectorAll('.price').forEach((node) => {
  // eslint-disable-next-line no-param-reassign
  node.textContent = toCurrency(node.textContent)
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
        .then((cart) => {
          if (cart.books.length) {
            const html = cart.books
              .map(
                (b) => `<tr>
              <td class="is-centered">${b.title}</td>
              <td>${b.price}</td>
              <td>${b.count}</td>
              <td>
                <button type="submit" class="button is-text is-danger remove" data-id="${b.id}">
                  Remove
                </button>
              </td>
            </tr>`
              )
              .join('')

            $cart.querySelector('tbody').innerHTML = html
            $cart.querySelector('.price').textContent = toCurrency(cart.price)
          } else {
            $cart.innerHTML = '<h1 class="title text-is-centered">Cart empty</h1>'
          }
        })
    }
  })
}
