function generateRandomExcept(list, length) {
  var num = Math.floor(Math.random() * length);
  if (list.indexOf(num, 0) !== -1) {
    num = generateRandomExcept(list, length);
  }
  return num;
}

function displaySkills(set, indexes, updated) {
  var list = $("#about-page li");
  for (var i = 0; i < indexes.length; i++) {
    if (i === updated) {
      $(list[i]).animate({ opacity: 0 }, 200, "linear", function() {
        $(this).animate({ opacity: 1 }, 200, "linear");
      });
    }
    $(list[i]).html(set[indexes[i]]);
  }
}

$(function() {
  var skillSet = [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "Node",
    "jQuery",
    "React",
    "Redux",
    "PHP",
    "ToroPHP",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Mongo",
    "Python",
    "Django",
    "Django-Rest-Framework",
    "Flask",
    "Docker",
    "Golang",
    "Gin",
    "C++",
    "Bash",
    "Git"
  ];
  var index = 3;
  var selected = [3, 6, 14, 18, 19];
  displaySkills(skillSet, selected, -1);
  setInterval(function() {
    index = generateRandomExcept([index], 5);
    selected[index] = generateRandomExcept(selected, skillSet.length);
    displaySkills(skillSet, selected, index);
  }, 1500);
});
