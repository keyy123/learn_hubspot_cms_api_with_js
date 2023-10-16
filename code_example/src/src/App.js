import { BrowserRouter } from "react-router-dom";
import Auth from "../Auth";
import "./App.css";

function App() {
  // The URL to which we will make the request
  const baseUrl = "https://app.hubspot.com/oauth/authorize";

  // Defining the parameters to be passed to the request
  const queryParams = {
    client_id: "cf2c0066-118d-4e6a-8bae-9125c96308ec",
    redirect_uri: "https://ed-6129512380366848.educative.run",
    scope: ["content", "cms.performance.read", "hubdb"],
  };

  return (
    <BrowserRouter>
      <div>
        <h1>
          <center>AUTH CODE!</center>
        </h1>
        <Auth baseUrl={baseUrl} queryParams={queryParams} />
      </div>
    </BrowserRouter>
  );
}

export default App;