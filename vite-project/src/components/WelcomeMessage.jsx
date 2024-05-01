// Определение функционального компонента WelcomeMessage
function WelcomeMessage({ name}) {
    // Компонент возвращает JSX, который представляет собой HTML-разметку
    return <h1>Добро пожаловать на наш сайт!, {name || "user"}</h1>;
  }
  
  // Экспорт компонента, чтобы его можно было использовать в других частях приложения
  export default WelcomeMessage;