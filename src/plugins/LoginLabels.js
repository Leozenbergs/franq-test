import { I18n } from "aws-amplify";
import { Translations } from "@aws-amplify/ui-components";

I18n.putVocabulariesForLanguage("en-US", {
  [Translations.SIGN_IN_HEADER_TEXT]: "Sign in",
  [Translations.SIGN_IN_ACTION]: "Sign In"
});