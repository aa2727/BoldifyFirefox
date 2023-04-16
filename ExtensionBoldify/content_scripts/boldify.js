console.log("test");

/**
 * Fonction permettant d'obtenir la liste des mots du texte
 * @returns Array de tous les mots contenu dans le texte
 */
function getAllWords(text) {
    let listWords = text.split(" ");
    return listWords;
}

/**
 * Prends en paramètre une chaine de charactère et retourne la position de la lettre à la moitié du mot
 * @param {String} s  
 * @returns entier représentant la position de la lettre à la moitié du mot
 */
function getHalfSize(s) {
    return Math.floor(s.length/2);
}

/**
 * Réalise le parcours de tous les textNode du document
 * @param {Node} node 
 */
function textParcours(node) {
    node.childNodes.forEach(element => {
        if (element.nodeType == Node.TEXT_NODE) {
            console.log(element);
            boldify(element);
        }
        else{
            textParcours(element);
        }
    });
}

/**
 * Retire les retours à la lignes et les espaces superflux
 * @param {*} text 
 * @returns String sans espace superflux et sans retour à la ligne
 */
function beautifyString(text) {
    text = text.textContent.replaceAll('\n','');
    const regex = / +/g;
    text = text.replaceAll(regex,' ');
    return text
}

function boldify(textNode) {
    let text = beautifyString(textNode);
    let listWords;
    let element;
    let textElement;
    if (text != "" && text != " ") {
        listWords = getAllWords(text);
        listWords.forEach(word => {
            console.log(word);
            element = document.createElement("b");
            textElement = document.createTextNode(getToBoldifyText(textNode,word));
            element.appendChild(textElement);
            textNode.parentNode.appendChild(element);
            
        });
    }
    
}

function getToBoldifyText(textNode,word) {
    let middle = getHalfSize(word);
    return word.slice(0,middle);
    
    
}

textParcours(document.body);