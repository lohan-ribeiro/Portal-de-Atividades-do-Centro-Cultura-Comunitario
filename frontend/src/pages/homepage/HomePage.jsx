import styles from "./HomePage.module.css";
import { useState, useEffect } from "react";

import CardsModalities from "../../components/componentsHome/CardsModalities";
import SelectAtivies from "../../components/componentsHome/SelectActivies";

function HomePage() {
    const [modalities, setModalities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState("");
    const [selectedAge, setSelectedAge] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");

    // Carrega dados do banco de dados; "useEfect" usado para nao ficar carregando infinitamente as opções do select.
    useEffect(() => {
        fetch("http://localhost:5000/modalidades") // trocar pelo endpoint do MySQL que esta na nuvem
        .then((resp) => resp.json())
        .then((data) => setModalities(data))
        .catch((err) => console.log(err)); //caso haja algum erro
    }, []);

    // Filtra modalidades pela atividade escolhida
    const filteredByActivity = selectedActivity
        ? modalities.filter((m) => m.nome === selectedActivity)
        : [];

    // Opções de idade e nível para a atividade selecionada
    const ageOptions = [...new Set(filteredByActivity.map((m) => m.idade))];
    const levelOptions = [...new Set(filteredByActivity.map((m) => m.nível))];

    // Filtra cards de acordo com filtros selecionados(parcial ou completo)
    const filteredCards = filteredByActivity.filter((mod) => {
    return (
        (!selectedAge || mod.idade === selectedAge) &&
        (!selectedLevel || mod.nível === selectedLevel)
    );
    });

  return (
        <main>
            <div className={styles.home_container}>
                <div className={styles.introduction_container}>
                    <div className={styles.background_introduction}>
                        <section className={styles.introduction_content} aria-labelledby="Breve introdução sobre o site">
                            <h1>CEU Rosa da China — Um <span>Espaço</span> Para <span>Todos</span>!</h1>
                            <p>
                                Este é o nosso espaço para você ficar por dentro das atividades gratuitas do CEU Rosa da China.
                                Aqui você encontra todas as atividades gratuitas que o CEU Rosa da China oferece.
                                Confira o que está disponível e descubra maneiras de se divertir e aprender com a sua comunidade!
                            </p>
                        </section>
                    </div>
                </div>

                <section className={styles.activies_container} aria-labelledby="Atividades do CEU Rosa da China">
                    <h2>Confira nossas <span>atividades</span> disponíveis!</h2>
                    
                    {/* Select de Atividade */}
                    <label htmlFor="atividade">Atividades</label>
                    <SelectAtivies
                        name="atividade"
                        options={[...new Set(modalities.map((m) => m.nome))].map(
                            (nome, idx) => ({ id: idx, nome })
                        )}
                        labelField="nome"
                        onSelect={(id) => {
                            const atividadeNome = [...new Set(modalities.map((m) => m.nome))][id];
                            setSelectedActivity(atividadeNome);
                            setSelectedAge("");
                            setSelectedLevel("");
                        }}
                    />

                    {/* Filtros de Idade e Nível */}
                    {selectedActivity && (
                        <>
                            <label htmlFor="idade">Idade</label>
                            <SelectAtivies
                                name="idade"
                                options={ageOptions.map((idade, idx) => ({ id: idx, idade }))}
                                labelField="idade"
                                onSelect={(id) => setSelectedAge(ageOptions[id])}
                            />

                            <label htmlFor="nível">Nível</label>
                            <SelectAtivies
                                name="nível"
                                options={levelOptions.map((nível, idx) => ({ id: idx, nível }))}
                                labelField="nível"
                                onSelect={(id) => setSelectedLevel(levelOptions[id])}
                            />
                        </>
                    )}
                        
                    {/* Cards */}
                    {selectedActivity && (
                        <div aria-live="polite"> {/*"aria-live" para acessibilidade, ele avisa que o conteudo vai ser atualizado*/}
                            {filteredCards.length > 0 ? (
                                filteredCards.map((mod) => (
                                    <CardsModalities key={mod.id} modalidade={mod} />
                                ))
                            ) : (
                                <p>Nenhuma modalidade encontrada para este filtro</p>
                            )}
                        </div>
                    )}
                </section>
                <div className={styles.map_container}>
                    <section  aria-labelledby="Localização do CEU Rosa da China">
                        <h3>Passe por <span>aqui </span> e conheça nosso <span>espaço</span>!</h3>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
