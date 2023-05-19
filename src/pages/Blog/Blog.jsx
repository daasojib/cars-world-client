
const Blog = () => {
          return (
                    <div>
                              <h2 className="text-purple-500 text-5xl text-center my-4">Blog Section</h2>
                              <p className="text-3xl text-red-500 my-10">1/  What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                              <p> <span className="text-2xl"> Access Token and work:</span>
                                        <br />
                                        For accessing an api to the user this is a token based Authentication system. When the user successfully authenticates the application and authorizes the access the application receives an access token.After that it pass the access token as a credential when it calls the api. Then it informs the api that the bearer of the token can be authorized to access the api.Access token has a specified life time and it is customizable. The JWT and Management api access token is used to authenticate.</p>
                              <p><span className="text-2xl">Refresh Token and work :</span>
                                        <br />
                                        For accessing more access token refresh token which is special token is used to access that.Access token expires very short time very short time. When the access token expires its validity the refresh token give the user to access without sign in again in the website.When authentication servers provide an access token to a user it also provides a valid refresh token which is then used to authenticate users after the access token has expired.</p>

                              <p> <span className="text-2xl">Data store:</span> <br /> There are two place Where we can store access token and refresh token.First is local storage and httpOnlu cookie.The token is very confidential. We are very much careful to stote them.We should not store them in the local storage because anybody can access the token any time and this is a risk factor for the confidential data.Rather than we can use HttpOnly to store the token.</p>
                              <hr />
                              <p className="text-3xl text-red-500 my-10">2/ Compare SQL and NoSQL databases?</p>
                              <p>a/No SQL means No declarative query language and SQL means Structured query language.
                                        <br />
                              b/SQL :It was developed in the 1970s to deal with issues with flat file storage	NoSQL: Developed in the late 2000s to overcome issues and limitations of SQL databases.
                              <br />
                              c/SQL is called as See-Quel that is primarily called RDBMS  (Relational Databases Management System) , whereas NoSQL is a Non-relational or Distributed Database.
                              <br />
                              d/*SQL databases are table-based databases and  NoSQL databases is document-based, key value pairs, and graph databases.
                              <br />
                              e/SQL :Cross-platform support, Secure and free	NoSQL: Easy to use, High performance, and Flexible tool.
                              <br />
                              f/SQL: Hootsuite, CircleCI, Gauges	 NoSQL useses: Airbnb, Uber, Kickstarter
                              <br />
                              g/SQL needs high performing Database hardware for better performance but NoSQL uses commodity and simple hardware.
                              <br />
                              h/NoSQL databases are horizontally scalable and SQL databases are vertically scalable.
                              <br />
                              i/SQL databases have a predefined schema on the other hand	NoSQL databases use dynamic schema for unstructured data.
                              <br />
                              j/Oracle, Postgres, and MS-SQL are sql db .	MongoDB, Redis, Neo4j, Cassandra, Hbase are nosql db.
                              <br />
                              k/sql is a good choice for the complex query intensive environment but nosql is not good fit complex queries.</p>
                              <p className="text-3xl text-red-500 my-10">3/What is express js? What is Nest JS?</p>
                              <p><span className="text-2xl">Express JS:</span> <br />
                              Express.js is a web framework for Node.js. It works fast and asynchronous in nature.It can be used to design single-page, multi-page and hybrid web applications.It allows to setup  the middlewares to respond to HTTP Requests.It allows to dynamically render HTML Pages based on passing arguments.Easy to configure and customize.Allows you to define an error handling middleware.Easy to connect with databases such as MongoDB. Allows you to create REST API server.
                              <br />
                              <span className="text-2xl">Nest JS:</span> <br />
                              Nest. js is one of the fastest and growing Node. js framework.It is used for building efficient, scalable, and enterprise-grade backend application.It is an open-source Node.js framework for developing challenging backend systems.NestJS makes it possible to create outstanding, well-organized, and lightweight microservices.It has a useful command-line interface tool called NestCLI that facilitates the generation of the boiler code (Modules, Middleware, Controller, etc.) Also, TypeScript, Prettier, and Eslint configuration
                              </p>
                              <p className="text-3xl text-red-500 my-10">4/What is MongoDB aggregate and how does it work?</p>
                    </div>
          );
};

export default Blog;