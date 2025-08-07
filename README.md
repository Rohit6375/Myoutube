# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Features
- Debouncing
- Debouncing with 200ms
- if difference between 2 key strokes is <200ms - DECLINE API call
- >200 make an API call 
- youtube Search Suggestion API
- implemented debouncing and caching in search bar to make it most optimal for api calling
- implemented N-level nested commenting
- live chat in youtube
- live chat >> infinite scroll >>>> pagination
- challenges
  - get data live  (how to get live data)
  - update the ui (update ui in such way that page doesn't get freeze)
- two ways to handle live chat 

     1.- using web sockets (two way connection between server and ui creates handshake quicky send data from either side   bidirectional live data) // no regular interval // websocket connection is heavy (Example - trading Apps)

     2.- API Polling => UI Request data flows from server to ui and after an interval (data is unidirectional)
                        UI Keep polling data after some time (Example - Gmail) (cricbuzz) (YOUTUBE)

- why page is not freezing in live chat?
- as soon as the messages explodes from a certain number youtube quickly deletes it from the page from top

- poll data get data and append it to redux store