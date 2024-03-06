let answers = {
    "Python": 0,
    "Ruby": 0,
    "JavaScript": 0,
    "Go": 0
};

function submitAnswer() {
    const selectedLanguage = document.querySelector('input[name="language"]:checked').value;

    answers[selectedLanguage]++;

    updateChart();
}

function updateChart() {
    const labels = Object.keys(answers);
    const data = Object.values(answers);

    const ctx = document.getElementById('pie-chart').getContext('2d');
    if(window.myPieChart !== undefined) {
        window.myPieChart.destroy();
    }
    window.myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
