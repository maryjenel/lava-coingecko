# 🚀 Crypto Markets App

An Expo-based React Native application for browsing cryptocurrency market data with infinite scroll and local search. Built with TypeScript, React Query, and a modular file structure for scalability.

## 📱 Features

- 🔁 Infinite scrolling with `useInfiniteQuery`
- 🔍 Local search by coin name or symbol
- ⚡ High-performance list rendering with `FlatList`
- 📡 Real-time data from CoinGecko (or compatible crypto API)
- 🔄 Pull-to-refresh for data reloading
- 🌙 Built with Expo for easy development and deployment

## 🧑‍💻 Tech Stack

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Query](https://tanstack.com/query/latest)
- [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure



```bash
app/
├── components/         # Reusable components (e.g., MarketItem)
├── navigation/         # React Navigation setup
├── queries/            # React Query hooks (e.g., useFetchCoins)
├── screens/            # App screens
│   ├── CoinDetailScreen.tsx
│   ├── MarketsScreen.tsx
│   └── index.ts        # Screen exports
├── services/           # API services and shared types
│   ├── api.ts
│   ├── constants.ts
│   └── types.ts
├── theme/              # Design tokens and shared styles
│   ├── common.ts
│   ├── fontSize.ts
│   └── spacing.ts
└── index.tsx           # App entry point
````


## 🚀 Getting Started

### 1. Clone the repository
git clone https://github.com/maryjenel/crypto-markets-app.git
cd crypto-markets-app
### 2. Install dependencies
npm install
# or
yarn install
### 3. Run the app
npx expo start
