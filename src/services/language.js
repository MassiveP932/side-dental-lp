import { lang } from "./store";
import { derived } from "svelte/store";
import LangJson from "../assets/lang.json";

export const Translate = derived(lang, ($lang) => (key) => {
  return LangJson[$lang] && LangJson[$lang][key];
});

export const TranslateApiMessage = derived(lang, ($lang) => (stringifyData) => {
  return JSON.parse(stringifyData)[$lang];
});
