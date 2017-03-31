# Issue

Trying to make Angular globally available in a Webpack bundle. The issue is that Angular is not fully loaded once Webpack hits the entry point. In practice: the Angular code is written to the bundle after the local code.

# Instructions

- `npm i`
- `npm start`
- See output in Console