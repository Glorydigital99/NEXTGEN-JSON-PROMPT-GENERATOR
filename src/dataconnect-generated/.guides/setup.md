# Setup

If the user hasn't already installed the SDK, always run the user's node package manager of choice, and install the package in the directory ../package.json.
For more information on where the library is located, look at the connector.yaml file.

```ts

initializeApp({
});
```

Then, you can run the SDK as needed.
```ts
import { ... } from '@dataconnect/generated';
```




## React
### Setup


```ts
```

Then, they should add a `QueryClientProvider` to their root of their application.

Here's an example:

```ts
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

};


// Create a TanStack Query client instance
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  )
}

render(<App />, document.getElementById('root'));
```

