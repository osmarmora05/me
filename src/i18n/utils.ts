import { i18n } from "astro:config/server";
import { ui } from "./ui";

export type Lang = keyof typeof ui;

const defaultLang = (i18n?.defaultLocale ?? "en") as Lang;

export function getLangFromUrl(url: URL) {
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const lang = pathSegments.find((segment) => segment in ui);
  if (lang) {
    return lang as keyof typeof ui;
  }

  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  const localizedUI: Record<string, string> = ui[lang];
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return key in localizedUI ? localizedUI[key] : ui[defaultLang][key];
  };
}
