//mongoose

http://stackoverflow.com/questions/25093452/difference-between-data-model-and-database-schema-in-dbms

A schema is a blueprint of the database which specifies what fields will be present and what would be their types. For example an employee table will have an employee_ID column represented by a string of 10 digits and an employee_Name column with a string of 45 characters.

Data model is a high level design implementation which decides what can be present in the schema. It provides a database user with a conceptual framework in which we specify the database requirements of the database user and the structure of the database to fulfill these requirements.

A data model can, for example, be a relational model where the data will be organised in tables whereas the schema for this model would be the set of attributes and their corresponding domains.

References: Understanding the schema and Database System Concepts(H Korth and A Silberschatz)

http://stackoverflow.com/questions/22950282/schema-vs-model


//get and post

GET and POST are two different types of HTTP requests.

According to Wikipedia:

GET requests a representation of the specified resource. Note that GET should not be used for operations that cause side-effects, such as using it for taking actions in web applications. One reason for this is that GET may be used arbitrarily by robots or crawlers, which should not need to consider the side effects that a request should cause.
and

POST submits data to be processed (e.g., from an HTML form) to the identified resource. The data is included in the body of the request. This may result in the creation of a new resource or the updates of existing resources or both.


So essentially GET is used to retrieve remote data, and POST is used to insert/update remote data.


http://programmers.stackexchange.com/questions/197806/using-node-js-how-to-serve-content-without-using-a-framework-like-express
