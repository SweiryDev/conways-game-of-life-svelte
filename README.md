# Conway's Game of Life in Svelte

This project is an implementation of Conway's Game of Life using SvelteKit, TypeScript, and Tailwind CSS. 

[View the Live Demo](https://progressivesweiry.github.io/conways-game-of-life-svelte)

## About Conway's Game of Life

Conway's Game of Life is a cellular automaton devised by mathematician John Conway in 1970. It's a zero-player game, meaning its evolution is determined by its initial state, requiring no further input. The game is played on a grid of cells, each of which can be alive or dead. The state of each cell in the next generation is determined by a set of rules based on the states of its neighboring cells.

## Development Process

The development of this project involved several stages:

1. **Planning**: Researching Conway's Game of Life rules and planning the project structure.
2. **Setup**: Initializing a SvelteKit project with TypeScript and Tailwind CSS.
3. **Core Logic**: Implementing the game's rules and grid management.
4. **UI Development**: Creating a responsive grid and control interface.
5. **Optimization**: Improving performance for larger grids and adding features like speed control.
6. **Deployment**: Configuring the project for GitHub Pages deployment.

## Why Svelte and Tailwind CSS?

I chose Svelte for this project due to its simplicity and excellent performance. Svelte's reactive approach made it easy to manage the game's state and update the UI efficiently. Tailwind CSS was selected for its utility-first approach, allowing for rapid UI development and easy customization.

## AI Assistance

During the development of this project, I utilized Claude 3.5 Sonnet as a supportive tool. Claude assisted with:
- Clarifying concepts and providing explanations when needed
- Offering suggestions for code optimization
- Helping troubleshoot deployment issues

While Claude was a valuable resource, the majority of the project implementation, decision-making, and problem-solving was done by me.

Claude had few flaws regarding SvelteKit configuration and following my progress but it was good experience. 

## Running the Project Locally

To run this project on your local machine:

1. Clone the repository:
   ```
   git clone https://github.com/ProgressiveSweiry/conways-game-of-life-svelte.git
   ```
2. Navigate to the project directory:
   ```
   cd conways-game-of-life-svelte
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`


## License

This project is open source and available under the [MIT License](LICENSE).