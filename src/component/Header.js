import React from "react";
import { Image } from "react-bootstrap";

function Header() {
    return (
        <div class="d-flex justify-content-around" style={{ margin: "0" }}>
            <Image src="../public/octocat.png" />
            <div class="d-flex justify-content-end">
                <div>
                    <p>Join</p>
                </div>
                <div>
                    <p>Login</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
