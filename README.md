# FoodFinder - Health & Fitness Website

A comprehensive health and fitness web application built with React.js and Sass, featuring recipe search, calorie calculator, meal planning, and favorites management.

## Features

- 🍽️ **Recipe Search**: Search thousands of recipes using the Edamam Recipe API
- 🧮 **Calorie Calculator**: Calculate daily calorie needs based on personal metrics
- 📋 **Meal Planning**: View sample meal plans for different calorie targets
- ⭐ **Favorites**: Save and manage your favorite recipes
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, intuitive interface with smooth animations

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/sunilsharma002/foodfinder.git
   cd foodfinder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   REACT_APP_EDAMAM_APP_ID=your_edamam_app_id
   REACT_APP_EDAMAM_APP_KEY=your_edamam_app_key
   REACT_APP_FORM_SUBMIT_EMAIL_MASK_DEV=your_email@example.com
   REACT_APP_RAPID_API_HOST=fitness-calculator.p.rapidapi.com
   REACT_APP_RAPID_API_KEY=your_rapidapi_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## API Setup

### Edamam Recipe API
1. Visit [Edamam Developer Portal](https://developer.edamam.com/edamam-recipe-api)
2. Sign up for a free account
3. Get your App ID and App Key
4. Add them to your `.env` file

### RapidAPI Fitness Calculator
1. Visit [RapidAPI Fitness Calculator](https://rapidapi.com/malaaddincelik/api/fitness-calculator)
2. Subscribe to the free plan
3. Get your API key
4. Add it to your `.env` file

### Contact Form
1. The contact form uses [FormSubmit](https://formsubmit.co/)
2. Replace `your_email@example.com` with your actual email
3. After deployment, activate the form by submitting it once

## Technologies Used

- **Frontend**: React.js, React Router DOM
- **Styling**: Sass/SCSS, Bootstrap
- **APIs**: Edamam Recipe API, RapidAPI Fitness Calculator
- **State Management**: React Context API
- **Storage**: localStorage for favorites
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Courgette, Raleway, Poppins)
## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

## 📞 Support & Contact

For questions, issues, or contributions:
- **GitHub**: [https://github.com/sunilsharma002](https://github.com/sunilsharma002)
- **Email**: [sunil703354@gmail.com](mailto:sunil703354@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/sunilsharma002/](https://www.linkedin.com/in/sunilsharma002/)

---
Made with ❤️ by [Sunil Sharma](https://github.com/sunilsharma002)
