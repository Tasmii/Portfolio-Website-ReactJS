// README.md for Portfolio Website

# Portfolio Website

This is a React-based portfolio website showcasing skills, projects, and experiences. The website includes interactive elements and modern design principles to engage viewers.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Components](#components)
5. [Customization](#customization)
6. [License](#license)

## Features

- **Dynamic Header**: A typewriter effect introducing roles and interactive Pac-Man eyes following cursor movement.
- **About Section**: Highlights personal information, skills, and accomplishments.
- **Navigation Bar**: Smooth scrolling and active link indication.
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile screens.

## Technologies Used

- **React**: Frontend framework for dynamic component rendering.
- **CSS3**: Styling and animations.
- **React Icons**: For visually appealing icons.
- **Typewriter Effect**: For dynamic text in the header.

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```
The website will be accessible at `http://localhost:5173`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The production files will be in the `build` directory.

## Components

### Header
- Displays an animated introduction with a typewriter effect.
- Pac-Man animation with interactive eyes and running legs (if not visible try decreasing the screen size percentage of the window).

### About
- Provides details about my experience and projects.
- Uses cards for concise information presentation.

### Navigation
- Includes links to all sections.
- Highlights the active section.

### CSS Animations
- **Wave Animation**: Used in the Pac-Man body.
- **Interactive Eyes**: Pupils follow the cursor.

## Customization

### Update Personal Details
- Open `Header.js` and replace `Tasmiya Ilahi` and other placeholder text with your own details.

### Add/Remove Sections
- Each section is a React component. To add a new section:
  1. Create a new component file in the `src` directory.
  2. Import and include it in `App.js`.
- To remove a section, delete its import and JSX tag in `App.js`.

### Styling
- CSS files are modularized for each component. Edit the corresponding `.css` file for styling changes.

## License

This project is licensed under the [MIT License](LICENSE).
