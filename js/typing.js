let letter = 0;
    const text = '     Estudante de Engenharia de Software';

    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".meio").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 40)
        }
    }

    typeWriter();