import { LANGUAGE } from "../../constants/LanguageConstants";

// language files
import EN from "./en.json";

if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != "undefined" ? args[number] : match;
    });
  };
}

const LocalizationWrapper = {
  language: LANGUAGE.EN, // TODO: need to implement change language mechanism
  getLocalizationConstants: function () {
    switch (this.language) {
      case LANGUAGE.EN:
        return EN;
      default:
        return EN;
    }
  },
};

export default LocalizationWrapper.getLocalizationConstants();
