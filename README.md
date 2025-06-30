# Radar Chart Dashboard

A modern, responsive web application for displaying multiple static radar charts, built with Chart.js and designed for GitHub Pages hosting.

## Features

### 🎯 Static Radar Charts
- **4 Pre-configured Charts**: Character stats, skills assessment, product comparison, and team performance
- **Multiple Datasets**: Each chart displays multiple data series for comparison
- **Beautiful Animations**: Smooth loading animations and hover effects
- **Responsive Design**: Optimized for all screen sizes
- **Interactive Elements**: Press 'R' to refresh all charts with animation
- **Perfect for displaying**:
  - Character performance metrics
  - Employee skill assessments  
  - Product feature comparisons
  - Team performance over time
  - Any multi-dimensional data visualization

## Live Demo

[View Live Demo](https://yourusername.github.io/website_graphs)

## Quick Start

### For GitHub Pages Deployment

1. **Fork or Clone** this repository
2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save settings
3. **Access your site** at `https://yourusername.github.io/repository-name`

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/website_graphs.git
   cd website_graphs
   ```

2. Open `index.html` in your browser or serve with a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000`

## Usage Guide

### Pre-configured Charts

The dashboard displays 4 static radar charts with predefined data:

1. **Character Performance Stats**: Compares 3 heroes across 6 attributes
2. **Skills Assessment**: Employee skill comparison across 6 competencies
3. **Product Feature Comparison**: 3 products evaluated on 6 criteria
4. **Team Performance Metrics**: Quarterly performance tracking with 6 KPIs

### Interactive Features

- **Hover Effects**: Hover over data points to see detailed values
- **Legend Interaction**: Click legend items to show/hide datasets
- **Refresh Animation**: Press 'R' key to refresh all charts with animation
- **Responsive Design**: Charts automatically adapt to screen size

### Customizing Data

To modify the chart data, edit the `chartData` object in `script.js`:

```javascript
const chartData = {
    chart1: {
        title: 'Your Chart Title',
        labels: ['Label1', 'Label2', 'Label3', ...],
        datasets: [
            {
                label: 'Dataset Name',
                data: [value1, value2, value3, ...],
                colorIndex: 0 // Choose from 0-5
            }
        ]
    }
};
```

## Technology Stack

- **Chart.js**: Modern charting library for beautiful, responsive charts
- **HTML5/CSS3**: Semantic markup and modern styling
- **Vanilla JavaScript**: No framework dependencies
- **GitHub Pages**: Free hosting solution

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## File Structure

```
website_graphs/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Customization

### Adding More Radar Charts

To add additional radar charts:

1. Add a new canvas element in `index.html` with unique ID
2. Add new chart data to the `chartData` object in `script.js`
3. Call `createRadarChart()` in `initializeAllRadarCharts()` function
4. Update the resize handler to include the new chart

### Modifying Color Schemes

Update the `colorPalettes` array in `script.js`:

```javascript
const colorPalettes = [
    { bg: 'rgba(your, colors, here, 0.2)', border: 'rgba(your, colors, here, 1)' },
    // Add more color combinations
];
```

### Responsive Design

The application is fully responsive. Modify breakpoints in `styles.css`:

```css
@media (max-width: 768px) {
    /* Tablet styles */
}

@media (max-width: 480px) {
    /* Mobile styles */
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/website_graphs/issues) page
2. Create a new issue if needed
3. Provide clear description and steps to reproduce

## Acknowledgments

- [Chart.js](https://www.chartjs.org/) for the amazing charting library
- [GitHub Pages](https://pages.github.com/) for free hosting
- Modern CSS techniques for responsive design

---

**Built with ❤️ for data visualization enthusiasts** 