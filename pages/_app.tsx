import "../styles/custom.css";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { AppProps } from "next/app";
import Layouts from "../src/components/commons/layouts";
import { Global } from "@emotion/react";
import { globalCSS } from "../src/commons/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
    const client = new ApolloClient({
        uri: "http://practice.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <Global styles={globalCSS} />
            <Layouts>
                <Component {...pageProps} />
            </Layouts>
        </ApolloProvider>
    );
}
