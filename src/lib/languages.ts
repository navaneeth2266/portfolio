// Languages offered by the translator. `code` is Google Translate's code;
// `label` is the language's own name, `name` the English one.
export const languages = [
  { code: "en", label: "English", name: "English" },
  { code: "fr", label: "Français", name: "French" },
  { code: "gd", label: "Gàidhlig", name: "Scottish Gaelic" },
  { code: "cy", label: "Cymraeg", name: "Welsh" },
  { code: "es", label: "Español", name: "Spanish" },
  { code: "de", label: "Deutsch", name: "German" },
  { code: "it", label: "Italiano", name: "Italian" },
  { code: "pt", label: "Português", name: "Portuguese" },
  { code: "ru", label: "Русский", name: "Russian" },
  { code: "uz", label: "Oʻzbekcha", name: "Uzbek" },
  { code: "hi", label: "हिन्दी", name: "Hindi" },
  { code: "ml", label: "മലയാളം", name: "Malayalam" },
  { code: "ta", label: "தமிழ்", name: "Tamil" },
  { code: "ja", label: "日本語", name: "Japanese" },
  { code: "zh-CN", label: "中文", name: "Chinese" },
] as const;

export const translatableCodes = languages
  .filter((language) => language.code !== "en")
  .map((language) => language.code)
  .join(",");
