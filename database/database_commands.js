import * as SQLite from 'expo-sqlite';

export function loadDatabase() {
    const database = SQLite.openDatabase('unki_data.db')
    return database
}

export function createTables(database) {
    database.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS Decks (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, date_created Date , card_count INTEGER);"
        );
    });
    // database.transaction((tx) => {
    //     tx.executeSql(
    //         "CREATE TABLE IF NOT EXISTS " +
    //         "Cards " +
    //         "(id INTEGER PRIMARY KEY AUTOINCREMENT, front TEXT, back TEXT" +
    //         ", data_added DATE, interval INTEGER, " +
    //         "labels TEXT, " + 
    //         "FOREIGN KEY (Deck_ID) REFERENCES Deck(Deck_ID));"
    //     );
    // });
}