document.addEventListener("DOMContentLoaded", function () {
  var continueButton = document.querySelector(".next-stepsss");

  continueButton.addEventListener("click", function () {
    var noRadio = document.querySelector("#NoRadio");
    var yesRadio = document.querySelector("#YESRadio");
    var noRadios = document.querySelector("#NoRadios");
    var yesRadios = document.querySelector("#YESRadios");

    if (yesRadio.checked) {
      var currentSection = document.querySelector(".step-10");
      var nextSection = document.querySelector(".step-11");
      currentSection.style.display = "none";
      nextSection.style.display = "block";
    } else if (noRadio.checked) {
      var currentSection = document.querySelector(".step-10");
      var nextSection = document.querySelector(".step-100");
      currentSection.style.display = "none";
      nextSection.style.display = "block";
    } else {
      alert("hello word");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var continueButton = document.querySelector(".next-stepsses");

  continueButton.addEventListener("click", function () {
    var noRadios = document.querySelector("#NoRadios");
    var yesRadios = document.querySelector("#YESRadios");

    if (yesRadios.checked) {
      var currentSection = document.querySelector(".step-100");
      var nextSection = document.querySelector(".step-11");
      currentSection.style.display = "none";
      nextSection.style.display = "block";
    } else if (noRadios.checked) {
      var currentSection = document.querySelector(".step-100");
      var nextSection = document.querySelector(".step-111");
      currentSection.style.display = "none";
      nextSection.style.display = "block";
    }
  });
});
function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

$(document).ready(function () {
  var passwordInput = $("#password-input");
  var togglePassword = $("#togglePassword");
  var progress = $(".progress-bar");
  var warnings = $(".password-warnings");

  function validatePassword(password) {
    var strength = 0;
    var warningsList = [];

    // Check for length
    if (password.length >= 6) {
      strength += 1;
    } else {
      warningsList.push("Password must be at least 6 characters long");
    }

    // Check for letter
    if (password.match(/[a-z]/i)) {
      strength += 1;
    } else {
      warningsList.push("Password must contain at least one letter");
    }

    // Update progress bar
    progress.removeClass("bg-danger bg-warning bg-success");
    if (strength == 0) {
      progress.css("width", "0%").addClass("bg-danger");
    } else if (strength == 1) {
      progress.css("width", "33%").addClass("bg-warning");
    } else if (strength == 2) {
      progress.css("width", "66%").addClass("bg-success");
    } else if (strength == 3) {
      progress.css("width", "100%").addClass("bg-success");
    }

    // Update warnings
    if (warningsList.length > 0) {
      var warningsItems = "";
      $.each(warningsList, function (index, warning) {
        warningsItems += "<li>" + warning + "</li>";
      });
      warnings.html(warningsItems).show();
    } else {
      warnings.hide();
    }
  }

  passwordInput.on("input", function () {
    var password = $(this).val();
    validatePassword(password);
  });

  togglePassword.on("click", function () {
    togglePasswordVisibility();
  });
});

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password-input");
  var eyeIcon = document.querySelector(".eye-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.add("open");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("open");
  }
}

$(document).ready(function () {
  // show the first step
  $(".step-1").show();

  // handle clicks on the next button
  $(".next-steps").click(function () {
    // get the current step
    var currentStep = $(this).closest(".step");

    // get the next step
    var nextStep = currentStep.next(".step");

    // hide the current step
    currentStep.hide();

    // show the next step
    nextStep.show();
    // $(".sidebarmain li").eq(0).css("color", "green");
    $(".sidebarmain li:contains('personal Information')").css(
      "color",
      "#48AC98"
    );
  });

  // handle clicks on the back button
  $(".prev-step").click(function () {
    // get the current step
    var currentStep = $(this).closest(".step");

    // get the previous step
    var prevStep = currentStep.prev(".step");

    // hide the current step
    currentStep.hide();

    // show the previous step
    prevStep.show();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // show the first step
  document.querySelector(".step-1").style.display = "block";

  // handle clicks on the next button
  document.querySelectorAll(".next-step").forEach(function (nextBtn) {
    nextBtn.addEventListener("click", function () {
      // get the current step
      var currentStep = this.closest(".step");

      // get the next step
      var nextStep = currentStep.nextElementSibling;

      // hide the current step
      currentStep.style.display = "none";

      // show the next step
      nextStep.style.display = "block";

      var currentIndex = Array.from(currentStep.parentNode.children).indexOf(
        currentStep
      );

      // highlight the corresponding text in the sidebar
      var sidebarItem =
        document.querySelectorAll(".sidebarmain li")[currentIndex];
      sidebarItem.classList.add("text-success");
    });
  });

  console.log("================>", completedIcon);

  // handle clicks on the back button
  document.querySelectorAll(".prev-step").forEach(function (prevBtn) {
    prevBtn.addEventListener("click", function () {
      // get the current step
      var currentStep = this.closest(".step");

      // get the previous step
      var prevStep = currentStep.previousElementSibling;

      // hide the current step
      currentStep.style.display = "none";

      // show the previous step
      prevStep.style.display = "block";
      var completedIcon = currentStep.querySelector(".fas.fa-check-circle");
      if (completedIcon) {
        completedIcon.remove();
      }
      document
        .querySelector(".sidebarmain li:contains('personal Information')")
        .classList.remove("text-success");

      // document.querySelector(".sidebarmain li:removes('personal Information') .icon").style.visibility = "hidden";
      // document.querySelector(".sidebarmain li:removes('personal Information')").style.color = "";
    });
  });
});

let searchInputs = "search_input";

$(document).ready(function () {
  var autocomplete;
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById(searchInputs),
    {
      types: ["geocode"],
    }
  );

  google.maps.event.addListener(autocomplete, "place_changed", function () {
    var near_place = autocomplete.getPlace();
  });
});
const searchinput = "searchinput";

$(document).ready(function () {
  var autocomplete;
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById(searchinput),
    {
      types: ["geocode"],
    }
  );

  google.maps.event.addListener(autocomplete, "place_changed", function () {
    var near_place = autocomplete.getPlace();
  });
});
const searchinputs = "nationality";

$(document).ready(function () {
  var autocomplete;
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById(searchinputs),
    {
      types: ["geocode"],
    }
  );

  google.maps.event.addListener(autocomplete, "place_changed", function () {
    var near_place = autocomplete.getPlace();
  });
});

function updateSidebar() {
  // Update the class of the list item to "complete" and add a check icon
  $("#personalInfo")
    .removeClass("incomplete")
    .addClass("complete")
    .html("Personal Information ==");
}
