# MiniNews

MiniNews is a modern, minimalistic news aggregation application built with React, styled-components, and the NewsAPI. It enables users to browse news headlines, filter by category, country, language, and source, search for specific topics, save articles for later, and view detailed article pages. The app features a sleek black-and-white interface inspired by tools like Grok and ChatGPT, with clean typography and smooth interactions.

**Important Note**: This application uses the free tier of the NewsAPI, which has limitations such as a restricted number of requests (100/day) and partial article content. As a result, headlines may not always be available if the API rate limit is exceeded. To ensure full functionality, consider obtaining a paid NewsAPI key or replacing the API with an alternative data source (e.g., RSS feeds).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Limitations](#limitations)
- [Replacing NewsAPI with RSS Feeds](#replacing-newsapi-with-rss-feeds)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Browse Headlines**: View a grid of news headlines with images, titles, and descriptions.
- **Filter News**: Filter by category (e.g., business, technology), country, language, and news source.
- **Search**: Search for news articles by keyword.
- **Save Articles**: Bookmark articles to a "Saved" section for later reading.
- **Article Details**: View detailed article pages with titles, images, and content (limited by NewsAPI free tier).
- **Pagination**: Navigate through pages of headlines.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modern UI**: Minimalistic black-and-white theme with smooth animations and modern typography (Inter font).

## Tech Stack

- **Frontend**: React, React Router, styled-components
- **State Management**: React Context API (`NewsContext`)
- **API**: NewsAPI (free tier)
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Build Tool**: Vite
- **Font**: Inter (via Google Fonts)
- **Deployment**: Compatible with Vercel, Netlify, or other static hosting platforms

## Installation

1. Clone the repository:

```bash
git clone https://github.com/jjingofarouk/MiniNews.git
cd MiniNews

	2.	Install dependencies:

npm install

	3.	Create a .env file in the root directory and add your NewsAPI key (see Configuration):

VITE_NEWS_API_KEY=your_api_key_here

	4.	Start the development server:

npm run dev

	5.	Open the app in your browser at http://localhost:5173.

Configuration

To use MiniNews, you need a NewsAPI key:
	1.	Sign up at NewsAPI and obtain an API key.
	2.	Create a .env file in the project root and add:

VITE_NEWS_API_KEY=your_api_key_here

	3.	Ensure the key is valid. The free tier limits requests to 100/day and restricts full article content.

	Note: If the API key is invalid or the rate limit is reached, headlines may not load, and an error message will appear. Consider using a paid NewsAPI plan or switching to RSS feeds for unrestricted access.

Usage

	•	Home Page: Browse headlines filtered by category, country, or source. Use the search bar to find specific topics.
	•	Filters: Use the selectors (Category, Country, Language, Source, Sort) to refine results.
	•	Search: Enter keywords in the search bar to filter headlines.
	•	Save Articles: Click the bookmark icon on a headline card to save it. View saved articles via the “Saved” link in the navbar.
	•	Article Details: Click a headline title to view its details (note: full content may not be available due to NewsAPI limitations).
	•	Pagination: Use “Previous” and “Next” buttons to navigate through headline pages.

Project Structure

MiniNews/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── HeadlineCard.jsx
│   │   ├── HeadlinesList.jsx
│   │   ├── ArticleDetails.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategorySelector.jsx
│   │   ├── CountrySelector.jsx
│   │   ├── LanguageSelector.jsx
│   │   ├── SourceSelector.jsx
│   │   ├── SortSelector.jsx
│   │   ├── DateSelector.jsx
│   │   ├── LoadingSpinner.jsx
│   ├── contexts/           # React Context for state management
│   │   ├── NewsContext.jsx
│   ├── services/           # API service layer
│   │   ├── newsApi.js
│   ├── utils/              # Constants and helpers
│   │   ├── constants.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   ├── index.css           # Global styles
├── .env                    # Environment variables (API key)
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation

Limitations

	•	NewsAPI Free Tier:
	•	Limited to 100 requests/day, which may cause headlines to be unavailable if the limit is exceeded.
	•	Partial article content (full text requires a paid plan).
	•	Limited filtering options (e.g., date filtering is disabled in the free tier).
	•	Language Filtering: Language filtering may not work consistently due to NewsAPI’s free-tier restrictions.
	•	Image Availability: Some articles may lack images, depending on the source.
	•	No Offline Mode: The app requires an internet connection to fetch news.
	•	CORS: No CORS issues with NewsAPI, but switching to RSS feeds (as an alternative) may require a proxy server.

Replacing NewsAPI with RSS Feeds

To bypass NewsAPI’s limitations, you can switch to RSS feeds, which are free and have no rate limits. This requires:
	1.	Curating a list of RSS feed URLs from news sources (e.g., BBC, CNN).
	2.	Using a library like xml2js or rss-parser to parse XML feeds.
	3.	Setting up a proxy server to handle CORS (e.g., Express on Vercel).
	4.	Normalizing RSS data to match the app’s article structure (url, title, description, etc.).

Challenges

	•	Inconsistent feed formats (e.g., missing images or metadata).
	•	Client-side filtering for language/date (not natively supported by RSS).
	•	Maintenance of feed URLs.

Contributing

Contributions are welcome! To contribute:
	1.	Fork the repository at https://github.com/jjingofarouk/MiniNews.
	2.	Create a feature branch:

git checkout -b feature/your-feature

	3.	Commit changes:

git commit -m 'Add your feature'

	4.	Push to the branch:

git push origin feature/your-feature

	5.	Open a pull request.

Please ensure code follows the project’s style (ESLint, Prettier) and includes tests where applicable.

License

This project is licensed under the MIT License. See the LICENSE file for details.

