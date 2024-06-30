# Simple Text Editor

## Overview

This project is a simple text editor built with React and TypeScript. It allows users to select different Google fonts, adjust font weight, toggle italic styling, change font size, and switch between dark mode and light mode. The application also features a find and replace functionality, and automatically saves settings and text to the browser's local storage.

## Features

- Font family selection with all Google fonts
- Font weight selection based on selected font
- Italic toggle if the selected font and weight combination supports italic
- Font size adjustment
- Dark mode and light mode toggle
- Find and replace functionality with highlighted results
- Auto-save to local storage
- Responsive design

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)
- Git

### Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/heyujjwal/text-editor-punt.git
   cd text-editor-punt
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4.Open your browser and navigate to http://localhost:3000 to see the application in action.

5. Or Open the Direct deployed project through this link: https://text-editor-xi-opal.vercel.app/


## Usage

### Font Selection

- Use the **Font Family** dropdown to select from a list of Google fonts.
- The **Font Weight** dropdown will populate with available weights based on the selected font.
- Use the **Italic** toggle to apply italic styling if the selected font and weight support it.
- Adjust the **Font Size** using the dropdown menu.

### Dark Mode

- Use the **Dark Mode** toggle to switch between dark mode and light mode.

### Find and Replace

- Enter the text you want to find in the **Find** input field.
- Enter the replacement text in the **Replace** input field.
- Click **Find** to highlight the occurrences of the find term in the text editor.
- Click **Replace** to replace the occurrences of the find term with the replace term.

### Auto Save

- The application automatically saves the text and selected settings to local storage.
- On page reload, the application restores the saved text and settings.



## Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

## License
This project is licensed under the MIT License. 


This `README.md` file provides a comprehensive guide on how to install, run, and use your project, as well as how to deploy it on Vercel. Adjust any specific details as needed based on your project repository's actual URL and other configurations.



