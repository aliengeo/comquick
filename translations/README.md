# Translation Readme

If you have any questions, I'm happy to help out. Please open an issue if there's something missing that you need.

1. [How to make translations](#how-to-make-translations)
2. [How to use translations](#how-to-use-translations)

## How to make translations

Download this repo and open the folder `/translations/template`. Copy this folder and rename the copy to your language's ISO 639 language code. For example, the Italian translation would be `/translations/it`.

Open `comquick.lang.json` with your text editor. You should see something like this:

	{
		"pagination": {
			"first": "First (post of multiple)",
			"prev": "Previous (page)",
			"rand": "Random (post)",
			"next": "Next (page)",
			"latest": "Latest (post of multiple)"
		},

This template has been rephrased to add context for translation, so you don't have to match it word for word. We just don't want "previous, next" accidentally translated as "former, adjacent". I encourage you to follow the conventions of webcomics in your own language.

Save and upload your new folder into `comquick/translations` in the repository.

***

## How to use translations

Note: Until Publii adds support for multiple languages in the editor, this will only affect your final site, not the Publii program.

Download the repo. Go to the `/translations` folder and find your language subfolder. For example, the German translation would be found under `/translations/de`. If there are multiple versions of your language, such as different scripts or countries, these will be next to each other and named accordingly. If your language doesn't have a language code (this mostly applies to conlangs), its name will start with `mis`.

The folder for your language will contain a file called `comquick.lang.json`. Copy that file and put it in the folder `sites/[SITENAME]/input/languages`. You can find your `sites` folder by clicking the three dot symbol in the upper right corner, clicking **App Settings**, and scrolling down to **Sites location**.

Save and preview your site. You should see site text in the language you chose.