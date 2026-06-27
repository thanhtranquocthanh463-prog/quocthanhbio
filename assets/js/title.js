var titles = [
  "@",
  "@L",
  "@Le",
  "@LeH",
  "@LeHo",
  "@LeHoa",
  "@LeHoan",
  "@LeHoang",
  "@LeHoan",
  "@LeHoa",
  "@LeHo",
  "@LeH",
  "@Le",
  "@L"
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
