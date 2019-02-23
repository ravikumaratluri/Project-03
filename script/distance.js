document.getElementById('submit').addEventListener('click', function () {
  const dropValue = document.getElementById('input_type').value;
  let subOne = document.getElementById('sub_one').value;
  let subTwo = document.getElementById('sub_two').value;
  let subThree = document.getElementById('sub_three').value;
  let condition = "flase";
  let cars = ["A", "B", "C", "D", "F"];
  let gradeOne = "0.0";
  let gradeTwo = "0.0";
  let gradeThree = "0.0";
  if (dropValue == "gpa") {
    subOne = parseFloat(subOne);
    subTwo = parseFloat(subTwo);
    subThree = parseFloat(subThree);
    if (isNaN(subOne) || isNaN(subTwo) || isNaN(subThree)) {
      alert('You have selected GPA!' + '\n' + 'So, give the input in number form');
    } else if (subOne > 4.0 || subOne < 0.0 || subTwo > 4.0 || subTwo < 0.0
      || subThree > 4.0 || subThree < 0.0) {
      alert('Gpa should in between 0 to 4');
    } else {
      gradeOne = subOne;
      gradeTwo = subTwo;
      gradeThree = subThree;
      condition = "true";
    }

  } else {
    subOne = subOne.toUpperCase();
    subTwo = subTwo.toUpperCase();
    subThree = subThree.toUpperCase();
    if (!(isNaN(subOne) || isNaN(subTwo) || isNaN(subThree))) {
      alert('You have selected Grade!' + '\n' + 'So, give the input in grade form');
    } else if (!(cars.includes(subOne) && cars.includes(subTwo) && cars.includes(subThree))) {
      alert('Enter the grade any of following' + '\n' + 'A, B, C, D, F');
    } else {
      gradeOne = getGpa(subOne);
      gradeTwo = getGpa(subTwo);
      subThree = getGpa(subThree);
      condition = "true";
    }

  }
  let overAllGpa = (gradeOne + gradeTwo + gradeThree) / 3;
  let overAllGrade = getGrade(overAllGpa);
  if (condition == "true") {
    const ans = 'Over Grade is: ' + overAllGrade + '.' + '\n' + 'Over Gpa is: ' + overAllGpa;
    document.getElementById('result').innerHTML = ans;
    $.ajax({
      url: "https://api.icndb.com/jokes/random?limitTo=[nerdy]",
      cache: false,
      dataType: "json",
      type: "GET",
      success: function (result, success) {
        document.getElementById('jokeId').innerHTML = 'Relax with result and enjoy the joke: '
        + result.value.joke;
      },
      error: function (result, success) {
        console.log('error');
      }
    });
  } else {
    document.getElementById('result').innerHTML = "";
    document.getElementById('jokeId').innerHTML = "";

  }

});

document.getElementById('input_type').addEventListener('change', function(){
  let subOne = document.getElementById('sub_one');
  let subTwo = document.getElementById('sub_two');
  let subThree = document.getElementById('sub_three');
  if(this.value == "grade"){
    subOne.placeholder = "Enter Grade Value";
    subTwo.placeholder = "Enter Grade Value";
    subThree.placeholder = "Enter Grade Value";
  }else{
    subOne.placeholder = "Enter Gpa Value";
    subTwo.placeholder = "Enter Gpa Value";
    subThree.placeholder = "Enter Gpa Value";
  }
  subOne.value = "";
  subTwo.value = "";
  subThree.value = "";
});


function getGpa(s) {
  if (s == "A") {
    return 4.0;
  } else if (s == "B") {
    return 3.0;
  } else if (s == "C") {
    return 2.0;
  } else if (s == "D") {
    return 1.0;
  } else if (s == "F") {
    return 0.0;
  }
}

function getGrade(s) {
  if (s > 3.0) {
    return "A";
  } else if (s > 2.0) {
    return "B";
  } else if (s > 1.0) {
    return "C";
  } else if (s > 0.0) {
    return "D";
  } else {
    return "F";
  }
}

