import { useContext } from "react";
import { StaticContext } from "../context/StaticContext";

interface NavbarProps {
    text: String;
}

const Navbar : React.FC<NavbarProps> = ({text}) => {

    const dataContext = useContext( StaticContext )

    return (
        <>
                <div className="header">
                    <div className="text">
                        {text}
                    </div>
                </div>
            </>
    )
}

export default Navbar