import Container from "./components/CardContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Context from "./context/StaticContext";

const App: React.FC = () => {

    return (
        <>
            <Context.Provider value={ {name: "Imer"} }>
            <header className="container-fluid p-3 bg-primary text-white text-center">
                <Navbar text={'Header Aplicacion: IAGH'} />
            </header>

            <main>
                <Container />
            </main>

            <footer className="container-fluid p-3 bg-primary text-white text-center">
                <Footer text={'Footer Aplicacion: IAGH'} />
            </footer>
            </Context.Provider>
        </>
    );
}

export default App;