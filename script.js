
"use strict";

/*
  CodeQuest CEP Dashboard
  All data is embedded in this file.
  The included student records are SAMPLE DATA from the workbook.
*/

const QUESTIONS = [
  {
    id: 1, section: "A: Computer Basics",
    text: 'Which device is the "brain" of a computer?',
    short: "Computer brain", correct: "B"
  },
  {
    id: 2, section: "A: Computer Basics",
    text: "What do we use to type letters and numbers?",
    short: "Typing device", correct: "A"
  },
  {
    id: 3, section: "A: Computer Basics",
    text: "Who gives instructions to a computer?",
    short: "Instructions", correct: "C"
  },
  {
    id: 4, section: "A: Computer Basics",
    text: 'What is a "program"?',
    short: "Program", correct: "B"
  },
  {
    id: 5, section: "B: Algorithms & Logic",
    text: "What is an algorithm?",
    short: "Algorithm", correct: "A"
  },
  {
    id: 6, section: "B: Algorithms & Logic",
    text: "Which is the correct order to make a cup of tea?",
    short: "Tea sequence", correct: "B"
  },
  {
    id: 7, section: "B: Algorithms & Logic",
    text: 'A robot is told: "Take 3 steps forward, then turn right." What does it do first?',
    short: "Robot steps", correct: "B"
  },
  {
    id: 8, section: "B: Algorithms & Logic",
    text: "What comes next in the pattern? Red, Blue, Red, Blue, Red, __",
    short: "Color pattern", correct: "B"
  },
  {
    id: 9, section: "B: Algorithms & Logic",
    text: 'What is a "bug" in coding?',
    short: "Coding bug", correct: "B"
  },
  {
    id: 10, section: "B: Algorithms & Logic",
    text: "Fixing mistakes in a program is called:",
    short: "Debugging", correct: "B"
  },
  {
    id: 11, section: "C: Programming Concepts",
    text: 'What does "repeat 5 times: clap" mean?',
    short: "Repeat command", correct: "B"
  },
  {
    id: 12, section: "C: Programming Concepts",
    text: "Repeating the same steps again and again is called a:",
    short: "Repeated steps", correct: "A"
  },
  {
    id: 13, section: "C: Programming Concepts",
    text: '"If it is raining, take an umbrella." This is an example of:',
    short: "If condition", correct: "B"
  },
  {
    id: 14, section: "C: Programming Concepts",
    text: "A box that stores a value, like score = 10, is called a:",
    short: "Stored value", correct: "A"
  },
  {
    id: 15, section: "C: Programming Concepts",
    text: "Your game score starts at 0 and you collect 1 coin. What is the score now?",
    short: "Game score", correct: "B"
  },
  {
    id: 16, section: "C: Programming Concepts",
    text: "Which of these is a programming language?",
    short: "Language", correct: "A"
  },
  {
    id: 17, section: "D: Games & Awareness",
    text: "Which tool lets kids make games by joining colorful blocks?",
    short: "Game tool", correct: "A"
  },
  {
    id: 18, section: "D: Games & Awareness",
    text: "In a maze game, which instruction helps the character reach the goal?",
    short: "Maze instruction", correct: "A"
  },
  {
    id: 19, section: "D: Games & Awareness",
    text: "Which is a good habit while using computers?",
    short: "Computer safety", correct: "B"
  },
  {
    id: 20, section: "D: Games & Awareness",
    text: "Coding can help you to:",
    short: "Coding benefits", correct: "D"
  }
];

// Answers are in Q1-to-Q20 order.
// Scores and percentages are recalculated from the answers.
const RAW_STUDENTS = [
  {
    name: "Student 1", className: "6", test: "Pre",
    answers: "BAAABBA BBBCABDBCAABBD".replace(/\s/g, "").split("")
  },
  {
    name: "Student 2", className: "6", test: "Pre",
    answers: "BAABB BADBBCCC BABBDAB D".replace(/\s/g, "").split("")
  },
  {
    name: "Student 3", className: "6", test: "Pre",
    answers: "AACACBDCB B B B B C A A C D C D D"
      .replace(/\s/g, "").split("")
  },
  {
    name: "Student 4", className: "6", test: "Pre",
    answers: "CACBBCBABBBBABDBABABD".slice(0, 20).split("")
  },
  {
    name: "Student 5", className: "6", test: "Pre",
    answers: "BABBADADDABDCABAAACD".split("")
  },
  {
    name: "Student 6", className: "6", test: "Post",
    answers: "BACBAB BDBBDABCB A AAB D"
      .replace(/\s/g, "").split("")
  },
  {
    name: "Student 7", className: "6", test: "Post",
    answers: "BAC CABBBABBABABAAA BA"
      .replace(/\s/g, "").split("")
  },
  {
    name: "Student 8", className: "6", test: "Post",
    answers: "BACBABBBB BBCBABBAABBD"
      .replace(/\s/g, "").split("")
  },
  {
    name: "Student 9", className: "6", test: "Post",
    answers: "BBCBAB BDBBBABACAAA BA"
      .replace(/\s/g, "").split("")
  },
  {
    name: "Student 10", className: "6", test: "Post",
    answers: "BDCCABBB BDBBAABBAAAD"
      .replace(/\s/g, "").split("")
  }
];

/*
  Correct the answer strings to the workbook's exact Q1-Q20 order.
  Keeping these arrays explicit makes the data easy to inspect.
*/
const ANSWER_DATA = [
  ["B","A","A","A","A","B","A","B","B","B","A","B","D","B","C","A","A","B","B","D"],
  ["B","A","A","B","B","B","A","D","B","C","C","C","B","A","B","B","D","A","B","D"],
  ["A","A","C","A","C","B","D","C","B","B","B","B","C","A","A","C","D","C","D","D"],
  ["C","A","C","B","B","C","B","A","B","B","B","A","B","D","B","A","B","A","B","D"],
  ["B","A","B","B","A","D","A","D","D","A","B","D","C","A","B","A","A","A","C","D"],
  ["B","A","C","B","A","B","B","D","B","B","D","A","B","C","B","A","A","A","B","D"],
  ["B","A","C","C","A","B","B","B","A","B","B","A","B","A","B","A","A","A","B","A"],
  ["B","A","C","B","A","B","B","B","B","B","B","C","B","A","B","B","A","A","B","D"],
  ["B","B","C","B","A","B","B","D","B","B","B","A","B","A","C","A","A","A","B","A"],
  ["B","D","C","C","A","B","B","B","B","D","B","A","B","B","A","A","A","A","B","D"]
];

const STUDENTS = RAW_STUDENTS.map((student, index) => {
  const answers = ANSWER_DATA[index];
  const score = answers.reduce((total, answer, qIndex) => {
    return total + (answer === QUESTIONS[qIndex].correct ? 1 : 0);
  }, 0);

  return {
    ...student,
    answers,
    score,
    percentage: score / QUESTIONS.length * 100
  };
});

const SECTIONS = [
  "A: Computer Basics",
  "B: Algorithms & Logic",
  "C: Programming Concepts",
  "D: Games & Awareness"
];

const SECTION_NAMES = {
  "A: Computer Basics": "Computer Basics",
  "B: Algorithms & Logic": "Algorithms & Logic",
  "C: Programming Concepts": "Programming Concepts",
  "D: Games & Awareness": "Games & Awareness"
};

const chartInstances = {};

const COLORS = {
  purple: "#6558e8",
  blue: "#438be4",
  green: "#18a77a",
  orange: "#e8a13c",
  red: "#e76e77",
  muted: "#8d96aa",
  grid: "#edf0f6"
};

const $ = (id) => document.getElementById(id);

function average(values) {
  return values.length
    ? values.reduce((sum, value) => sum + value, 0) / values.length
    : 0;
}

function filteredStudents() {
  const test = $("testFilter").value;
  return STUDENTS.filter(student =>
    test === "All" || student.test === test
  );
}

function filteredQuestions() {
  const section = $("sectionFilter").value;
  return QUESTIONS.filter(question =>
    section === "All" || question.section === section
  );
}

function getSectionStats(students) {
  return SECTIONS.map(section => {
    const questions = QUESTIONS.filter(q => q.section === section);
    let correct = 0;
    let answered = 0;

    students.forEach(student => {
      questions.forEach(question => {
        const answer = student.answers[question.id - 1];
        if (answer) {
          answered++;
          if (answer === question.correct) correct++;
        }
      });
    });

    return {
      section,
      label: SECTION_NAMES[section],
      percentage: answered ? correct / answered * 100 : 0,
      correct,
      answered
    };
  });
}

function getQuestionStats(students, questions) {
  return questions.map(question => {
    let correct = 0;
    let answered = 0;

    students.forEach(student => {
      const answer = student.answers[question.id - 1];
      if (answer) {
        answered++;
        if (answer === question.correct) correct++;
      }
    });

    return {
      ...question,
      correct,
      answered,
      percentage: answered ? correct / answered * 100 : 0
    };
  });
}

function createChart(id, config) {
  if (chartInstances[id]) chartInstances[id].destroy();
  chartInstances[id] = new Chart($(id), config);
}

function baseOptions(percentAxis = false) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 350 },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 16,
          color: "#6f7890",
          font: { family: "Inter", size: 10 }
        }
      },
      tooltip: {
        backgroundColor: "#20283b",
        padding: 12,
        cornerRadius: 8,
        titleFont: { size: 12 },
        bodyFont: { size: 11 }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: COLORS.muted,
          font: { family: "Inter", size: 10 }
        },
        border: { display: false }
      },
      y: {
        beginAtZero: true,
        max: percentAxis ? 100 : undefined,
        grid: { color: COLORS.grid },
        ticks: {
          color: COLORS.muted,
          font: { family: "Inter", size: 10 },
          callback: percentAxis ? value => value + "%" : undefined
        },
        border: { display: false }
      }
    }
  };
}

function renderSummary(students) {
  $("totalStudents").textContent = students.length;

  const preCount = students.filter(s => s.test === "Pre").length;
  const postCount = students.filter(s => s.test === "Post").length;
  $("studentCaption").textContent =
    `${preCount} pre-test · ${postCount} post-test`;

  const scores = students.map(s => s.score);
  const percentages = students.map(s => s.percentage);

  $("averageScore").innerHTML =
    `${average(scores).toFixed(1)}<span class="unit">/20</span>`;

  $("averagePercent").textContent =
    `${Math.round(average(percentages))}%`;

  $("highestScore").innerHTML =
    `${scores.length ? Math.max(...scores) : 0}<span class="unit">/20</span>`;

  $("lowestScore").textContent =
    `Lowest score: ${scores.length ? Math.min(...scores) : 0}/20`;
}

function renderComparisonChart() {
  const pre = STUDENTS.filter(s => s.test === "Pre");
  const post = STUDENTS.filter(s => s.test === "Post");
  const preAverage = average(pre.map(s => s.percentage));
  const postAverage = average(post.map(s => s.percentage));
  const change = postAverage - preAverage;

  createChart("comparisonChart", {
    type: "bar",
    data: {
      labels: ["Pre-test", "Post-test"],
      datasets: [{
        label: "Average percentage",
        data: [preAverage, postAverage],
        backgroundColor: [COLORS.blue, COLORS.purple],
        borderRadius: 8,
        maxBarThickness: 70
      }]
    },
    options: {
      ...baseOptions(true),
      plugins: {
        ...baseOptions(true).plugins,
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: context => `${context.parsed.y.toFixed(1)}% average`
          }
        }
      }
    }
  });

  $("improvementInsight").textContent =
    `The sample records show ${preAverage.toFixed(1)}% before the session and ` +
    `${postAverage.toFixed(1)}% after it, a change of ` +
    `${change >= 0 ? "+" : ""}${change.toFixed(1)} percentage points.`;
}

function renderDistributionChart(students) {
  const bands = [
    { label: "0–5", min: 0, max: 5 },
    { label: "6–10", min: 6, max: 10 },
    { label: "11–15", min: 11, max: 15 },
    { label: "16–20", min: 16, max: 20 }
  ];

  const counts = bands.map(band =>
    students.filter(s => s.score >= band.min && s.score <= band.max).length
  );

  createChart("distributionChart", {
    type: "doughnut",
    data: {
      labels: bands.map(b => b.label),
      datasets: [{
        data: counts,
        backgroundColor: [
          COLORS.red, COLORS.orange, COLORS.blue, COLORS.purple
        ],
        borderWidth: 0,
        hoverOffset: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "66%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
            boxWidth: 8,
            padding: 14,
            color: "#6f7890",
            font: { family: "Inter", size: 10 }
          }
        },
        tooltip: {
          callbacks: {
            label: context => ` ${context.label}: ${context.raw} student(s)`
          }
        }
      }
    }
  });
}

function renderSectionChart(students) {
  const stats = getSectionStats(students);

  createChart("sectionChart", {
    type: "bar",
    data: {
      labels: stats.map(s => s.label),
      datasets: [{
        label: "Correct answers",
        data: stats.map(s => Number(s.percentage.toFixed(1))),
        backgroundColor: [
          COLORS.blue, COLORS.purple, COLORS.orange, COLORS.green
        ],
        borderRadius: 7,
        maxBarThickness: 55
      }]
    },
    options: {
      ...baseOptions(true),
      plugins: {
        ...baseOptions(true).plugins,
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: context => `${context.parsed.y.toFixed(1)}% correct`
          }
        }
      }
    }
  });
}

function renderQuestionChart(students) {
  const questions = filteredQuestions();
  const stats = getQuestionStats(students, questions);

  createChart("questionChart", {
    type: "bar",
    data: {
      labels: stats.map(q => `Q${q.id}`),
      datasets: [{
        label: "Correct answers (%)",
        data: stats.map(q => Number(q.percentage.toFixed(1))),
        backgroundColor: stats.map(q =>
          q.percentage < 50 ? COLORS.orange : COLORS.purple
        ),
        borderRadius: 5,
        maxBarThickness: 28
      }]
    },
    options: {
      ...baseOptions(true),
      plugins: {
        ...baseOptions(true).plugins,
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: items => {
              const question = stats[items[0].dataIndex];
              return `Q${question.id}: ${question.text}`;
            },
            label: context => {
              const question = stats[context.dataIndex];
              return `${question.percentage.toFixed(1)}% correct ` +
                `(${question.correct}/${question.answered})`;
            }
          }
        }
      }
    }
  });
}

function renderAnswersChart(students) {
  const questions = filteredQuestions();
  const counts = { A: 0, B: 0, C: 0, D: 0 };

  students.forEach(student => {
    questions.forEach(question => {
      const answer = student.answers[question.id - 1];
      if (answer && counts[answer] !== undefined) counts[answer]++;
    });
  });

  createChart("answersChart", {
    type: "doughnut",
    data: {
      labels: ["Option A", "Option B", "Option C", "Option D"],
      datasets: [{
        data: [counts.A, counts.B, counts.C, counts.D],
        backgroundColor: [
          COLORS.purple, COLORS.blue, COLORS.green, COLORS.orange
        ],
        borderWidth: 0,
        hoverOffset: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "60%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
            boxWidth: 8,
            padding: 13,
            color: "#6f7890",
            font: { family: "Inter", size: 10 }
          }
        },
        tooltip: {
          callbacks: {
            label: context => ` ${context.label}: ${context.raw} response(s)`
          }
        }
      }
    }
  });
}

function renderStudentTable() {
  const students = filteredStudents();
  const search = $("searchInput").value.trim().toLowerCase();

  const visible = students.filter(student =>
    student.name.toLowerCase().includes(search) ||
    student.test.toLowerCase().includes(search) ||
    student.className.toLowerCase().includes(search)
  );

  $("studentTableBody").innerHTML = visible.map(student => {
    const testClass = student.test === "Pre" ? "test-pre" : "test-post";

    return `
      <tr>
        <td><strong>${student.name}</strong></td>
        <td>${student.className}</td>
        <td><span class="test-pill ${testClass}">${student.test}</span></td>
        <td><strong>${student.score}</strong> / 20</td>
        <td>${student.percentage.toFixed(0)}%</td>
        <td><span class="result-pill">${
          student.score >= 16 ? "High" :
          student.score >= 11 ? "Moderate" : "Needs support"
        }</span></td>
      </tr>
    `;
  }).join("");

  $("tableFooter").textContent =
    `Showing ${visible.length} of ${students.length} student records`;
}

function renderDashboard() {
  const students = filteredStudents();

  renderSummary(students);
  renderDistributionChart(students);
  renderSectionChart(students);
  renderQuestionChart(students);
  renderAnswersChart(students);
  renderStudentTable();
}

function exportCSV() {
  const students = filteredStudents();
  const rows = [
    ["Student", "Class", "Test", "Score", "Percentage"]
  ];

  students.forEach(student => {
    rows.push([
      student.name,
      student.className,
      student.test,
      student.score,
      student.percentage.toFixed(1) + "%"
    ]);
  });

  const csv = rows.map(row =>
    row.map(value =>
      `"${String(value).replace(/"/g, '""')}"`
    ).join(",")
  ).join("\r\n");

  const blob = new Blob(["\uFEFF" + csv], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "student-results.csv";
  link.click();
  URL.revokeObjectURL(url);
}

$("testFilter").addEventListener("change", renderDashboard);
$("sectionFilter").addEventListener("change", renderDashboard);
$("searchInput").addEventListener("input", renderStudentTable);
$("exportBtn").addEventListener("click", exportCSV);

// First render when the page opens.
renderComparisonChart();
renderDashboard();
    
