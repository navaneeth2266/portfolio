import Script from "next/script";
import { translatableCodes } from "@/lib/languages";

// Loads Google's website translator once for the whole site. Its own toolbar is
// hidden (see globals.css); LanguageSwitcher drives it through the hidden select
// the widget renders inside #google_translate_element.
export default function GoogleTranslate() {
  return (
    <>
      <div id="google_translate_element" className="hidden" translate="no" aria-hidden />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en", includedLanguages: "${translatableCodes}", autoDisplay: false },
    "google_translate_element"
  );
}`}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
