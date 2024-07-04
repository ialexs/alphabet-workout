document.getElementById('name').addEventListener('input', function(e) {
    let name = e.target.value.trim().toUpperCase();
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (name === '') {
        resultDiv.innerHTML = 'Please enter a name.';
        return;
    }

    // JSON data mapping alphabet to exercises
    const exercises = {
        "A": "50 Jumping Jacks",
        "B": "20 Crunches",
        "C": "30 Squats",
        "D": "15 Push-ups",
        "E": "1 Min Wall Sit",
        "F": "10 Burpees",
        "G": "20 sec Arm Circles",
        "H": "20 Squats",
        "I": "30 Jumping Jacks",
        "J": "15 Crunches",
        "K": "10 Push-ups",
        "L": "2 Min Wall Sit",
        "M": "20 Burpees",
        "N": "25 Burpees",
        "O": "40 Jumping Jacks",
        "P": "15 sec Arm Circles",
        "Q": "30 Crunches",
        "R": "15 Push-ups",
        "S": "30 Burpees",
        "T": "15 Squats",
        "U": "30 sec Arm Circles",
        "V": "3 Min Wall Sits",
        "W": "20 Burpees",
        "X": "60 Jumping Jacks",
        "Y": "10 Crunches",
        "Z": "20 Push-ups"
    };

    // Define <space> as a variable
    const space = ' ';

    // Generate and display workout
    let workoutResult = '';
    for (let char of name) {
        if (char === ' ') {
            workoutResult += '<br>'; // Adding a line break for space
        } else if (exercises[char]) {
            workoutResult += `${char}: ${exercises[char]}<br>`;
        } else {
            resultDiv.innerHTML = 'Please enter a valid name containing only letters and spaces.';
            return;
        }
    }
    resultDiv.innerHTML = workoutResult;
});

