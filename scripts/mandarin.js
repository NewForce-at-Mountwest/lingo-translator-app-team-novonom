const mandarinData = {
    name: "Mandarin",
    notablePeople: [
      "Herbert Hoover",
      "Koji Yano",
      "Mark Henry Rowswell",
      "Mark Zuckerberg",
      "Ming Na Wen",
      "John Cena",
      "Kevin Rudd",
      "Park Geun-hye",
      "Vanessa Branch",
      "Mira Sorvino",
      "Bob Woodruff",
      "Takeshi Kaneshiro",
      "Lou Jing"
    ],
    funFacts: {
      relatedLanguages: ["Korean", "Japanese"],
      lettersInAlphabet: 50000,
      numberOfSpeakers: "about 900 million",
      mandrinInfo: {
        dialectInfo: "Mandrin is one of many different Chinese dialects. It is mainly spoken in North and Southeast China",
        chineseDialects: ["Mandarin", "Wu", "Gan", "Xiang", "Hakka", "Yue", "Min"]
      }
    },
    countriesSpoken: [
      "China",
      "Singapore",
      "Taiwan"
    ],
    dictionary: {
      hello: "你好",
      goodbye: "再见",
      thankYou: "谢谢",
      goodEvening: "晚上好",
      howAreYou: "你好吗",
      whatsYourName: " 你叫什么名字"
    }
  }
  document.querySelector("#mandarin").addEventListener("click", function(){
    const pageContentContainer = document.querySelector("#language-container");
    pageContentContainer.innerHTML = h1(mandarinData.name, "mandarin-heading")  
  pageContentContainer.innerHTML += funFactsData(mandarinData)
  pageContentContainer.innerHTML += 
  `<h4>Dialect Info</h4>
  <p>${mandarinData.funFacts.mandrinInfo.dialectInfo}</p>
  <h4>Chinese Dialects</h4>
  <p>${mandarinData.funFacts.mandrinInfo.chineseDialects}</p>`
})
  
  



