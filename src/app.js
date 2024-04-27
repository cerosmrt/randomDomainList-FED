window.onload = function() {
  const reloadButton = document.getElementById("reloadButton");
  const mainText = document.getElementById("main-text");

  reloadButton.addEventListener("click", function() {
    mainText.innerHTML = generateDomain();
  });
};

function generateDomain() {
  let pronouns = ["the", "our", "your", "my", "his", "her", "their"];
  let adjectives = ["flying", "dancing", "whispering", "shining", "ancient"];
  let nouns = ["phoenix", "unicorn", "griffin", "dragon", "sphinx"];
  let extensions = [".com", ".net", ".us", ".io"];
  
  let domains = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          domains.push(pronouns[i] + adjectives[j] + nouns[k] + extensions[l]);
        }
      }
    }
  }

  return domains.join('<br>');
}