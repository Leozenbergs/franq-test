import { I18n } from "aws-amplify";
import { Translations } from "@aws-amplify/ui-components";

import { portugueseLabels } from "@/locales/amplify/ptbr-amplify.js" 
import { englishLabels } from "@/locales/amplify/enus-amplify.js" 


if(navigator.language == 'pt-BR') {
  const namesBr = Object.keys(portugueseLabels);
  const valuesBr = Object.values(portugueseLabels);

  namesBr.forEach((value, index) => {
    I18n.putVocabulariesForLanguage("pt-BR", {...Translations[value] = valuesBr[index]})
  })
} else {
  const namesUs = Object.keys(englishLabels);
  const valuesUs = Object.values(englishLabels);

  namesUs.forEach((value, index) => {
    I18n.putVocabulariesForLanguage("en-Us", {...Translations[value] = valuesUs[index]})
  })
}
