import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key

export default function App({ Component, pageProps }) {
  registerLicense(
    "ORg4AjUWIQA/Gnt2VVhkQlFaclxJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRiUX9ecnJWTmNbVEQ="
  );
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
