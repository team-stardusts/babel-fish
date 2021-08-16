import React from "react";
import { Badge } from "react-bootstrap";

const fontStyle = {
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
};

function Greeting() {
    return (
        <div
            className="text-center"
            style={{
                fontFamily: fontStyle.fontFamily,
                marginTop: "30px",
            }}
        >
            <div>
                <h1>
                    Wellcome to{" "}
                    <Badge bg="light" text="dark">
                        StarDust
                    </Badge>
                </h1>
                <h1>Take some time to get</h1>
                <h1>to know about Korea!</h1>
            </div>
            <div>
                <h6 style={{ fontWeight: "normal" }}>
                    Find someone who will be your teacher.
                    <br />
                    He or She will introduce Korea to you
                    <br />
                    <span style={{ color: "#1f3a93" }}>
                        in a very attractive way.
                    </span>
                </h6>
            </div>
        </div>
    );
}

export default Greeting;
