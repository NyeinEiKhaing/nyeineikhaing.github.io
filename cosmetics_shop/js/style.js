$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    //AddToCart System Start
count();
$('.addToCart').click(function(e){
  e.preventDefault();
  let id = $(this).data('id');
  let name = $(this).data('name');
  let brand = $(this).data('brand');
  let detail = $(this).data('detail');
  //changeColor
  // let description = $("input[type='radio']:checked").val();
  // alert(description)
  let price = $(this).data('price');
  console.log(id, name, brand, detail, price);

  //create an obj
  let items = {
      item_id : id,
      item_name : name, 
      item_brand : brand, 
      item_detail : detail,
      item_price : price,
      qty : 1
  }

  //create localstorage
  let itemString = localStorage.getItem('shops');
  let itemArray;
  if(itemString == null){
      itemArray = [];
  }else{
      itemArray = JSON.parse(itemString);
  }

  //if item is same, qty will be plus 1.
  let status = false;
  $.each(itemArray, function(i, v){
      if(id == v.item_id){
          status = true;
          v.qty++;
      }
  })

  //if item is not same, another item will be added.
  if(status == false){
      //data place in array
      itemArray.push(items);
  }

  //convert data into string
  let itemData = JSON.stringify(itemArray);
  localStorage.setItem('shops', itemData);
  count();

})
//AddToCart System End
});


