You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
Write a simple regex to check if the string contains the word hallo in different languages.
These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
By the way, how cool is the czech republic hallo!!



function validateHello(greetings) {
console.log(greetings);
  res =  /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings) 
  return res
}
