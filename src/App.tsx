import { NewsFeed } from "./components/NewsFeed";
import "./styles/App.scss";

function App() {
  return (
    <>
      <main className="layout-wrapper">
        <div className="container">
          <NewsFeed variable="company" title="Новостная лента"></NewsFeed>
          <NewsFeed variable="business" title="Бизнес"></NewsFeed>
          <NewsFeed
            variable="important"
            title="Важные новости"
            dateFormat="weekdayDate"
          ></NewsFeed>
        </div>
      </main>
    </>
  );
}

export default App;
