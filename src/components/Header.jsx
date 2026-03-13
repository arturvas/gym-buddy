import handshakeIcon from "../images/handshake-icon.png"

export default function Header(){
    return (
        <header className="website-header">
            <img src={handshakeIcon} alt="handshake icon" />
            <h1>Gym Buddy</h1>
        </header>
    );
}