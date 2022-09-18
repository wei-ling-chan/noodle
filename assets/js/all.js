"use strict";

$(document).ready(function () {
  $(".select-all").click(function () {
    if ($(".news-importent").hasClass('d-none')) {
      $(".news-importent").removeClass('d-none');
    }

    if ($(".news-newproduct").hasClass('d-none')) {
      $(".news-newproduct").removeClass('d-none');
    }
  });
  $(".select-importent").click(function () {
    if ($(".news-importent").hasClass('d-none')) {
      $(".news-importent").removeClass('d-none');
    }

    if (!$(".news-newproduct").hasClass('d-none')) {
      $(".news-newproduct").addClass('d-none');
    }
  });
  $(".select-newproduct").click(function () {
    if ($(".news-newproduct").hasClass('d-none')) {
      $(".news-newproduct").removeClass('d-none');
    }

    if (!$(".news-importent").hasClass('d-none')) {
      $(".news-importent").addClass('d-none');
    }
  });
});
var data = [{
  "id": 0,
  "name": "叉燒涼麵",
  "type": "涼麵",
  "imgUrl": "./assets/images/cool-noodle3.jpg",
  "description": "叉燒是由五花肉扣成圓條狀後先將外皮煎半焦，然後再下鍋老滷，口感上可以讓肉質更鎖住肉汁，鮮嫩味美~而且滷汁味道也比較清甜不油膩~還帶點焦香，再配上微酸解膩的泡菜，讓您有大大的滿足感!!",
  "content": "麵條、小黃瓜、番茄、蛋、叉燒、泡菜、醬汁",
  "price": 80
}, {
  "id": 1,
  "name": "經典涼麵",
  "type": "涼麵",
  "imgUrl": "./assets/images/cool-noodle2.jpg",
  "description": "經典涼麵，百吃不厭！",
  "content": "麵條、小黃瓜、番茄、蛋、醬汁",
  "price": 60
}, {
  "id": 2,
  "name": "蝦仁涼麵",
  "type": "涼麵",
  "imgUrl": "./assets/images/cool-noodle1.jpg",
  "description": "蝦仁涼麵，海味浮現！",
  "content": "蝦仁、麵條、小黃瓜、番茄、蛋、醬汁",
  "price": 90
}, {
  "id": 3,
  "name": "叉燒湯麵",
  "type": "湯麵",
  "imgUrl": "./assets/images/soup-noodle1.jpg",
  "description": "叉燒是由五花肉扣成圓條狀後先將外皮煎半焦，然後再下鍋老滷，口感上可以讓肉質更鎖住肉汁，鮮嫩味美~而且滷汁味道也比較清甜不油膩~還帶點焦香，再配上微酸解膩的泡菜，讓您有大大的滿足感!!",
  "content": "麵條、小黃瓜、番茄、蛋、叉燒、泡菜、醬汁",
  "price": 100
}, {
  "id": 4,
  "name": "鮮蝦湯麵",
  "type": "湯麵",
  "imgUrl": "./assets/images/soup-noodle2.jpg",
  "description": "鮮蝦湯麵，海味浮現！",
  "content": "草蝦、麵條、小黃瓜、番茄、蛋、醬汁",
  "price": 120
}, {
  "id": 5,
  "name": "家常湯麵",
  "type": "湯麵",
  "imgUrl": "./assets/images/soup-noodle3.jpg",
  "description": "家常湯麵，記憶中的味道！",
  "content": "麵條、小黃瓜、番茄、蛋、時蔬、醬汁",
  "price": 100
}, {
  "id": 6,
  "name": "南洋叻沙湯麵",
  "type": "湯麵",
  "imgUrl": "./assets/images/soup-noodle4.jpg",
  "description": "南洋叻沙湯麵，彷彿翱遊南亞島國！",
  "content": "麵條、檸檬、小黃瓜、番茄、蛋、時蔬、香菜、醬汁",
  "price": 120
}, {
  "id": 7,
  "name": "油蔥湯麵",
  "type": "湯麵",
  "imgUrl": "./assets/images/soup-noodle5.jpg",
  "description": "油蔥酥香，復刻傳統家鄉味！",
  "content": "麵條、油蔥酥、時蔬、九層塔、醬汁",
  "price": 80
}, {
  "id": 8,
  "name": "日式炸豬排",
  "type": "炸物",
  "imgUrl": "./assets/images/fride1.jpg",
  "description": "比臉大豬排！",
  "content": "豬肉、生菜",
  "price": 80
}, {
  "id": 9,
  "name": "地瓜麻糬QQ棒",
  "type": "炸物",
  "imgUrl": "./assets/images/fride2.jpg",
  "description": "QQ好棒棒！",
  "content": "地瓜、麻糬、生菜",
  "price": 60
}, {
  "id": 9,
  "name": "菱角酥",
  "type": "炸物",
  "imgUrl": "./assets/images/fride3.jpg",
  "description": "酥酥脆脆！",
  "content": "菱角",
  "price": 60
}, {
  "id": 10,
  "name": "天婦羅",
  "type": "炸物",
  "imgUrl": "./assets/images/fride4.jpg",
  "description": "平民美食！",
  "content": "麵粉、鮮蝦",
  "price": 120
}, {
  "id": 11,
  "name": "炸物",
  "type": "炸物拼盤",
  "imgUrl": "./assets/images/fride5.jpg",
  "description": "聚餐必點！",
  "content": "鮮蝦、地瓜、麻糬、芋頭、時蔬",
  "price": 80
}, {
  "id": 12,
  "name": "綜合串燒",
  "type": "精緻小菜",
  "imgUrl": "./assets/images/side-desh1.jpg",
  "description": "聚餐必點！",
  "content": "豬肉、牛肉、時蔬",
  "price": 80
}, {
  "id": 13,
  "name": "烤虱目魚",
  "type": "精緻小菜",
  "imgUrl": "./assets/images/side-desh2.jpg",
  "description": "虱目魚！",
  "content": "烤虱目魚",
  "price": 60
}, {
  "id": 14,
  "name": "脆皮雞蛋糕",
  "type": "精緻小菜",
  "imgUrl": "./assets/images/side-desh3.jpg",
  "description": "平民小吃！",
  "content": "麵粉、蛋",
  "price": 60
}, {
  "id": 15,
  "name": "味噌湯",
  "type": "湯品",
  "imgUrl": "./assets/images/miso-soup.jpg",
  "description": "味噌湯！",
  "content": "味噌、豆腐",
  "price": 40
}];
$(function () {
  if (location.href.includes('?')) {
    var get_params = location.href.split('?')[1];
    var params_arr = []; //參數key-value

    var params_name = []; //參數名稱(key)

    var params_value = []; //參數值(value)

    params_arr = get_params.split('\&'); //切出各個get代的參數

    params_arr.forEach(function (param) {
      params_name.push(param.split('=')[0]); //切出參數的key值

      params_value.push(param.split('=')[1]); //切出參數的value值
    });

    if (params_name == 'keyword') {
      search_product(params_name, params_value);
    } else if (params_name == 'product') {
      get_detailed(params_name, params_value);
    }
  }
});

function search_product(params_name, params_value) {
  var keyword = decodeURI(params_value[0]);
  var all_product = [];
  var searched_product = []; //選到的產品

  var unsearched_product = []; //未選到的產品

  var tastyItems = $(".tasty-item-block");
  tastyItems.each(function () {
    all_product.push($(this).attr("id"));
  });
  searched_product = all_product.filter(function (item) {
    if (item.indexOf(keyword) > -1) {
      return item;
    }
  });
  unsearched_product = all_product.filter(function (item) {
    if (item.indexOf(keyword) == -1) {
      return item;
    }
  }); // 產品頁篩選

  searched_product.forEach(function (element) {
    if ($("#" + element).hasClass('d-none')) {
      $("#" + element).removeClass('d-none');
    }
  });
  unsearched_product.forEach(function (element) {
    if (!$("#" + element).hasClass('d-none')) {
      $("#" + element).addClass('d-none');
    }
  });
}

function get_detailed(params_name, params_value) {
  data.forEach(function (element) {
    if (decodeURI(params_value) == element.name) {
      $(".product_name").text(element.name);
      $(".product_type").text(element.type);
      $(".description").text(element.description);
      $(".content").text(element.content);
      $(".price").text(element.price);
      $(".imgUrl").attr("src", element.imgUrl);
    }
  });
}
//# sourceMappingURL=all.js.map
