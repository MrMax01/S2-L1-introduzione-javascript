/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
I datatype come dice la parola è il tipo di dato. Ci sono differenze tra dati che ci permettono di categorizzarli in gruppi.
Alcune differenze tra dati sono espliciti come ad esempio un numero intero(in inglese integer)
con una parola/frase(string).
Elenco di datatype:

CHAR----> il significato letterale è carattere. Quindi il tipo di dato è un singolo carattere come ad esempio 'a', 'b', 'c', etc.
anche lo spazio viene considerato un char(carattere).

STRING ----> il significato letterale è corda. Può essere poco intuitivo il nome ma si parla di string quando allochiamo nella memoria una parola o una frase. es. 'ciao', 'Massimo', 'buongiorno a tutti!', etc.
UNA STRING PUò ESSERE VISTA ANCHE COME UNA LISTA DI CARATTERI. ES 'C'+'I'+'A'+'O'--> 'CIAO' 

INT----> int sta per integer cioè intero. Comprende tutti i numeri interi positivi e negativi e nulli(0).

FLOAT----> indica tutti i numeri con la virgola. es. 3/4, 3.14, 5.6, etc
BOOLEAN ----> può contentere solo 2 valori. True o False. ATTENZIONE!: 1 === true, 0===false, undefined===false, null === false.
FUNCIONT ---> indica il tipo  funzione. Esso contiente un insieme di regole/codice che permette di svolgere un azione che solitamente devi ripetere più volte. Allocando nella variabile una funzione essa potrà essere  eseguita ogni volta che la chiamo.
ONJECT---> come dice la parola è un oggetto. Gli oggetti nella vita hanno delle proprietà.  Ad esempio una maglietta ha la proprietà: marca, colore, prezzo, taglia, etc.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Massimo";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const somma = 12 + 20;
let somma1 = 12;
somma1 += 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Mauro";
console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - x);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1 = "jhon";
const name2 = "Jhon";
console.log(name1 === name2 ? "Le stringhe sono uguali" : "Le stringhe non sono uguali");
console.log(
  name1.toLowerCase() === name2.toLocaleLowerCase() ? "Le stringhe sono uguali" : "Le stringhe non sono uguali"
);
