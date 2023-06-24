var dataArray = [
    { name: "Отправить на стоянку", price: 400, type: "buying" },
    { name: "Назначить семейным", price: 2200, type: "premium" },
    { name: "Отремонтировать", price: 2200, type: "buying" },
    { name: "Продать", price: 99999, type: "sale" },
    { name: "Отправить на стоянку", price: 2200, type: "buying" },
    { name: "Назначить семейным", price: 2200, type: "premium" },
    { name: "Отремонтировать", price: 155, type: "buying" },
    { name: "Отремонтировать", price: 255, type: "buying" },
    { name: "Отремонтировать", price: 99999, type: "buying" },
    { name: "Отремонтировать", price: 455, type: "buying" },
    { name: "Отремонтировать", price: 555, type: "buying" }
  ];
  


    var contentBlock = document.querySelector('.content');
  
    contentBlock.addEventListener('wheel', function(event) {
        var scrollAmount = event.deltaY;
        contentBlock.scrollLeft += scrollAmount;
      });

    var items = dataArray.length; // Предполагается, что у вас есть массив данных dataArray

    if (items > 8) {
        contentBlock.classList.add('more-than-eight');
    } else if (items > 4) {
        contentBlock.classList.add('more-than-four');
    } else {
        contentBlock.classList.add('less-than-four');
    }

  dataArray.forEach(function(item) {
    var block = document.createElement('div');
    block.classList.add('content__data-block');
  
    var name = document.createElement('div');
    name.textContent = item.name;
    name.classList.add('content__data-block-name');
    block.appendChild(name);
  
    var price = document.createElement('div');
    if (item.type === "buying" ) {
        price.innerHTML = "<span class='content__data-block--dollar-sign'>$</span>" + item.price;
        price.classList.add('content__data-block-price');
        block.appendChild(price);
    } else if (item.type === "sale") {
        price.innerHTML = "<span class='content__data-block--dollar-sign-green'>+$</span>"  + item.price;
        price.classList.add('content__data-block-price');
        block.appendChild(price);
    } else {
        price.innerHTML = "<img src='./img/premium.svg' class='content__data-block--premium-img'>";
        price.classList.add('content__data-block-price');
        block.appendChild(price);
    }

    block.addEventListener('click', function() {
        console.log(item.name); // Вывод имени элемента в консоль
        block.classList.add('content__data-block-dark');
    });
    contentBlock.appendChild(block);
  });
  