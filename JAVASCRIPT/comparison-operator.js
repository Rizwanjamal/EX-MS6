// Example-1
var corruptionLevel = prompt("Enter Corruption Level");
var politicsName = prompt("Enter Politics Name");
if (corruptionLevel == 100) {
  if (politicsName == "Nawaz Sharif") {
    alert("Adiala ki bari yad ati hai ise !");
  } else if (politicsName == "Zardari") {
    alert("Kuch nahi chhora isne !");
  }
}

// Example-2
var temp = 15;
var isSamosaShopClosed = false;
var hasPartyTime = true;
if (temp <= 20 && isSamosaShopClosed && hasPartyTime) {
  alert("Lets Go !");
} else {
  alert("Han to sun isi ki bakwas !");
}
// Example-3
var temp = 15;
var isSamosaShopClosed = false;
var hasPartyTime = true;
if ((temp <= 20 && isSamosaShopClosed) || hasPartyTime) {
  alert("Lets Go !");
} else {
  alert("Han Chal ! Paise Tu De Ga !");
}
// Example-4
var corruptionLevel = prompt("Enter Corruption Level");
var politicsName = prompt("Enter Politics Name");
if (corruptionLevel == 100) {
  if (politicsName == "Nawaz Sharif") {
    alert("Adiala ki bari yad ati hai ise !");
  } else if (politicsName == "Zardari") {
    alert("Kuch nahi chhora isne !");
  }
} else if (corruptionLevel <= 100 && corruptionLevel >= 60) {
  if (politicsName == "Altaf Bhai") {
    alert("Ek pappi idhar, ek pappi udhar");
  } else if (politicsName == "Shekh Rasheed") {
    alert("Happy Birthday Billo");
  }
}
// Example-5
var corruptionLevel = prompt("Enter Corruption Level");
var politicsName = prompt("Enter Politics Name");
if (corruptionLevel == 100) {
  if (politicsName == "Nawaz Sharif") {
    alert("Adiala ki bari yad ati hai ise !");
  } else if (politicsName == "Zardari") {
    alert("Kuch nahi chhora isne !");
  } else {
    alert("Sab ek se barh kar ek");
  }
} else if (corruptionLevel <= 100 && corruptionLevel >= 60) {
  if (politicsName == "Altaf Bhai") {
    alert("Ek pappi idhar, ek pappi udhar");
  } else if (politicsName == "Shekh Rasheed") {
    alert("Happy Birthday Billo");
  } else {
    alert("Sab ek se barh kar ek");
  }
}
