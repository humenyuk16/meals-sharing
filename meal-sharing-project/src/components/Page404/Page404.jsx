import "../Page404/Page404.css";

const NotFound = () => {
  return (
    <div className="page-404">
      <img src="/error404.jpg" alt="404" className="page-404-image" />
      <a href="/" className="page-404-link">
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
