let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick  = ()=>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick  = ()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick  = ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}


document.addEventListener('DOMContentLoaded', function () {
  // Lấy input element để nhập từ khóa tìm kiếm
  const searchInput = document.getElementById('searchInput');

  // Lắng nghe sự kiện 'input' trên input element
  searchInput.addEventListener('input', function () {
      // Lấy từ khóa tìm kiếm từ giá trị nhập vào input
      const keyword = searchInput.value.trim().toLowerCase();

      // Lấy danh sách tất cả các sản phẩm
      const products = document.querySelectorAll('.swiper-slide');

      // Lặp qua từng sản phẩm để ẩn hoặc hiển thị dựa trên từ khóa tìm kiếm
      products.forEach(product => {
          // Lấy tên sản phẩm từ phần tử
          const productName = product.querySelector('h3').innerText.toLowerCase();

          // Kiểm tra xem tên sản phẩm có chứa từ khóa tìm kiếm không
          if (productName.includes(keyword)) {
              // Nếu có, hiển thị sản phẩm
              product.style.display = 'block';
          } else {
              // Nếu không, ẩn sản phẩm
              product.style.display = 'none';
          }
      });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  // Lấy tất cả các nút "add to cart"
  const addToCartButtons = document.querySelectorAll('#addToBtn');

  // Gắn sự kiện click cho mỗi nút "add to cart"
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });

  // Hàm xử lý khi click vào nút "add to cart"
  function addToCart(event) {
    // Lấy thông tin sản phẩm từ phần tử chứa nút "add to cart"
    const productContainer = event.target.closest('.swiper-slide');
    const productImg = productContainer.querySelector('img').src;
    const productName = productContainer.querySelector('h3').innerText;
    const productPrice = productContainer.querySelector('.price span').innerText;
    // Tạo một đối tượng sản phẩm
    const product = {
      img: productImg,
      name: productName,
      price: parseFloat(productPrice.replace('VNĐ', '').replace(',', '')), // Chuyển đổi giá thành số
      quantity: 1 // Mặc định số lượng là 1 khi thêm vào giỏ hàng
    };

    // Thêm sản phẩm vào giỏ hàng
    addToCartList(product);

    alert('Sản phẩm đã được thêm vào giỏ hàng!');
  }

  // Hàm thêm sản phẩm vào danh sách giỏ hàng
  function addToCartList(product) {
    // Lấy phần tử danh sách giỏ hàng
    const cartList = document.querySelector('.shopping-cart .listCart');

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingCartItem = cartList.querySelector(`.cart-item[data-name="${product.name}"]`);
    if (existingCartItem) {
      // Nếu sản phẩm đã tồn tại, tăng số lượng
      const quantityElement = existingCartItem.querySelector('.item-quantity');
      product.quantity += 1;
      quantityElement.innerText = `Số lượng: ${product.quantity}`;
    } else {
      // Nếu sản phẩm chưa tồn tại, tạo mới
      const productElement = document.createElement('div');
      productElement.classList.add('cart-item');
      productElement.dataset.name = product.name;
      productElement.innerHTML = `
        <img width="200px" alt=""class="item-img" src="${product.img}"/>
        <div style="font-size:20px"  class="item-name">${product.name}</div>
        <div style="font-size:10px" class="item-price">${product.price.toFixed(3)} VNĐ</div>
        <div style="font-size:12px" class="item-quantity">Quantity: ${product.quantity}</div>
        <button class="remove-btn">Delete</button>
      `;
      // Thêm sản phẩm vào danh sách giỏ hàng
      cartList.appendChild(productElement);
      // Gắn sự kiện click để xoá sản phẩm
      productElement.querySelector('.remove-btn').addEventListener('click', removeFromCart);
    }

    // Cập nhật tổng giá trị giỏ hàng
    updateTotal();
  }

  // Hàm xoá sản phẩm khỏi giỏ hàng
  function removeFromCart(event) {
    const buttonClicked = event.target;
    const productElement = buttonClicked.parentElement;
    productElement.remove();
    updateTotal();
  }

  // Hàm cập nhật tổng giá trị giỏ hàng
  function updateTotal() {
    // Lấy phần tử tổng giỏ hàng
    const totalElement = document.querySelector('.shopping-cart .total');

    // Lấy danh sách tất cả các sản phẩm trong giỏ hàng
    const cartItems = document.querySelectorAll('.shopping-cart .cart-item');

    // Tính tổng giá trị
    let total = 0;
    cartItems.forEach(item => {
      const price = parseFloat(item.querySelector('.item-price').innerText.replace('VNĐ', '').replace(',', ''));
      const quantity = parseInt(item.querySelector('.item-quantity').innerText.replace('Số lượng: ', ''));
      total += price * quantity;
    });

    // Hiển thị tổng giá trị
    totalElement.innerText = `Total: ${total.toFixed(2)} VNĐ`;
  }
});