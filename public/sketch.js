var img;
  var countrysData = {
    "France": { x: 585, y: 299, width: 60, height: 40 },
    "The United States": { x: 130, y: 294, width: 200, height: 120 },
    "Spain": { x: 565, y: 334, width: 60, height: 50 },
    "China": { x: 903, y: 326, width: 170, height: 100 },
    "Italy": { x: 621, y: 322, width: 60, height: 40 },
    "United Kingdom": { x: 583, y: 250, width: 30, height: 50 },
    "Germany": { x: 623, y: 278, width: 40, height: 40 },
    "Mexico": { x: 171, y: 390, width: 100, height: 80 },
    "Thailand": { x: 970, y: 440, width: 45, height: 40 },
    "Turkey": { x: 703, y: 340, width: 48, height: 30 }
  };
  var countryImages = {}; 
  
  function preload() {
    img = loadImage('/worldmap.jpg');
    // Load images for each country
    countryImages["France"] = loadImage('/france.png');
      countryImages["The United States"] = loadImage('/usa.png');
      countryImages["Spain"]= loadImage('/spain.png');
      countryImages["China"]= loadImage('/China.png');
      countryImages["Italy"]= loadImage('/italy.png');
      countryImages["United Kingdom"]= loadImage('/uk.png');
      countryImages["Germany"]= loadImage('/germany.png');
      countryImages["Mexico"]= loadImage('/mexico.png');
      countryImages["Thailand"]= loadImage('/Thailand.png');
      countryImages["Turkey"]= loadImage('/Turkey.png');
  
  }
  
  function setup() {
    var canvas = createCanvas(img.width, img.height);
    canvas.parent('canvas-container');
    image(img, 0, 0);
    logPositions();
  }
  
  function draw() {
    // Display the map image
    image(img, 0, 0);
  
    // Draw the image of each country
    for (let country in countrysData) {
      if (isMouseOverCountry(countrysData[country])) {
        displayCountryImage(country, countrysData[country]);
        break;
      }
    }
  }
  
  function isMouseOverCountry(countryData) {
    // Check if the mouse is within the country
    return mouseX > countryData.x && mouseX < countryData.x + countryData.width &&
           mouseY > countryData.y && mouseY < countryData.y + countryData.height;
  }
  
  function displayCountryImage(country, countryData) {
    image(countryImages[country], countryData.x, countryData.y, countryData.width, countryData.height);
    let boxWidth = textWidth(country) + 10; 
    let boxHeight = 20; 
    let boxX = countryData.x + (countryData.width - boxWidth) / 2;
    let boxY = countryData.y + countryData.height;

 
    fill(255);
    noStroke(); 
    rect(boxX, boxY, boxWidth, boxHeight);
    
    textStyle(BOLD);
  
    fill(0); 
    noStroke();
    textSize(18);
    textAlign(CENTER, CENTER);
    text(country, boxX + boxWidth / 2, boxY + boxHeight / 2);
  }
  
  
  function logPositions() {
    console.log("Current positions of the countries on the map:");
    for (let country in countrysData) {
      console.log(country + ": { x: " + countrysData[country].x + ", y: " + countrysData[country].y + ", width: " + countrysData[country].width + ", height: " + countrysData[country].height + " }");
    }
  }
  
  function mouseClicked() {
    console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");
    // log to find positions
    if (mouseX > 585 && mouseX < 645 &&
           mouseY > 299&& mouseY < 340 ){
            console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");{
             window.location.replace("/user/country/france")
            }
          }
    if (mouseX > 130 && mouseX < 330 &&
           mouseY > 294&& mouseY <  294+120){
            console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");{
             window.location.replace("/user/country/usa")
            }
           }
    if (mouseX > 565 && mouseX < 565+60 &&
           mouseY > 334&& mouseY < 334+50 ){
            console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");{
             window.location.replace("/user/country/spain")
            }
          }
    if (mouseX > 903 && mouseX < 903+170 &&
           mouseY > 326&& mouseY < 326+100 ){
            console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");{
             window.location.replace("/user/country/china")
            }
           }
    if (mouseX > 621 && mouseX < 621+60 &&
           mouseY > 322&& mouseY < 322+40 ){
            console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");{
             window.location.replace("/user/country/italy")
            }
          }
    if (mouseX > 583 && mouseX < 583+30&&
           mouseY > 250&& mouseY < 250+50 ){
            console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");{
             window.location.replace("/user/country/uk")
            }
           }
    if (mouseX > 623 && mouseX < 623+40 &&
           mouseY > 278&& mouseY < 278+40 ){
            console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");{
             window.location.replace("/user/country/germany")
            }
          }
    if (mouseX > 171 && mouseX < 171+100 &&
           mouseY > 390&& mouseY < 390+80 ){
            console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");{
             window.location.replace("/user/country/mexico")
            }
           }
    if (mouseX > 970 && mouseX < 970+45 &&
           mouseY > 440&& mouseY < 440+40 ){
            console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");{
             window.location.replace("/user/country/thailand")
            }
          }
    if (mouseX > 703 && mouseX < 703+48 &&
           mouseY > 340&& mouseY < 340+30 ){
            console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");{
             window.location.replace("/user/country/mexico")
            }
           }       
  }

