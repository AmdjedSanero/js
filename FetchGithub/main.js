/// Main Variables
let theInput = document.querySelector(".get-repos input");
let getBtn = document.querySelector(".get-repos .get-btn");
let reposData = document.querySelector(".show-data");

getBtn.onclick = function () {
  getRepos();
};

// get Repos function
function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "<span>Please write GitHub username</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`).then(
      (response)=>{
        return response.json();
      }
    ).then((repos)=>{
      reposData.innerHTML = ""
      repos.forEach(repo =>{
        console.log(repo.name);
        //create main Div
        let mainDiv = document.createElement("div")
        ///create text node 
        let reposName = document.createTextNode(repo.name)
        //append the text to main div
        mainDiv.appendChild(reposName)

        /// create repo url
        let theUrl = document.createElement("a");
        let theUrlText = document.createTextNode("Visit")
        theUrl.appendChild(theUrlText)
        //add href 
        theUrl.href = `https://github.com/${theInput.value}/${repo.name}`
        //set atrr blacnk
        theUrl.setAttribute("target","_blank")
        /////
        let starSpan = document.createElement("span")
        ///create text node 
        let starName = document.createTextNode(`Stars ${repo.stargazers_count}`)
        starSpan.appendChild(starName)
        mainDiv.appendChild(starSpan);
        mainDiv.appendChild(theUrl)



        /////
        reposData.appendChild(mainDiv)


      })
    }).catch((rej)=>console.log(Error("eeerrrrooorrr")))
  }
}

