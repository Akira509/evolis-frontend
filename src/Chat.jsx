import "./Chat.css";
import React, { useContext, useState, useEffect, useRef } from "react";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function Chat() {
    const { newChat, prevChats, reply } = useContext(MyContext);
    const [latestReply, setLatestReply] = useState(null);
    const bottomRef = useRef(null); // to scroll to bottom

    useEffect(() => {
        if (reply === null) {
            setLatestReply(null);
            return;
        }

        if (!prevChats?.length) return;

        const content = reply.split(" ");
        let idx = 0;

        const interval = setInterval(() => {
            setLatestReply(content.slice(0, idx + 1).join(" "));
            idx++;

            bottomRef.current?.scrollIntoView({ behavior: "smooth" });

            if (idx >= content.length) clearInterval(interval);
        }, 40);

        return () => clearInterval(interval);
    }, [prevChats, reply]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [prevChats]);

    return (
        <>
            {newChat && <h1>Ready to assist - Just type your message!</h1>}
            <div className="chats">
                {
                    prevChats?.slice(0, -1).map((chat, idx) =>
                        <div className={chat.role === "user" ? "userDiv" : "gptDiv"} key={idx}>
                            {
                                chat.role === "user"
                                    ? <p className="userMessage">{chat.content}</p>
                                    : <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{chat.content}</ReactMarkdown>
                            }
                        </div>
                    )
                }

                {
                    prevChats.length > 0 && (
                        latestReply === null ? (
                            <div className="gptDiv" key={"non-typing"}>
                                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                    {prevChats[prevChats.length - 1].content}
                                </ReactMarkdown>
                            </div>
                        ) : (
                            <div className="gptDiv" key={"typing"}>
                                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                    {latestReply}
                                </ReactMarkdown>
                            </div>
                        )
                    )
                }

                <div ref={bottomRef} />
            </div>
        </>
    );
}

export default Chat;
