//EVENTOS CLICK DE LAS REDES
$(".igLink").click(() =>
  window.open("http://www.instagram.com")
);
$(".ytLink").click(() =>
  window.open("http://www.youtube.com/")
);
$(".fbLink").click(() => window.open("http://www.facebook.com/"));

//VALIDACION DE FORMULARIO

const validEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const submitButton = document.getElementById("button-submit");
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formMsg = document.getElementById("message");
submitButton.addEventListener("click", (e) => validateForm(e));
function validateForm(e) {
  e.preventDefault();
  if (!formName.value) {
    alert("Por favor complete su nombre");
    return;
  }
  if (!validEmail(formEmail.value)) {
    alert("El e-mail ingresado no es valido");
    return;
  }
  if (!formMsg.value) {
    alert("Por favor ingrese su consulta");
    return;
  }
  console.log(
    "Datos del formulario:",
    formName.value,
    formEmail.value,
    formMsg.value
  );
  formName.value = "";
  formEmail.value = "";
  formMsg.value = "";
  alert("Su formulario ha sido enviado");
}

//EFECTO DEL MENU RESPONSIVE
$(".responsive-menu-items ul li").click(() => {
  $(".responsive-menu-items").fadeOut();
});
$(".responsive-menu").click(() => {
  if ($(".responsive-menu-items").is(":visible")) {
    $(".responsive-menu-items").fadeOut();
  } else {
    $(".responsive-menu-items").fadeIn();
  }
});

const selectedNavItem = (event) => {
  let number = event.target.innerText.length;
  console.log(event.target);
  hid();
  $(event.target).addClass("border");
  switch (number) {
    case 16: // left
      $(".learning-classes").addClass("flex");
      break;
    case 7:
      $(".learning-styles").addClass("flex");
      break;
    case 8:
      $(".learning-subjects").addClass("flex");
      break;
    case 20:
      $(".learning-program").addClass("flex");
      break;

    default:
      return;
  }
};
for (item of $(".learning-nav ul li")) {
  $(item).click((target) => selectedNavItem(target));
}
const hid = () => {
  for (div of $(".learning-details").children()) {
    $(div).removeClass("flex");
  }
  for (li of $(".learning-nav ul").children()) {
    $(li).removeClass("border");
  }
};

$(".celclases").hide();

$(document).ready(function () {
  $("#show").click(function () {
    $(".celclases").toggle();
  });
});

$(".celclases1").hide();

$(document).ready(function () {
  $("#show1").click(function () {
    $(".celclases1").toggle();
  });
});

$(".celclases2").hide();

$(document).ready(function () {
  $("#show2").click(function () {
    $(".celclases2").toggle();
  });
});

$(".celclases3").hide();

$(document).ready(function () {
  $("#show3").click(function () {
    $(".celclases3").toggle();
  });
});
