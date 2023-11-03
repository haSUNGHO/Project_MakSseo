import { useState } from "react";
import { useDispatch } from "react-redux";

function LoginPage() {
    const [UID, setUID] = useState("");
    const dispatch = useDispatch();

    const uidchage = (event) => {
        setUID(event.currentTarget.value);
    }

    const onLogin = (event) => {
        event.preventDefault();
        let body = {
            UID : UID
        };
        alert("hello : " +UID);

    }

    return (
        <form onSubmit={onLogin}>
            <div>
                <input type="text" value={UID} onChange={uidchage}>
                </input>
                <button>Login</button>
            </div>
            <div>{UID}</div>
        </form>
        
    )
}
export default LoginPage;