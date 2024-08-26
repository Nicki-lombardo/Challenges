// aqui no se importa nada porque s epasa en la App component function App

function Header({ children }) {
  return <header className="header">{children}</header>;
}

export default Header;
