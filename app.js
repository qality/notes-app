log = console.log
const chalk = require('chalk')
const notes = require('./notes.js')
const fs = require('fs')
const yargs = require('yargs')


// Create ADD command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})


// Create REMOVE command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Removing note',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})


// Create LIST command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})


// Create SHOW command
yargs.command({
    command: 'show',
    describe: 'Show a note',
    builder: {
        title: {
            describe: 'Showing note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.showNote(argv.title)
    }
})


yargs.parse()
// log(yargs.argv)
