import { useState, useEffect, useRef } from "react"

import CardsModalities from "../../components/componentsHome/CardsModalities"
import SelectAtivies from "../../components/componentsHome/SelectActivies"
import Map from "../../components/MapCeu"
import Limpar from "../../assets/IconsAnimated/ButtonClear"

import styles from "./HomePage.module.css"

function HomePage() {
    const [modalities, setModalities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState("")
    const [selectedAge, setSelectedAge] = useState("")
    const [selectedLevel, setSelectedLevel] = useState("")


    useEffect(() => {
        fetch("http://localhost:5000/modalidades") // trocar pelo endpoint do MySQL que esta na nuvem
        .then((resp) => resp.json())
        .then((data) => setModalities(data))
        .catch((err) => console.log(err))
    }, []);


    // Começa com todas as modalidades
    let filteredModalities = modalities

    // Se houver algum filtro selecionado, aplica
    if (selectedActivity) {
        filteredModalities = filteredModalities.filter(m => m.nome === selectedActivity)
    }
    if (selectedAge) {
        filteredModalities = filteredModalities.filter(m => m.idade === selectedAge)
    }
    if (selectedLevel) {
        filteredModalities = filteredModalities.filter(m => m.nível === selectedLevel)
    }

    // Atualiza as opções de cada select conforme os outros
    const allActivities = [...new Set(modalities.map((m) => m.nome))]
    const filteredAges = [...new Set(filteredModalities.map((m) => m.idade))]
    const filteredLevels = [...new Set(filteredModalities.map((m) => m.nível))]

    // BOTÃO LIMPAR 
    const LimparFiltro = () => {
        setSelectedActivity("")
        setSelectedAge("")
        setSelectedLevel("")
    }

    const firstSelectRef = useRef(null)

    // CONTROLE DE EXIBIÇÃO DOS CARDS
    const ShowCards = selectedActivity || selectedAge || selectedLevel; // Mostra se qualquer filtro foi selecionado

    return (
        <main>
            <div className={styles.home_container}>
                <div className={styles.introduction_container}>
                    <div className={styles.background_introduction}>
                        <section className={styles.introduction_content} aria-labelledby="introdução">
                            <h1 id="introdução">CEU Rosa da China — Um <span>Espaço</span> Para <span>Todos</span>!</h1>
                            <p>
                                Este é o nosso espaço para você ficar por dentro das atividades gratuitas do CEU Rosa da China.
                                Aqui você encontra todas as atividades gratuitas que o CEU Rosa da China oferece.
                                Confira o que está disponível e descubra maneiras de se divertir e aprender com a sua comunidade!
                            </p>
                        </section>
                    </div>
                </div>
                <section className={styles.activies_container} aria-labelledby="atividades">
                    <h2 id="atividades">Confira nossas <span>atividades</span> disponíveis!</h2>
                    <p>Use a barra de pesquisa ou os filtros para encontrar a atividade desejada!</p>

                    
                    {/* Select de Atividade */}
                    <label htmlFor="atividade">Atividades</label>
                    <div className={styles.comp_select_activies}>
                        <SelectAtivies
                            ref={firstSelectRef}
                            name="atividade"
                            options={allActivities.map((nome, idx) => ({ id: idx, nome }))} 
                            labelField="nome"
                            onSelect={(value) => {
                                setSelectedActivity(value)
                                setSelectedAge("")   
                                setSelectedLevel("")
                            }}
                            selectedValue={selectedActivity}
                            
                        />
                    </div>

                    {/* Filtros de Idade e Nível */}
                    <div className={styles.filters}>
                        <div className={styles.filter_age_level}>
                            <label htmlFor="idade">Idade</label>
                            <SelectAtivies
                                name="idade"
                                options={filteredAges.map((idade, idx) => ({ id: idx, idade }))}
                                labelField="idade"
                                onSelect={setSelectedAge}
                                selectedValue={selectedAge}
                            />
                        </div>
                        <div className={styles.filter_age_level}>
                            <label htmlFor="nível">Nível</label>
                            <SelectAtivies
                                name="nível"
                                options={filteredLevels.map((nível, idx) => ({ id: idx, nível }))}
                                labelField="nível"
                                onSelect={setSelectedLevel}
                                selectedValue={selectedLevel}
                            />
                        </div>
                    </div>
                    <div className={styles.button_area}>
                        <Limpar 
                        focusTarget={firstSelectRef}
                        onClick={LimparFiltro} 
                        aria-label="Limpar Filtros e voltar para selecionar atividade"/>
                    </div>

                    {/* Feedback para leitor de tela */}
                    <p className={styles.found_activies} aria-live="assertive">
                        {ShowCards
                            ? (filteredModalities.length > 0 
                                ? `${filteredModalities.length} modalidades encontradas.` 
                                : "Nenhuma modalidade encontrada para este filtro.")
                            : ""}
                    </p>
                </section>
                
                <section className={styles.cards_container}>
                    {/* Cards */}
                    {ShowCards && (
                        <div aria-live="polite" className={`${styles.cards} ${
                                filteredModalities.length === 1 ? styles.singleCard : 
                                filteredModalities.length === 2 ? styles.centerCards : ""
                            }`}
                        >
                            {filteredModalities.length > 0 ? (
                                filteredModalities.map((mod) => (
                                    <CardsModalities key={mod.id} modalidade={mod} />
                                ))
                            ) : (
                                <p>Nenhuma modalidade encontrada para este filtro</p>
                            )}
                        </div>
                    )}
                </section>

                <div className={styles.map_container}>
                    <section aria-labelledby="Localização do CEU Rosa da China">
                        <h3>Passe por <span>aqui </span> e conheça nosso <span>espaço</span>!</h3>
                        <Map/>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
