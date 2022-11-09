import React from 'react';
import useTitle from '../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h2 className='text-2xl font-bold'>Welcome to My Blog. </h2>
            <div className="flex flex-col w-full p-2">
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>1. Difference between SQL and NoSQL.</h3>
                    <p>
                        The five critical differences between SQL vs NoSQL are:<br></br>

                        *SQL databases are relational, NoSQL databases are non-relational.<br></br>
                        *SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas *for unstructured data.<br></br>
                        *SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.<br></br>
                        *SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.<br></br>
                        *SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>
                <div className="divider"></div>
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>2. What is JWT, and how does it work?</h3>
                    <p>
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br></br>


                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.<br></br><br></br>

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.<br></br>

                        Once decoded, you will get two JSON strings:<br></br>

                        1. The header and the payload.<br></br>
                        2. The signature.<br></br>
                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.<br></br>

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.<br></br>

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.<br></br>

                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                    </p>
                </div>
                <div className="divider"></div>
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>3. What is the difference between javascript and NodeJS?</h3>
                    <p>
                        Some major differences between javascript and NodeJS:<br></br>
                        1. JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.<br></br>

                        2. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.<br></br>

                        3. JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.<br></br>

                        4. JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development.<br></br>

                        5. JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.<br></br>


                        6. JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.
                    </p>
                </div>
                <div className="divider"></div>
                <div className="grid h-auto card bg-base-300 rounded-box place-items-center text-left p-3">
                    <h3 className='text-xl font-bold'>4. How does NodeJS handle multiple requests at the same time?</h3>
                    <p>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.<br></br>

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;