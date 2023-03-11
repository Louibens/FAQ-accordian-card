
let acc = document.getElementsByClassName("accordion");
let selected = null;
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if (selected && selected !== this) {
      // Removes active class from previously selected accordion
      selected.classList.remove("active");
      let prevPanel = selected.nextElementSibling;
      prevPanel.style.display = "none";
    }
    // Adds active class to clicked accordion
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    // Sets currently selected accordion
    selected = this;
  });
}
