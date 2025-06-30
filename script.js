// Chart instances
let radarChart1, radarChart2, radarChart3, radarChart4;

// Color palettes for datasets
const colorPalettes = [
    { bg: 'rgba(102, 126, 234, 0.2)', border: 'rgba(102, 126, 234, 1)' },
    { bg: 'rgba(240, 147, 251, 0.2)', border: 'rgba(240, 147, 251, 1)' },
    { bg: 'rgba(52, 211, 153, 0.2)', border: 'rgba(52, 211, 153, 1)' },
    { bg: 'rgba(251, 191, 36, 0.2)', border: 'rgba(251, 191, 36, 1)' },
    { bg: 'rgba(239, 68, 68, 0.2)', border: 'rgba(239, 68, 68, 1)' },
    { bg: 'rgba(139, 92, 246, 0.2)', border: 'rgba(139, 92, 246, 1)' }
];

// Predefined chart data
const chartData = {
    chart1: {
        title: 'Automação',
        labels: ['Zapier', 'N8N', 'Make', 'Deepnote'],
        datasets: [
            {
                label: 'Automação',
                data: [60,30,70,80],
                colorIndex: 0
            }
        ]
    },
    chart2: {
        title: 'Business Intelligence',
        labels: ['Klipfolio', 'Metabase', 'Tableau', 'PowerBI', 'Grafana'],
        datasets: [
            {
                label: 'Business Intelligence',
                data: [90, 80, 10, 20, 40],
                colorIndex: 0
            }
        ]
    },
    chart3: {
        title: 'CRM',
        labels: ['Sensedata', 'Pipedrive', 'Bitrix', 'Moskit', 'RD Station', 'RD CRM', 'Hubspot', 'Intercom', 'Zendesk'],
        datasets: [
            {
                label: 'CRM',
                data: [80, 80, 80, 90, 30, 40, 60, 90, 20],
                colorIndex: 1
            }
        ]
    },
    chart4: {
        title: 'Cloud',
        labels: ['Neon.tech', 'Supabase', 'Deepnote', 'AWS'],
        datasets: [
            {
                label: 'Cloud',
                data: [60, 30, 70, 30],
                colorIndex: 5
            }
        ]
    },
    chart5: {
        title: 'AWS',
        labels: ['Cloudwatch', 'S3', 'RDS', 'Glue', 'Athena', 'Redshift', 'Lambda', 'ECS', 'ECR'],
        datasets: [
            {
                label: 'AWS',
                data: [50, 40, 70, 10, 10, 30, 10, 20, 30],
                colorIndex: 5
            }
        ]
    },
    chart6: {
        title: 'Dados',
        labels: [
            'SQL (Query)',
            'SQL (Modelagem OLTP)',
            'SQL (Modelagem OLAP)',
            'PLPGSQL',
            'Estatística Descritiva',
            'ML',
            'MySQL',
            'PostgreSQL',
            'Google Sheets',
            'Excel',
            'Pandas',
            'Scikit-learn',
            'Streamlit',
        ],
        datasets: [
            {
                label: 'Dados',
                data: [100, 80, 70, 60, 50, 40, 60, 90, 100, 70, 80, 20, 30],
                colorIndex: 5
            }
        ]
    },
    chart7: {
        title: 'Data Engineering',
        labels: [
            'DBT Core',
            'Airflow',
            'Stitch Data',
            'Airbyte',
            'ETL',
            'Fivetran',
            'Modelagem Dimensional',
            'Modelagem de Data Warehouse',
        ],
        datasets: [
            {
                label: 'Data Engineering',
                data: [40, 10, 50, 40, 30, 60, 40, 20],
                colorIndex: 5
            }
        ]
    },
    chart8: {
        title: 'Programação',
        labels: [
            'Python',
            'Postman',
            'Javascript',
            'APIs REST',
            'Docker',
            'Git',
            'Github',
            'Pytest',
            'Django'
        ],
        datasets: [
            {
                label: 'Programação',
                data: [60, 60, 40, 10, 40, 30, 20, 15, 5],
                colorIndex: 5
            }
        ]
    }
};

// Register background color plugin
Chart.register({
    id: 'backgroundColorPlugin',
    beforeDraw: function(chart) {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = '#FBFFFF';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
});

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAllRadarCharts();
    
    // Add fade-in animation
    document.querySelectorAll('.chart-section').forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, index * 300);
    });
});

// Initialize all radar charts
function initializeAllRadarCharts() {
    radarChart1 = createRadarChart('radarChart1', chartData.chart1);
    radarChart2 = createRadarChart('radarChart2', chartData.chart2);
    radarChart3 = createRadarChart('radarChart3', chartData.chart3);
    radarChart4 = createRadarChart('radarChart4', chartData.chart4);
    radarChart5 = createRadarChart('radarChart5', chartData.chart5);
    radarChart6 = createRadarChart('radarChart6', chartData.chart6);
    radarChart7 = createRadarChart('radarChart7', chartData.chart7);
    radarChart8 = createRadarChart('radarChart8', chartData.chart8);
}

// Create a radar chart with given data
function createRadarChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // Process datasets with colors
    const datasets = data.datasets.map(dataset => ({
        label: dataset.label,
        data: dataset.data,
        backgroundColor: colorPalettes[dataset.colorIndex].bg,
        borderColor: colorPalettes[dataset.colorIndex].border,
        borderWidth: 3,
        pointBackgroundColor: colorPalettes[dataset.colorIndex].border,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8
    }));
    
    return new Chart(ctx, {
        type: 'radar',
        data: {
            labels: data.labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 14,
                            weight: '500'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw}%`;
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    min: 0,
                    ticks: {
                        stepSize: 20,
                        color: '#666',
                        font: {
                            size: 12
                        },
                        backdropColor: 'transparent',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    },
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        lineWidth: 1
                    },
                    pointLabels: {
                        font: {
                            size: 13,
                            weight: '500'
                        },
                        color: '#333',
                        padding: 15
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.2
                },
                point: {
                    hoverBorderWidth: 3
                }
            },
            animation: {
                duration: 1200,
                easing: 'easeOutQuart'
            },
            interaction: {
                intersect: false,
                mode: 'point'
            }
        }
    });
}

// Handle window resize for responsive charts
window.addEventListener('resize', function() {
    if (radarChart1) radarChart1.resize();
    if (radarChart2) radarChart2.resize();
    if (radarChart3) radarChart3.resize();
    if (radarChart4) radarChart4.resize();
    if (radarChart5) radarChart5.resize();
    if (radarChart6) radarChart6.resize();
    if (radarChart7) radarChart7.resize();
    if (radarChart8) radarChart8.resize();
});

// Optional: Add some interactive features
document.addEventListener('keydown', function(event) {
    // Press 'R' to refresh all charts with animation
    if (event.key === 'r' || event.key === 'R') {
        refreshAllCharts();
    }
});

// Refresh all charts with new animation
function refreshAllCharts() {
    const charts = [radarChart1, radarChart2, radarChart3, radarChart4, radarChart5, radarChart6, radarChart7];
    
    charts.forEach((chart, index) => {
        if (chart) {
            setTimeout(() => {
                chart.update('active');
                showNotification(`Chart ${index + 1} refreshed!`);
            }, index * 200);
        }
    });
}

// Show notification message
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #10b981, #34d399);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        z-index: 1000;
        font-weight: 500;
        font-size: 14px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 2 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2000);
} 