document.getElementById(img="Rome").addEventListener("click", () => {
    alert("Friends and me in Rome!");
  });
document.getElementById("Billionaires Bay").addEventListener("click", () => {
    alert("Billionaires Bay in Antibes, France");
  });
document.getElementById("Youtube").addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=QrR_gm6RqCo"; // Replace with your desired link
  });

  // image changing //
  const myImage = document.getElementById("Billionaires Bay");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "AntibesBB.png") {
    myImage.setAttribute("src", "Swimming.png");
  } else {
    myImage.setAttribute("src", "AntibesBB.png");
  }
};

  
  

  
