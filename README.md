# web-survey

## URLs

* GitHub : https://github.com/Ksubaka/web-survey/
* Jenkins : https://platform.ksubaka.com/jenkins/job/web-survey/ (not yet live)

## Installation

```
npm install
```

## Development

Survey assets must be placed in the `surveys` folder, adjacent to `src` in the project. Assets are organised in the subfolders as follows:
* `definitions` - JSON file defining the survey
* `images` - any images used in the survey definition
* `sounds` - audio files
* `stylesheets` - custom CSS files
* `custom_html` - custom HTML files
* `fonts` - custom fonts used in the custom stylesheets

Note that in the JSON, when referencing images, fonts or stylesheets, only the filename is required, not the folder. The folder is automatically resolved depending on file type.

To start the development server, run the following command, specifying the survey:
```
SURVEY=[filename] npm run dev
```

If no survey is specified, the default `survey.json` file in `surveys/definitions` is used:

```
npm run dev
```

Open http://localhost:3000/ in your a browser to see the survey. Open dev tools and ensure that device mode is enabled, setting the dimensions to 1200x1920.

Please note that if the survey definition or any of the assets have changed, you will need to stop the dev server and issue the run command again.

Use the following command to run unit tests:

```
npm run test
```

## Build

To create a production build, run the following command, specifying the survey:
```
SURVEY=[filename] npm run build
```

If no survey is specified, the default `survey.json` file in `surveys/definitions` is used:

```
npm run build
```

The `build` folder in the project will contain the production ready resources along with a packaged version of the survey (`survey.zip`).

## Creating an apk

The zip file produced when building is needed to build an apk using the `tablet-develop-surveylauncher-campaign` Jenkins job (found at https://ci.ksubaka.com/job/tablet-develop-surveylauncher-campaign).

The job has 3 parameters:

1. survey_campaign - this must match the final folder in the package name for the experience for which the apk is being created. For example, if the package name is `com.ksubaka.surveylauncher.surveytest`, this parameter should be `surveytest`.
2. survey_file - attach the `survey.zip` file.
3. survey_version - assign a sensible version number that has not previously been used for this experience.

## survey.json structure

You can find a valid example in src/samples/survey.json, with all possible questions. The survey is validated during build using the rules from src/grunt/survey_schema.js.

Additionally, instructions on how to build a valid survey can be found at https://platform.ksubaka.com/confluence/display/PT/Building+a+survey
