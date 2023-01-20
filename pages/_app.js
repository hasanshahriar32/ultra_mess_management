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
      <div
        data-tf-popover="B9mOgUOl"
        data-tf-custom-icon="https://images.typeform.com/images/wgWxpnu2tbfi"
        data-tf-button-color="#F0E5C1"
        data-tf-button-text="Launch me"
        data-tf-iframe-props="title=Product Review Form Template (copy)"
        data-tf-medium="snippet"
      ></div>
      <script src="//embed.typeform.com/next/embed.js"></script>
    </>
  );
}
