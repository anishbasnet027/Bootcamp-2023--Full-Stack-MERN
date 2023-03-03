function diceRoll() {
    const imgArray = ["assets/1.png","assets/2.png","assets/3.png","assets/4.png","assets/5.png","assets/6.png"];
    const randomIndex1 = Math.floor(Math.random() * imgArray.length);
    const randomIndex2 = Math.floor(Math.random() * imgArray.length);
    document.getElementById("img1").src=imgArray[randomIndex1];
    document.getElementById("img2").src=imgArray[randomIndex2];
    if (randomIndex1 > randomIndex2) {
        console.log("Player 1 is winner");
        document.getElementById("title").innerHTML = "Player 1 is Winner";
      } else {
        console.log("Player 2 is winner");
        document.getElementById("title").innerHTML = "Player 2 is Winner";
      }
}