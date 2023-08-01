// selecting
const hackerCode = document.querySelector(".code")
const startTyping = document.querySelector(".startBtn")
const randomId = document.querySelector(".random_id")
const acsessGrantedWindow = document.querySelector(".acsess_granted")
const closeAcsessGrantedWindow = document.querySelector(".close-acsess_granted")
const initializedWindow = document.querySelector(".initialized")
const closeInitializeddWindow = document.querySelector(".close-initialized")

// random number for heading
randomId.textContent = Math.trunc(Math.random() * 5676)

// hibberish gibberish code
const hackerCodeWords = [
  "[private bool.isHacking];",
  "public object.consoleTop.document({(*isHacking)})",
  "IEnumerator855 ID.#87dsg(`898930`})",
  `{Issue: !== elements.released:bool; ID = %78784[];;}`,
  "......",
  "[{error 38936}]",
  "II.hackClient40.index:float",
  "private hackClient === querySelecter.extractAll(hackComputer)",
  "-",
  "--",
  `<account.DefaultLevels>(Elements.delete["\steal/"]);`,
  "navator.appVersion[{floatID !== %78784} (^&&^) userAgent.fireHack];",
  "Network8589(array.[http://127.0.0.1:5500/](%&&#))",
  `{
    public XMLHttp/Requests()
    {
        userAction.Show_CORSSS-ID#838304[];
        asynchronous.Response["/7834/"] {
            message.{RECEIVEDCHANNEL !== ID#365436}
        }
    }
  }`,
  "UnCheckedRuntime.((last_Error)[II.ElementSelecter|7438|])",
  `Fabric.interpereter(sceneIDF{#83734})
  {
      compiler.identifier({DELETECHANNEL_ID#47657567})
  }`,
]

document.addEventListener("keydown", function (e) {
  // any key
  const isSpecial = ["Escape", "Tab", "Backspace", "Alt", "Control"].includes(e.key)
  if (!isSpecial) {
    console.log(e.key)

    startTyping.classList.add("hidden")
    hackerCode.textContent += hackerCodeWords[Math.trunc(Math.random() * 14)]
    window.scrollTo(0, document.body.scrollHeight)
  }

  // acsess granted
  if (e.key === "Alt") {
    startTyping.classList.add("hidden")
    acsessGrantedWindow.classList.remove("hidden")
  }

  // inicialized
  if (e.key === "Control" || e.key === "Command") {
    startTyping.classList.add("hidden")
    initializedWindow.classList.remove("hidden")
  }
})

closeAcsessGrantedWindow.addEventListener("click", () => {
  acsessGrantedWindow.classList.add("hidden")
})

closeInitializeddWindow.addEventListener("click", () => {
  initializedWindow.classList.add("hidden")
})
