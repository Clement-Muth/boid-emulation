**Boids Simulation**

---

### Introduction

Boids is an artificial life program that simulates the flocking behavior of birds. Developed by Craig Reynolds in 1986, the term "boids" is derived from "bird-oid objects." This simulation demonstrates how simple rules can create complex emergent behavior, such as flocking, schooling, or herding, observed in nature.

### Description

This repository contains a Typescript implementation of the Boids simulation using HTML cavnas. Boids are represented as simple agents that follow three basic rules:

1. **Separation**: Boids avoid collisions by steering away from nearby flockmates.
2. **Alignment**: Boids align their direction with nearby flockmates.
3. **Cohesion**: Boids move towards the average position of nearby flockmates.
4. **Attraction**: Boids are attracted to nearby flockmates within a certain radius.

### Features

- Adjustable simulation parameters such as cohesion radius, alignment radius, attraction radius, and separation radius.
- Interactive canvas rendering of boids' movements.
- Simple and intuitive code structure for easy understanding and modification.

### Installation

To run the simulation locally, follow these steps:

1. Clone the repository:

   ```
   git clone git@github.com:Clement-Muth/boids-simulation.git
   ```

2. Navigate to the project directory:

   ```
   cd boids-simulation
   ```

3. Start with `yarn dev` and go to `http://localhost:8008`

### Usage

- **Simulation Controls**: 
  - Adjust the simulation parameters by modifying the `FlockOptions` object in the `index.ts` file.

### Contributing

Contributions to this project are welcome! If you have any ideas for improvements or new features, feel free to submit a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
