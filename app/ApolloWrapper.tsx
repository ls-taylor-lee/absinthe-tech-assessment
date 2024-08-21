"use client";
// ^ this file needs the "use client" pragma

import { ApolloNextAppProvider, ApolloClient, InMemoryCache } from "@apollo/experimental-nextjs-app-support";

import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

// have a function to create a client for you
const makeClient = () => {
  const wsLink = new GraphQLWsLink(
    createClient({
      url: `${process.env.HASURA_GRAPHQL_API_URL}/v1/graphql`,
      connectionParams: async () => {
        return {
          headers: {
            "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
            "content-type": "application/json",
          },
        };
      },
    })
  );
  // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
  return new ApolloClient({
    // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
    cache: new InMemoryCache(),
    link: wsLink,
  });
};

// you need to create a component to wrap your app in
export const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};
