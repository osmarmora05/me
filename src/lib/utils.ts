// https://ld-web.net/en/articles/astro-i18n-routing/

import { languages } from "../i18n/ui";

type LocalizedPath = {
  params: {
    locale: string;
  };
};

/**
 * For a given page, grab all languages and create the necessary paths with the locale param
 *
 * @returns An array of all localized paths
 */
export async function localizedPaths(): Promise<LocalizedPath[]> {
  const langs = Object.keys(languages);

  return langs.map((locale) => {
    console.log(locale);
    return { params: { locale } };
  });
}
