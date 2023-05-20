import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-2  border-2'>
            <div className='border-2 p-3'>
                <h1 className='text-blue-600'>What is an access token and refresh token?</h1>
                <h1 className='text-blue-600'>How do they work and where should we store them on the client-side?</h1>
                <p>Access and Refresh token : An access token and a refresh token are both components of an authentication and authorization mechanism used in various systems, including web and mobile applications. Here's a brief explanation of each</p>
                <p>Access Token:
                    An access token is a credential that is used to access protected resources, such as APIs or services, on behalf of a user or an application. It represents the authorization granted to the client (user or application) and contains information like user identity and the permissions associated with it. Access tokens typically have an expiration time to enhance security.</p>
                <p>Refresh Token:
                    A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. It is typically issued alongside the access token and has a longer expiration time. Refresh tokens are used to authenticate the client and request a new access token without requiring the user to re-enter their credentials.</p>
            </div>
            <div className='border-2 p-3'>
                <h1 className='text-blue-600'>SQL Data Model -</h1>
                <p> SQL databases follow a rigid, predefined schema with tables, columns, and relationships. Data is organized into structured tables, and the schema must be defined before data can be inserted.</p>
                <h1 className='text-blue-600'>NoSQL Data Model -</h1>
                <p>NoSQL databases have a flexible and dynamic schema. They are schema-less and allow for the storage of unstructured, semi-structured, and structured data. No predefined schema is required, and the structure can vary for each record.</p>
            </div>
            <div className='border-2 p-3'>
                <h1 className='text-blue-600'>What is Express Js</h1>
                <p>Express.js is a popular web application framework for Node.js. It provides a minimal and flexible set of features for building web applications and APIs. Express.js is known for its simplicity and ease of use, making it a popular choice among developers for creating server-side applications</p>
                <h1 className='text-blue-600'>What is Next Js</h1>
                <p>NestJS is a progressive, TypeScript-based web framework for building scalable and maintainable server-side applications. It is heavily inspired by Angular and adopts its modular architecture, decorators, and dependency injection. NestJS aims to provide a solid foundation for building server-side applications using TypeScript and is built with scalability and developer productivity in mind</p>
            </div>
            <div className='border-2 p-3'>
                <h1 className='text-blue-600'>What is MongoDB aggregate</h1>
                <p>The aggregate method is a powerful feature used to perform advanced data processing and analysis tasks on collections. It allows you to perform complex operations, transformations, and aggregations on the documents within a collection</p>
                <p>The aggregate method follows a pipeline-based approach, where you can specify a sequence of stages to process the documents. Each stage performs a specific operation on the data and passes the result to the next stage</p>
            </div>
        </div>
    );
};

export default Blogs;