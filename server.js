require('dotenv').config();

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// const { buildSchema } = require('graphql');
const cors = require('cors');
const logger = require('morgan');

const connectDB = require('./config/db');
const schema = require('./schema/schema');

const PORT = process.env.PORT || 5000;
const app = express();

// Connect Database
connectDB();

// allow cross-origin requests
app.use(cors());
app.use(logger('dev'));

// bind express with graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${PORT}/graphql`
  );
});


