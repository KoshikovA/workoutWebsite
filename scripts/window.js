function BodyType() {
  bodyType = prompt(
    "Enter your body type:\n 1. Ectomorph \n 2. Mesomorph \n 3. Endomorph"
  );

  while (true) {
    if (bodyType == null) break;
    if (bodyType == 1) {
      alert("Your type is - Ectomorph");
      location.href = "Ectomorph.html";
      break;
    } else if (bodyType == 2) {
      alert("Your type is - Mesomorph");
      location.href = "Mesomorph.html";
      break;
    } else if (bodyType == 3) {
      alert("Your type is - Endomorph");
      location.href = "Endomorph.html";
      break;
    }
    bodyType = prompt("Enter correct type!");
  }
}
