
import "./styles.css";

interface IHeader{
    sticky? : boolean | undefined,
}

/**
 * 헤더 컴포넌트입니다.
 * 
 */
function Header(props : IHeader){ 
    return (
        <div className="Header" style={props.sticky ? {position:"sticky"} : {}}>
            <div className="logo">
                
            </div>
        </div>
    );
}


export default Header;