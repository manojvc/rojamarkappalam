(function () {
  "use strict";

  /**
  * URL format: product-details.html?product=babysize
   */
  var params = new URLSearchParams(window.location.search);
  var key = (params.get("product") || "").toLowerCase();

  var products = {
    babysize: {
      title: "குட்டி அப்பளம் / Baby Appalam",
      category: "Appalam",
      price: "Rs.150/Kg",
      image: "assets/images/products/babysize.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    },
    netu: {
      title: "நெட்டு பூ அப்பளம் / Netu Poo",
      category: "Appalam",
      price: "Rs.150/Kg",
      image: "assets/images/products/netu.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    },
    no3: {
      title: "3-ம் நம்பர் அப்பளம் / No 3 Appalam",
      category: "Appalam",
      price: "Rs.150/Kg",
      image: "assets/images/products/no3.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    },
    no4: {
      title: "4-ம் நம்பர் அப்பளம் / No.4 Appalam",
      category: "Appalam",
      price: "Rs.150/Kg",
      image: "assets/images/products/no4.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    },
    pai: {
      title: "பாய் அப்பளம் / Pai Appalam",
      category: "Appalam",
      price: "Rs.150/Kg",
      image: "assets/images/products/pai.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    },
    pepper: {
      title: "மிளகு அப்பளம் / Pepper Appalam",
      category: "Appalam",
      price: "Rs.150/Kg",
      image: "assets/images/products/pepper.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    },
    blackgramorganic: {
      title: "உளுந்து அப்பளம் / Black Gram Organic Appalam",
      category: "Appalam",
      price: "Rs.150/Kg",
      image: "assets/images/products/blackgramorganic.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    },
    plaincummin: {
      title: "அப்பளம் / Plain Cummin Appalam",
      category: "Appalam",
      price: "Rs.150/Kg",
      image: "assets/images/products/plaincummin.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    },
    organicpapad: {
      title: "உளுந்து அப்பளம் / Urad Organic Papad",
      category: "Papad",
      price: "Rs.150/Kg",
      image: "assets/images/products/organicpapad.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    },
    ring: {
      title: "ரிங் அப்பளம் / Ring Appalam",
      category: "Appalam",
      price: "Rs.150/Kg",
      image: "assets/images/products/ring.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    },
    plainudad: {
      title: "பிளைன் அப்பளம் / Plain Udad Organic Papad",
      category: "Papad",
      price: "Rs.150/Kg",
      image: "assets/images/products/plainudad.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    },
    no2: {
      title: "கல்யாண அப்பளம் / No.2 Marriage Appalam",
      category: "Appalam",
      price: "Rs.150/Kg",
      image: "assets/images/products/no2.jpg",
      ingredients: "Ingredients: Urad Dal, Salt, Cumin Seeds, Oil, Asafoetida"
    }
  };

  var fallbackKey = "babysize";
  var selected = products[key] || products[fallbackKey];

  function setText(id, value) {
    var el = document.getElementById(id);
    if (!el) return;
    el.textContent = value;
  }

  function setHtml(id, value) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = value;
  }

  function setImage(id, src, alt) {
    var el = document.getElementById(id);
    if (!el) return;
    el.setAttribute("src", src);
    if (alt) el.setAttribute("alt", alt);
  }

  document.addEventListener("DOMContentLoaded", function () {
    setImage("productImage", selected.image, selected.title);
    setText("productTitle", selected.title);
    setText("productCategory", selected.category);
    setText("productCategory2", selected.category);
    setText("productPrice", selected.price);
    setText("productPrice2", selected.price);
    setHtml("productIngredients", selected.ingredients);

    document.title = selected.title + " - Roja Mark Appalam";
  });
})();
