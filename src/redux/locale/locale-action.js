export class LocaleAction {

	static RESET = "Locale/RESET";
	static LOAD = "Locale/LOAD";
	static SET = "Locale/SET";

	static reset = () => {
		return {
			type: LocaleAction.RESET
		};
	};

	static load = (locale, strings) => {
		return {
			type: LocaleAction.LOAD,
			payload: {
				locale: locale,
				strings: strings
			}
		};
	};

	static set = (locale) => {
		return {
			type: LocaleAction.SET,
			payload: {
				locale: locale
			}
		};
	};

}
