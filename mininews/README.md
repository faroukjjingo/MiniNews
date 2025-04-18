# README.md
# News Headlines

A React app that fetches and displays top news headlines by country using NewsAPI. Features country and category selection, search functionality, and a responsive UI.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with your NewsAPI key:

REACT_APP_NEWSAPI_KEY=your_api_key_here

4. Run `npm start` to start the app at `http://localhost:3000`.

## Features

- Select country and category to filter headlines.
- Search headlines by keyword.
- Responsive design with loading and error states.
- Context API for state management.
- Custom hook for API fetching.
- Optional service layer for API calls.

## Dependencies

- React
- Axios
- NewsAPI

## Project Structure

news-headlines/ ├── public/ │   ├── index.html │   ├── favicon.ico │   └── manifest.json ├── src/ │   ├── components/ │   │   ├── CountrySelector.js │   │   ├── CategorySelector.js │   │   ├── HeadlinesList.js │   │   ├── HeadlineCard.js │   │   ├── SearchBar.js │   │   ├── Navbar.js │   │   └── LoadingSpinner.js │   ├── contexts/ │   │   └── NewsContext.js │   ├── hooks/ │   │   └── useNewsApi.js │   ├── utils/ │   │   └── constants.js │   ├── services/ │   │   └── newsApi.js │   ├── assets/ │   │   ├── images/ │   │   └── styles/ │   ├── App.js │   ├── App.css │   ├── index.js │   └── index.css ├── .env ├── .env.example ├── .gitignore ├── package.json ├── README.md └── package-lock.json

## Running Tests

- Run `npm test` to execute unit tests with Jest.

## Building for Production

- Run `npm run build` to create a production build in the `build/` folder.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

MIT License


