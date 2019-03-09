# notes-app
![](https://img.shields.io/badge/unicorn-approved-ff69b4.svg) 
> Simple console notes app. Requires [Node.JS](https://nodejs.org/) to run.

Includes:
- Adding, deleting, reading notes
```
app.js add --title="Title" --body="Body"
app.js show --title="Title"
app.js remove --title="Title"
```
- Showing list of the notes
```
app.js list
```
- Minimalistic CLI

### Dependencies

This app is extended with the [Yargs](https://www.npmjs.com/package/yargs) and [Chalk](https://www.npmjs.com/package/chalk) dependencies.
