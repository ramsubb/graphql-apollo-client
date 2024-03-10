import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';

// Replace the URI with your GraphQL server URL
const uri = 'http://localhost:4000/graphql';

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

const GET_HELLO = gql`
  query {
    hello
  }
`;

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{data.hello}</h2>
    </div>
  );
};

const AppWithApollo: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default AppWithApollo;