

// Question to ask the user
const questions = [
    {
        question: "What is your current fitness level?",
        answers: [
            { option: "Beginner", category: "fitnessLevel", value: 1 },
            { option: "Intermediate", category: "fitnessLevel", value: 2 },
            { option: "Advanced", category: "fitnessLevel", value: 3 },
            { option: "Elite", category: "fitnessLevel", value: 4 }
        ]
    },
    {
        question: "How many days per week can you work out?",
        answers: [
            { option: "1-2 Days", category: "frequency", value: 1 },
            { option: "3-4 Days", category: "frequency", value: 2 },
            { option: "5-6 Days", category: "frequency", value: 3 },
            { option: "7 Days", category: "frequency", value: 4 }
        ]
    },
    {
        question: "What is your primary goal?",
        answers: [
            { option: "Weight Loss", category: "goal", value: 1 },
            { option: "Muscle Gain", category: "goal", value: 2 },
            { option: "Endurance", category: "goal", value: 3 },
            { option: "Flexibility", category: "goal", value: 4 }
        ]
    },
    {
        question: "What type of workouts do you prefer?",
        answers: [
            { option: "Cardio", category: "workoutType", value: 1 },
            { option: "Strength Training", category: "workoutType", value: 2 },
            { option: "Yoga/Pilates", category: "workoutType", value: 3 },
            { option: "High-Intensity Interval Training (HIIT)", category: "workoutType", value: 4 }
        ]
    },
    {
        question: "Do you have any injuries or health conditions?",
        answers: [
            { option: "Yes", category: "injuries", value: 1 },
            { option: "No", category: "injuries", value: 2 }
        ]
    },
    {
        question: "What equipment do you have access to?",
        answers: [
            { option: "None", category: "equipment", value: 1 },
            { option: "Dumbbells", category: "equipment", value: 2 },
            { option: "Resistance Bands", category: "equipment", value: 3 },
            { option: "Gym Membership", category: "equipment", value: 4 }
        ]
    },
    {
        question: "How much time can you dedicate to each workout session?",
        answers: [
            { option: "30 minutes", category: "sessionTime", value: 1 },
            { option: "45 minutes", category: "sessionTime", value: 2 },
            { option: "1 hour", category: "sessionTime", value: 3 },
            { option: "More than 1 hour", category: "sessionTime", value: 4 }
        ]
    },
    {
        question: "What is your age range?",
        answers: [
            { option: "Under 18", category: "age", value: 1 },
            { option: "18-24", category: "age", value: 2 },
            { option: "25-34", category: "age", value: 3 },
            { option: "35 and older", category: "age", value: 4 }
        ]
    },
    {
        question: "How would you rate your nutrition knowledge?",
        answers: [
            { option: "Basic", category: "nutritionKnowledge", value: 1 },
            { option: "Intermediate", category: "nutritionKnowledge", value: 2 },
            { option: "Advanced", category: "nutritionKnowledge", value: 3 },
            { option: "Expert", category: "nutritionKnowledge", value: 4 }
        ]
    },
    {
        question: "How do you prefer to track your progress?",
        answers: [
            { option: "Fitness Apps", category: "progressTracking", value: 1 },
            { option: "Journal/Notebook", category: "progressTracking", value: 2 },
            { option: "Not tracking", category: "progressTracking", value: 3 },
            { option: "Wearable Devices", category: "progressTracking", value: 4 }
        ]
    },
    {
        question: "What time of day do you prefer to work out?",
        answers: [
            { option: "Morning", category: "workoutTime", value: 1 },
            { option: "Afternoon", category: "workoutTime", value: 2 },
            { option: "Evening", category: "workoutTime", value: 3 },
            { option: "No preference", category: "workoutTime", value: 4 }
        ]
    },
    {
        question: "How do you stay motivated to work out?",
        answers: [
            { option: "Workout Buddy", category: "motivation", value: 1 },
            { option: "Personal Goals", category: "motivation", value: 2 },
            { option: "Fitness Classes", category: "motivation", value: 3 },
            { option: "Online Communities", category: "motivation", value: 4 }
        ]
    },
    {
        question: "Are you open to trying new workout styles?",
        answers: [
            { option: "Yes", category: "openToNewStyles", value: 1 },
            { option: "No", category: "openToNewStyles", value: 2 }
        ]
    },
    {
        question: "Do you have a preference for indoor or outdoor workouts?",
        answers: [
            { option: "Indoor", category: "workoutLocation", value: 1 },
            { option: "Outdoor", category: "workoutLocation", value: 2 },
            { option: "No preference", category: "workoutLocation", value: 3 }
        ]
    },
    {
        question: "How often do you assess your fitness progress?",
        answers: [
            { option: "Weekly", category: "progressAssessment", value: 1 },
            { option: "Monthly", category: "progressAssessment", value: 2 },
            { option: "Every few months", category: "progressAssessment", value: 3 },
            { option: "Rarely", category: "progressAssessment", value: 4 }
        ]
    }
];


// Store the selected answers categorized by question type
let userAnswers = {
  fitnessLevel:      0,
  frequency:         0,
  goal:              0,
  workoutType:       0,
  injuries:          0,
  equipment:         0,
  sessionTime:       0,
  age:               0,
  nutritionKnowledge:0,
  progressTracking:  0,
  workoutTime:       0,
  motivation:        0,
  openToNewStyles:   0,
  workoutLocation:   0,
  progressAssessment:0

};

// Function to handle answers and move to the next question
function submitAnswer(questionIndex, answerValue, category) {
    userAnswers[category] = answerValue;
    if (questionIndex + 1 < questions.length) {
        showQuestion(questionIndex + 1);
    } else {
        determineWorkoutPlan();
    }
}

// Function to determine workout plan based on categorized answers
function determineWorkoutPlan() {
    const {
        fitnessLevel,
        frequency,
        goal,
        workoutType,
        injuries,
        equipment,
        sessionTime,
        age,
        nutritionKnowledge,
        progressTracking,
        workoutTime,
        motivation,
        openToNewStyles,
        workoutLocation,
        progressAssessment
      } = userAnswers;

    // all the categories are here

    let workoutPlan;
    
// 1. Very light weight-loss
  if (
    fitnessLevel    <= 3 &&  // 1–3 → 75%
    frequency       <= 3 &&  // 1–3 → 75%
    goal            <= 2 &&  // 1–2 → 50%
    injuries        <= 2 &&  // both → 100%
    age             >= 2 &&  // 2–4 → 75%
    workoutTime     <= 2     // 1–2 → 50%
  ) {
    workoutPlan = 'workoutHTML/plan_1.html';

  // 2. Beginner muscle-gain
  } else if (
    fitnessLevel        <= 3 &&  // 1–3 → 75%
    frequency           <= 3 &&  // 1–3 → 75%
    goal                <= 3 &&  // 1–3 → 75%
    equipment           <= 3 &&  // 1–3 → 75%
    nutritionKnowledge  <= 3     // 1–3 → 75%
  ) {
    workoutPlan = 'workoutHTML/plan_2.html';

  // 3. Intermediate muscle-gain at gym
  } else if (
    fitnessLevel       >= 2 &&  // 2–4 → 75%
    frequency          >= 2 &&  // 2–4 → 75%
    goal               >= 2 &&  // 2–4 → 75%
    equipment          >= 3 &&  // 3–4 → 50%
    nutritionKnowledge >= 2     // 2–4 → 75%
  ) {
    workoutPlan = 'workoutHTML/plan_3.html';

  // 4. Intermediate HIIT weight-loss
  } else if (
    fitnessLevel  >= 2 &&  // 2–4 → 75%
    frequency     >= 2 &&  // 2–4 → 75%
    goal          <= 2 &&  // 1–2 → 50%
    workoutType   >= 2 &&  // 2–4 → 75%
    workoutTime   <= 2 &&  // 1–2 → 50%
    motivation    >= 2     // 2–4 → 75%
  ) {
    workoutPlan = 'workoutHTML/plan_4.html';

  // 5. Advanced outdoor endurance
  } else if (
    fitnessLevel      >= 2 &&  // 2–4 → 75%
    frequency         >= 2 &&  // 2–4 → 75%
    goal              >= 2 &&  // 2–4 → 75%
    workoutLocation   >= 2 &&  // outdoor or no pref → 66%
    injuries          <= 2 &&  // both → 100%
    age               >= 2 &&  // 2–4 → 75%
    progressTracking  >= 3     // 3–4 → 50%
  ) {
    workoutPlan = 'workoutHTML/plan_5.html';

  // 6. Elite max-endurance 
  } else if (
    fitnessLevel >= 3 &&  // 3–4 → 50%
    frequency    >= 3 &&  // 3–4 → 50%
    goal         >= 3 &&  // 3–4 → 50%
    injuries     <= 2 &&  // both → 100%
    motivation   >= 1     // always → 100%
  ) {
    workoutPlan = 'workoutHTML/plan_6.html';

  // 7. Advanced muscle-gain journaling
  } else if (
    fitnessLevel       >= 2 &&  // 2–4 → 75%
    frequency          <= 3 &&  // 1–3 → 75%
    goal               >= 2 &&  // 2–4 → 75%
    progressTracking   >= 2 &&  // 2–4 → 75%
    workoutTime        >= 3     // 3–4 → 50%
  ) {
    workoutPlan = 'workoutHTML/plan_7.html';

  // 8. Intermediate yoga/Pilates
  } else if (
    fitnessLevel    <= 3 &&  // 1–3 → 75%
    frequency       >= 2 &&  // 2–4 → 75%
    goal            >= 3 &&  // 3–4 → 50%
    workoutType     >= 3 &&  // 3–4 → 50%
    openToNewStyles === 1    // Yes → 50%
  ) {
    workoutPlan = 'workoutHTML/plan_8.html';

  // 9. Beginner 30-min endurance
  } else if (
    fitnessLevel <= 2 &&  // 1–2 → 50%
    frequency    <= 3 &&  // 1–3 → 75%
    goal         >= 3 &&  // 3–4 → 50%
    sessionTime  <= 2     // 1–2 → 50%
  ) {
    workoutPlan = 'workoutHTML/plan_9.html';

  // 10. General “adventure” plan
  } else if (
    progressAssessment === 2 &&  // Monthly → 25%
    workoutLocation   <= 2      // Indoor or no pref → 66%
  ) {
    workoutPlan = 'workoutHTML/plan_10.html';
  }

  // Fallback: if nothing matched, send to Plan 0
  if (!workoutPlan) {
    workoutPlan = 'workoutHTML/plan_0.html';
  }

  window.location.href = workoutPlan;
}


// Function to go back to the previous question
function goBack(questionIndex) {
    if (questionIndex > 0) {
        showQuestion(questionIndex - 1);
    }
}

// Function to display questions and options
function showQuestion(questionIndex) {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const backButtonElement = document.getElementById("backButton");

    questionElement.innerHTML = questions[questionIndex].question;
    optionsElement.innerHTML = "";

    // Display answers as brutalist-style buttons
    questions[questionIndex].answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("brutalist-button");  

        // Add the inner HTML structure
        button.innerHTML = `
            <div class="ms-logo">
                <div class="ms-logo-square"></div>
                <div class="ms-logo-square"></div>
                <div class="ms-logo-square"></div>
                <div class="ms-logo-square"></div>
            </div>
            <div class="button-text">
                <span>${answer.option}</span>
            </div>
        `;

        // Add event listener to submit the answer and move to the next question
        button.onclick = () => submitAnswer(questionIndex, answer.value, answer.category);
        
        optionsElement.appendChild(button);
    });

    // Show "Back" button if not on the first question
    if (questionIndex > 0) {
        backButtonElement.style.display = 'block';
        backButtonElement.onclick = () => goBack(questionIndex);
    } else {
        backButtonElement.style.display = 'none';  // Hide the back button on the first question
    }
}

// Start by showing the first question
window.onload = function () {
    showQuestion(0);
};






