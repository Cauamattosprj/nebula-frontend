import React from "react";

const NotebookBody = () => {
    return (
        <div className="px-12 py-8 flex flex-col space-y-8 min-h-screen">
            {/* note title */}
            <h1 className="note-title text-title text-4xl font-bold">Herança</h1>
            {/* note body */}
            <p className="note-body text-paragraph">
                Herança é um conceito fundamental em programação orientada a
                objetos. Ele permite a criação de uma nova classe que herda os
                atributos e métodos de uma classe existente. A nova classe é
                chamada de subclasse ou classe filha, e a classe existente é
                chamada de superclasse ou classe pai. A herança é uma forma de
                reutilização de código, pois permite que você crie uma nova
                classe com base em uma classe existente, evitando a duplicação
                de código. Além disso, a herança permite que você crie uma
                hierarquia de classes, onde as classes filhas herdam os
                atributos e métodos das classes pai, e podem adicionar novos
                atributos e métodos específicos. Em POO, a herança é
                representada por uma linha sólida com uma seta apontando para a
                superclasse. A subclasse é representada por uma linha tracejada
                com uma seta apontando para a superclasse.
            </p>
        </div>
    );
};

export default NotebookBody;
