window.onload = () => {
    const INPUT_TEXT = document.querySelector("#input-text");
    const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
    const HREF_LINK = document.querySelector("#href");

    HREF_LINK.addEventListener('click', (event) => {
        event.preventDefault();
    })


    // Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento,
    // implemente o método .preventDefault() de forma que somente o caractere a (letra ‘a’ minúscula) possa ser digitado na caixinha. (dica: para capturar a tecla digitada, utilize o event.key)
    INPUT_TEXT.addEventListener('keypress', (event) => {
        const char = event.key;
        if (char !== 'a'){
        event.preventDefault();
        };        
    })
}