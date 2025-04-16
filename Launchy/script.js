// ############################# Onload Functions ########################
function start() {
  localStorage.setItem("firstRun", "true");
  startTime();
  showDark();
  showWelcome();
  showGreet();
  showTimeDate();
  showWeather();
  showGitStats();
  showSearchBar();
  showBookmarks();
  showProfile();
  folderReload();
  linkReload();
}

function firstRun() {
  if (!localStorage.getItem("firstRun")) {
    defaultLayout();
  } else {
    start();
  }
}

// ############################# Settings ########################

function settingOpen() {
  document.querySelector("#settingsBg").style.setProperty("z-index", "1");
  document.querySelector("#settingsBg").style.setProperty("display", "flex");
  document.querySelector("#settings").style.setProperty("z-index", "2");
  document.querySelector("#settings").style.setProperty("display", "flex");
}
function settingClose() {
  document.querySelector("#settingsBg").style.setProperty("z-index", "-1");
  document.querySelector("#settingsBg").style.setProperty("display", "none");
  document.querySelector("#settings").style.setProperty("z-index", "-2");
  document.querySelector("#settings").style.setProperty("display", "none");
}

function showDark() {
  const Mode = localStorage.getItem("showDark");
  if (Mode) {
    // dark
    document.getElementById("showDark").checked = true;
    document.querySelector(":root").style.setProperty("--text", "#dddddd");
    document.querySelector(":root").style.setProperty("--bg", "#21232b");
    document
      .querySelector(":root")
      .style.setProperty("--blurColor", "#21232b30");
    document.getElementById("git").innerHTML = `
      <a href="https://github.com/${localStorage.getItem(
        "gitStats"
      )}" ><img src="https://github-readme-stats.vercel.app/api?username=${localStorage.getItem(
      "gitStats"
    )}&show_icons=true&locale=en&layout=compact&bg_color=21232b&border_color=21232b&text_color=7c818c&icon_color=5294e2&title_color=5294e2&hide_rank=true&line_height=20" /></a>
      <a href="https://github.com/${localStorage.getItem(
        "gitStats"
      )}?tab=repositories" ><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${localStorage.getItem(
      "gitStats"
    )}&layout=compact&bg_color=21232b&border_color=21232b&text_color=7c818c&icon_color=5294e2&title_color=5294e2&card_height=500" /></a>`;
  } else if (!Mode) {
    //  light
    document.querySelector(":root").style.setProperty("--text", "#00000");
    document.querySelector(":root").style.setProperty("--bg", "#dddddd");
    document
      .querySelector(":root")
      .style.setProperty("--blurColor", "#dddddd30");
    document.getElementById("showDark").checked = false;
    document.getElementById("git").innerHTML = `
  <a href="https://github.com/${localStorage.getItem(
    "gitStats"
  )}" ><img src="https://github-readme-stats.vercel.app/api?username=${localStorage.getItem(
      "gitStats"
    )}&show_icons=true&locale=en&layout=compact&bg_color=dddddd&border_color=dddddd&text_color=7c818c&icon_color=5294e2&title_color=5294e2&hide_rank=true&line_height=20" /></a>
  <a href="https://github.com/${localStorage.getItem(
    "gitStats"
  )}?tab=repositories" ><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${localStorage.getItem(
      "gitStats"
    )}&layout=compact&bg_color=dddddd&border_color=dddddd&text_color=7c818c&icon_color=5294e2&title_color=5294e2&card_height=500" /></a>`;
  }
  return;
}

function showWelcome() {
  const Welcome = localStorage.getItem("showWelcome");
  if (Welcome) {
    document.getElementById("showWelcome").checked = true;
    document.querySelector("#welcome").style.setProperty("display", "flex");
  } else if (!Welcome) {
    document.getElementById("showWelcome").checked = false;
    document.querySelector("#welcome").style.setProperty("display", "none");
  }
  document
    .querySelector("#welcome")
    .style.setProperty(
      "background-image",
      `url("${localStorage.getItem("background")}")`
    );
  return;
}

function showGreet() {
  const Greet = localStorage.getItem("showGreet");
  if (Greet) {
    document.getElementById("showGreet").checked = true;
    document.querySelector("#greet").style.setProperty("display", "flex");
    greet();
  } else if (!Greet) {
    document.getElementById("showGreet").checked = false;
    document.querySelector("#greet").style.setProperty("display", "none");
  }
  return;
}

function showProfile() {
  const profile = localStorage.getItem("showProfile");
  document.getElementById(
    "profileImg"
  ).innerHTML = `<img id="profile" src="${localStorage.getItem(
    "smallImg"
  )}" />`;
  if (profile) {
    document.getElementById("showProfile").checked = true;
    document.querySelector("#profile").style.setProperty("display", "flex");
  } else if (!profile) {
    document.getElementById("showProfile").checked = false;
    document.querySelector("#profile").style.setProperty("display", "none");
  }
  return;
}

function showTimeDate() {
  const timeDate = localStorage.getItem("showTimeDate");
  if (timeDate) {
    document.getElementById("showTimeDate").checked = true;
    document.querySelector(".timeDate").style.setProperty("display", "flex");
  } else if (!timeDate) {
    document.getElementById("showTimeDate").checked = false;
    document.querySelector(".timeDate").style.setProperty("display", "none");
  }
  return;
}

function showWeather() {
  const Weather = localStorage.getItem("showWeather");
  if (Weather) {
    document.getElementById("showWeather").checked = true;
    document.querySelector("#weather").style.setProperty("display", "flex");
  } else if (!Weather) {
    document.getElementById("showWeather").checked = false;
    document.querySelector("#weather").style.setProperty("display", "none");
  }
  return getWeather();
}

function showGitStats() {
  const gitStats = localStorage.getItem("showGitStats");
  if (gitStats) {
    document.getElementById("showGitStats").checked = true;
    document.querySelector("#git").style.setProperty("display", "flex");
  } else if (!gitStats) {
    document.getElementById("showGitStats").checked = false;
    document.querySelector("#git").style.setProperty("display", "none");
  }
  return;
}

function showSearchBar() {
  document.getElementsByClassName(
    "search"
  )[0].placeholder = `Searching with ${localStorage.getItem("engine")}`;
  document.getElementById(
    "searchIcon"
  ).innerHTML = `<img id="searchImg" src='https://www.google.com/s2/favicons?domain=https://${localStorage.getItem(
    "engine"
  )}/&sz=128'></img>`;
  localStorage.setItem("engine", document.getElementById("searchBar").value);
  const searchBar = localStorage.getItem("showSearchBar");
  if (searchBar) {
    document.getElementById("showSearchBar").checked = true;
    document.querySelector("#search").style.setProperty("display", "flex");
  } else if (!searchBar) {
    document.getElementById("showSearchBar").checked = false;
    document.querySelector("#search").style.setProperty("display", "none");
  }
  return;
}

function showBookmarks() {
  const Bookmarks = localStorage.getItem("showBookmarks");
  if (Bookmarks) {
    document.getElementById("showBookmarks").checked = true;
    document.querySelector("#bookmarks").style.setProperty("display", "flex");
  } else if (!Bookmarks) {
    document.getElementById("showBookmarks").checked = false;
    document.querySelector("#bookmarks").style.setProperty("display", "none");
  }
  return;
}

function defaultLayout() {
  localStorage.clear();
  localStorage.setItem("showDark", "true");
  localStorage.setItem("showWelcome", "true");
  localStorage.setItem("showGreet", "true");
  localStorage.setItem("showTimeDate", "true");
  localStorage.setItem("showSearchBar", "true");
  localStorage.setItem("engine", document.getElementById("searchBar").value);
  localStorage.setItem("showProfile", "");
  localStorage.setItem("showWeather", "");
  localStorage.setItem("showGitStats", "");
  localStorage.setItem("showBookmarks", "");
  localStorage.setItem("folders", `[]`);
  start();
}

//reset should be a default layout
document.getElementById("settingReset").addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("showDark", "true");
  localStorage.setItem("showWelcome", "true");
  localStorage.setItem("showGreet", "true");
  localStorage.setItem("showTimeDate", "true");
  localStorage.setItem("showSearchBar", "true");
  localStorage.setItem("engine", document.getElementById("searchBar").value);
  localStorage.setItem("showProfile", "");
  localStorage.setItem("showWeather", "");
  localStorage.setItem("showGitStats", "");
  localStorage.setItem("showBookmarks", "");
  location.reload();
});

document.getElementById("settingSave").addEventListener("click", () => {
  //saving toggle states
  document.getElementById("showDark").checked
    ? localStorage.setItem("showDark", "true")
    : localStorage.setItem("showDark", "");
  document.getElementById("showWelcome").checked
    ? localStorage.setItem("showWelcome", "true")
    : localStorage.setItem("showWelcome", "");
  document.getElementById("showGreet").checked
    ? localStorage.setItem("showGreet", "true")
    : localStorage.setItem("showGreet", "");
  document.getElementById("showProfile").checked
    ? localStorage.setItem("showProfile", "true")
    : localStorage.setItem("showProfile", "");
  document.getElementById("showTimeDate").checked
    ? localStorage.setItem("showTimeDate", "true")
    : localStorage.setItem("showTimeDate", "");
  document.getElementById("showWeather").checked
    ? localStorage.setItem("showWeather", "true")
    : localStorage.setItem("showWeather", "");
  document.getElementById("showGitStats").checked
    ? localStorage.setItem("showGitStats", "true")
    : localStorage.setItem("showGitStats", "");
  document.getElementById("showSearchBar").checked
    ? localStorage.setItem("showSearchBar", "true")
    : localStorage.setItem("showSearchBar", "");
  document.getElementById("showBookmarks").checked
    ? localStorage.setItem("showBookmarks", "true")
    : localStorage.setItem("showBookmarks", "");

  //saving text boxes values
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem(
    "background",
    document.getElementById("background").value
  );
  localStorage.setItem("smallImg", document.getElementById("smallImg").value);
  localStorage.setItem("postcode", document.getElementById("postcode").value);
  localStorage.setItem(
    "countryCode",
    document.getElementById("countryCode").value
  );
  localStorage.setItem("apiKey", document.getElementById("apiKey").value);
  localStorage.setItem("gitStats", document.getElementById("gitStats").value);
  localStorage.setItem("engine", document.getElementById("searchBar").value);

  showDark();
  showWelcome();
  showGreet();
  showTimeDate();
  showWeather();
  showGitStats();
  showSearchBar();
  showBookmarks();
  showProfile();
  settingClose();
});

// displaying settings

document.getElementById("name").value = localStorage.getItem("name");
document.getElementById("background").value =
  localStorage.getItem("background");
document.getElementById("smallImg").value = localStorage.getItem("smallImg");
document.getElementById("postcode").value = localStorage.getItem("postcode");
document.getElementById("countryCode").value =
  localStorage.getItem("countryCode");
document.getElementById("apiKey").value = localStorage.getItem("apiKey");
document.getElementById("gitStats").value = localStorage.getItem("gitStats");

const folders = JSON.parse(localStorage.getItem("folders"));
const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

document.getElementById("removeFolder").addEventListener("click", () => {
  folders.splice(document.getElementById("folderSelect").value, 1);
  localStorage.setItem("folders", JSON.stringify(folders));
  b = bookmarks.filter(
    (e) => e.folder === document.getElementById("folderSelect").value
  );
  b.forEach((f) => {
    bookmarks.splice(
      bookmarks.findIndex((e) => e.folder === f.folder),
      1
    );
    document
      .getElementById("linkSelect")
      .removeChild(bookmarks.findIndex((e) => e.folder === f.folder));
    document
      .getElementById("folderSelect")
      .removeChild(
        document.getElementById(document.getElementById("folderSelect").value)
      );
  });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  document
    .getElementById("folderHeader")
    .removeChild(
      document.getElementById(document.getElementById("folderSelect").value)
    );

  document.getElementById("folderSelect").value = "";
  folderReload();
  linkReload();
});

document.getElementById("removeLink").addEventListener("click", () => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  document
    .getElementById(
      bookmarks[document.getElementById("linkSelect").value].folder
    )
    .removeChild(
      document.getElementById(
        bookmarks[document.getElementById("linkSelect").value].name
      )
    );
  bookmarks.splice(document.getElementById("linkSelect").value, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  document
    .getElementById("linkSelect")
    .removeChild(
      document.getElementById("linkSelect").children[
        document.getElementById("linkSelect").value
      ]
    );
  //document.getElementById("linkSelect").value = "";
  //linkReload();
});

// ############################# CLOCK ########################

// future set up for toggle 12 and 24 hour
function startTime() {
  const today = new Date();
  let h = today.getHours() > 12 ? today.getHours() % 12 : today.getHours();
  let m = today.getMinutes();
  let ampm = today.getHours() >= 12 ? "PM" : "AM";
  m = checkTime(m);
  //s = checkTime(s);
  document.getElementById("clock").innerHTML = `<h1> ${h}:${m} ${ampm}</h1>`;
  setTimeout(startTime, 1000);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();

  document.getElementById("date").innerHTML = `<h2> ${
    weekday[today.getDay()]
  }, ${day}/${month}/${year}</h2>`;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

// ############################# Greeting ########################

function greet() {
  if (new Date().getHours() >= 12) {
    timeOfDay = "Afternoon";
  }

  if (new Date().getHours() < 12) {
    timeOfDay = "Morning";
  }

  if (new Date().getHours() >= 17) {
    timeOfDay = "Evening";
  }

  if (new Date().getHours() >= 21) {
    timeOfDay = "Night";
  }
  const greetName = !localStorage.getItem("name")
    ? " "
    : `, ${localStorage.getItem("name")}`;
  document.getElementById("greet").innerHTML = `Good ${timeOfDay}${greetName}`;
}

// ############################# search bar ########################

// works with enter too, sshhh not sure how but its a feature!!
document
  .getElementById("searchBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let query = document.getElementsByClassName("search")[0].value;
    let url = `https://${localStorage.getItem("engine")}/search?q=${query}`;
    window.location = url;
  });

// ############################# Weather API ########################

function getLocation() {
  const apiKey = `${localStorage.getItem("apiKey")}`;
  const zipCode = document.getElementById("postcode").value;
  const countryCode = document.getElementById("countryCode").value;
  const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${apiKey}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("lat", data.lat);
      localStorage.setItem("lon", data.lon);
    });
}

function getWeather() {
  getLocation();
  const apiKey = `${localStorage.getItem("apiKey")}`; // inactive Testing only
  const lat = localStorage.getItem("lat");
  const lon = localStorage.getItem("lon");
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const currTemp = document.getElementById("currTemp");
      const currImg = document.getElementById("currImg");
      const currDescription = document.getElementById("currDescription");
      const days = document.getElementById("weatherDays");
      const daysImg = document.getElementById("daysImg");
      const daysDescription = document.getElementById("daysDescription");

      // DAYS
      const today = new Date();
      const weekday = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];

      // Today
      const descript = data.current.weather[0].description;
      const temp = data.current.temp;
      const icon = data.current.weather[0].icon;
      const currMin = data.daily[0].temp.min;
      const currMax = data.daily[0].temp.max;

      currTemp.innerHTML = `${Math.round(temp)}°`;
      currImg.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"></img>`;
      currDescription.innerHTML = ` ${descript}, High ${Math.round(
        currMax
      )}° | Low ${Math.round(currMin)}°`;

      // Day 1
      const day1Name =
        `${today.getDay() + 1}` > 6
          ? `${weekday[0]}`
          : `${weekday[today.getDay() + 1]}`;
      const day1ImgData = data.daily[1].weather[0].icon;
      const day1Img = `<img src="https://openweathermap.org/img/wn/${day1ImgData}.png"></img>`;
      const day1Descrit = data.daily[1].weather[0].description;

      // Day 2
      const day2Name =
        `${today.getDay() + 1}` > 6
          ? `${weekday[0]}`
          : `${weekday[today.getDay() + 1]}`;
      const day2ImgData = data.daily[2].weather[0].icon;
      const day2Img = `<img src="https://openweathermap.org/img/wn/${day2ImgData}.png"></img>`;
      const day2Descrit = data.daily[2].weather[0].description;

      // Day 3
      const day3Name =
        `${today.getDay() + 2}` > 6
          ? `${weekday[0]}`
          : `${weekday[today.getDay() + 2]}`;
      const day3ImgData = data.daily[3].weather[0].icon;
      const day3Img = `<img src="https://openweathermap.org/img/wn/${day3ImgData}.png"></img>`;
      const day3Descrit = data.daily[3].weather[0].description;

      days.innerHTML = `<div id=day1> ${day1Name} </div><div id=day1Img>${day1Img}</div><div id=day1> ${day1Descrit} </div>`;
      daysImg.innerHTML = `<div id=day2> ${day2Name} </div><div id=day2Img>${day2Img}</div><div id=day2> ${day2Descrit} </div>`;
      daysDescription.innerHTML = `<div id=day3> ${day3Name} </div><div id=day3Img>${day3Img}</div><div id=day3> ${day3Descrit} </div>`;
    });
}

//   Calling weather 4 times a day i needed.

/*function newWeather() {
  if (new Date().getHours() === 6) {
    getWeather();
  }
  if (new Date().getHours() === 12) {
    getWeather();
  }
  if (new Date().getHours() === 15) {
    getWeather();
  }
  if (new Date().getHours() === 5) {
    getWeather();
  }
}
*/

document.getElementById("folderSaveBtn").addEventListener("click", () => {
  const folders = JSON.parse(localStorage.getItem("folders"));
  //new Folder Name
  let folderName = document.getElementById("folderName").value;
  //folders Array that is made at start
  var oldFolder = folders;
  // push new Folder Name into old Array
  oldFolder.push(folderName);
  // reload the the new and old array to local storage again
  localStorage.setItem("folders", JSON.stringify(oldFolder));
  const folderDropdown = document.createElement("option");
  folderDropdown.setAttribute("value", folders.length - 1);
  folderDropdown.innerText = folderName;
  document.getElementById("folderSelect").append(folderDropdown);
  const folderHeader = document.createElement("div");
  folderHeader.id = folders.length - 1;
  folderHeader.innerHTML = folderName;
  document.getElementById("folderHeader").append(folderHeader);
  document.getElementById("folderName").value = "";
});

function folderReload() {
  const folders = JSON.parse(localStorage.getItem("folders"));
  for (let i = 0; i < folders.length; i++) {
    const folderDropdown = document.createElement("option");
    folderDropdown.setAttribute("value", i);
    folderDropdown.textContent = folders[i];
    if (!localStorage.getItem("folders")) {
      document.getElementById("folderSelect").value = "";
    }
    document.getElementById("folderSelect").appendChild(folderDropdown);
    const folderHeader = document.createElement("div");
    folderHeader.id = document.getElementById("folderSelect")[i].value;
    folderHeader.innerHTML = folders[i];
    document.getElementById("folderHeader").appendChild(folderHeader);
  }
}

document.getElementById("linkSaveBtn").addEventListener("click", () => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  if (!bookmarks) {
    localStorage.setItem("bookmarks", `[]`);
    // New link Name as object
    const newLink = {
      folder: `${document.getElementById("folderSelect").value}`,
      name: `${document.getElementById("bookmarkLinkName").value}`,
      bookmarkUrl: `${document.getElementById("bookmarkLinkUrl").value}`,
      siteIcon: `https://www.google.com/s2/favicons?domain=${
        document.getElementById("bookmarkLinkUrl").value
      }&sz=128`,
    };
    //folders Array that is made at start
    var oldFolder = JSON.parse(localStorage.getItem("bookmarks"));
    // push new Folder Name object into old Array
    oldFolder.push(newLink);
    // reload the the new and old array to local storage again
    localStorage.setItem("bookmarks", JSON.stringify(oldFolder));
    document.getElementById("bookmarkLinkName").value = "";
    document.getElementById("bookmarkLinkUrl").value = "";
    linkReload();
  } else {
    // New link Name as object
    const newLink = {
      folder: `${document.getElementById("folderSelect").value}`,
      name: `${document.getElementById("bookmarkLinkName").value}`,
      bookmarkUrl: `${document.getElementById("bookmarkLinkUrl").value}`,
      siteIcon: `https://www.google.com/s2/favicons?domain=${
        document.getElementById("bookmarkLinkUrl").value
      }&sz=128`,
    };
    //folders Array that is made at start
    var oldFolder = JSON.parse(localStorage.getItem("bookmarks"));
    // push new Folder Name object into old Array
    oldFolder.push(newLink);
    // reload the the new and old array to local storage again
    localStorage.setItem("bookmarks", JSON.stringify(oldFolder));

    const linkDropdown = document.createElement("option");
    linkDropdown.setAttribute("value", bookmarks.length);
    linkDropdown.innerText = newLink.name;
    document.getElementById("linkSelect").append(linkDropdown);

    const linkImg = document.createElement("img");
    linkImg.id = "linkImg";
    linkImg.src = newLink.siteIcon;

    const linkDiv = document.createElement("div");
    linkDiv.id = "link";
    linkDiv.innerText = newLink.name;
    linkDiv.append(linkImg);

    const linkA = document.createElement("a");
    linkA.id = newLink.name;
    linkA.href = newLink.bookmarkUrl;
    linkA.append(linkDiv);

    document.getElementById(newLink.folder).append(linkA);
    document.getElementById("bookmarkLinkName").value = "";
    document.getElementById("bookmarkLinkUrl").value = "";
  }
});

function linkReload() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  for (let i = 0; i < bookmarks.length; i++) {
    const linkDropdown = document.createElement("option");
    linkDropdown.setAttribute("value", i);

    linkDropdown.textContent = bookmarks[i].name;
    if (!localStorage.getItem("bookmarks")) {
      document.getElementById("linkSelect").value = "";
    }
    document.getElementById("linkSelect").append(linkDropdown);

    const linkImg = document.createElement("img");
    linkImg.id = "linkImg";
    linkImg.src = bookmarks[i].siteIcon;

    const linkDiv = document.createElement("div");
    linkDiv.id = "link";
    linkDiv.innerText = bookmarks[i].name;
    linkDiv.append(linkImg);

    const linkA = document.createElement("a");
    linkA.id = bookmarks[i].name;
    linkA.href = bookmarks[i].bookmarkUrl;
    linkA.append(linkDiv);

    document.getElementById(bookmarks[i].folder).append(linkA);
  }
}
