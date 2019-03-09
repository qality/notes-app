const fs = require('fs')
const chalk = require('chalk')

//adding a new note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)

        log(chalk`{green + ${title}}`)
    } else {
        log(chalk`{yellow ! ${title}}`)  
        // show 10-20 symbols from existing note
        // ask to show note      
    }

    listNotes()
} 

// removing selected note
const removeNote = title => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)

    if (notesToKeep.length == notes.length) {
        log(chalk`{yellow ? ${title}}`)
    } else {
        saveNotes(notesToKeep)
        log(chalk`{red - ${title}}`)       
    }

    listNotes()
} 

//saving notes to file
const saveNotes = (notes, file='notes.json') => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(file, dataJSON)
}


//loading notes from file
const loadNotes = (file='notes.json') => {
    try {
        const dataJSON = fs.readFileSync(file)
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const listNotes = title => {
    const notes = loadNotes()

    if (notes.length != 0) {
        notes.forEach(note => {
            log(chalk`{blue . ${note.title}}`)
        })
    } else {
        log(chalk`{blue .}`)
    }
}

const showNote = title => {
    const notes = loadNotes()
    const foundNote = notes.find(note => note.title == title)

    if (foundNote) {
        log(chalk`{blue ${foundNote.title}: }${foundNote.body}`)
    } else {
        log(chalk`{yellow ? ${title}}`)      
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    showNote: showNote,
}