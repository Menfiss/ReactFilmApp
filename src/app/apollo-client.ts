import {
    ApolloClient,
    from,
    HttpLink,
    HttpOptions,
    InMemoryCache,
  } from '@apollo/client';
  import { onError } from '@apollo/client/link/error';
  
  const defaulCmsCacheDuration = 60;
  
  const customFetch: HttpOptions['fetch'] = (uri, options = {}) => {
    return fetch(uri, {
      ...options,
      next: { revalidate: defaulCmsCacheDuration },
    });
  };
  
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      console.error('[GraphQL error]:', JSON.stringify(graphQLErrors));
    if (networkError) console.error(`[Network error]: ${networkError}`);
  });
  
  const httpLink = () =>
    new HttpLink({
      //solving CORS from browser via proxy
      uri:
        typeof window === 'undefined'
          ? 'http://localhost:3000/api/graphql' //for now same as on erver
          : 'http://localhost:3000/api/graphql',
      fetch: customFetch,
    });
  
  
  let clientCms: ApolloClient<any> | null = null;
  
  export const getApolloClient = () => {
    // create a new client if there's no existing one
    // or if we are running on the server.
    if (!clientCms || typeof window === 'undefined') {
      clientCms = new ApolloClient({
        link: from([errorLink, httpLink()]),
        cache: new InMemoryCache(),
        connectToDevTools: process.env.NODE_ENV === 'development',
      });
    }
  
    return clientCms;
  };