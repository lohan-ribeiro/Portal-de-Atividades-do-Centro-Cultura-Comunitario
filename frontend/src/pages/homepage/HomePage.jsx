// import styles from "./HomePage.module.css"
// import { useState, useEffect } from "react"

// import CardsActivities from "../../components/componentsHome/CardsActivities"
// import SelectAtivies from "../../components/componentsHome/SelectActivies"
// import Map from "../../components/MapCeu"

// function HomePage() {
//     const [activities, setActivities] = useState([]);
//     const [selectedActivity, setSelectedActivity] = useState("")
//     const [selectedAge, setSelectedAge] = useState("")
//     const [selectedLevel, setSelectedLevel] = useState("")


// useEffect(() => {
//         fetch("http://127.0.0.1:3000/atividades")
//         //fetch("/api/atividades")
//         .then(response => {
//             if (!response.ok) {
//                 return response.text().then(text => {
//                     throw new Error(`Request failed with status ${response.status}: ${text}`)
//                 });
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (!Array.isArray(data)) {
//                 console.error("Data received from API is not an array: ", data);
//                 setActivities([]);
//             } else {
//                 setActivities(data);
//             }
//         })
//         .catch(error => {
//             console.error('There was an error fetching the activities:', error);
//             setActivities([]);
//         });
//     }, []);


//     // Começa com todas as modalidades
//     let filteredActivities = activities

//     // Se houver algum filtro selecionado, aplica
//     if (selectedActivity) {
//         filteredActivities = filteredActivities.filter(m => m.nome === selectedActivity)
//     }
//     if (selectedAge) {
//         filteredActivities = filteredActivities.filter(m => m.idade === selectedAge)
//     }
//     if (selectedLevel) {
//         filteredActivities = filteredActivities.filter(m => m.nivel === selectedLevel)
//     }

//     // Atualiza as opções de cada select conforme os outros
//     const allActivities = [...new Set(activities.map((m) => m.nome))]
//     const filteredAges = [...new Set(filteredActivities.map((m) => m.idade))]
//     const filteredLevels = [...new Set(filteredActivities.map((m) => m.nivel))]

//     // BOTÃO LIMPAR 
//     const LimparFiltro = () => {
//         setSelectedActivity("")
//         setSelectedAge("")
//         setSelectedLevel("")
//     }

//     // CONTROLE DE EXIBIÇÃO DOS CARDS
//     const ShowCards = selectedActivity || selectedAge || selectedLevel; // Mostra se qualquer filtro foi selecionado

//     return (
//         <main>
//             <div className={styles.home_container}>
//                 <div className={styles.introduction_container}>
//                     <div className={styles.background_introduction}>
//                         <section className={styles.introduction_content} aria-labelledby="Objetivo do site">
//                             <h1>CEU Rosa da China — Um <span>Espaço</span> Para <span>Todos</span>!</h1>
//                             <p>
//                                 Este é o nosso espaço para você ficar por dentro das atividades gratuitas do CEU Rosa da China.
//                                 Aqui você encontra todas as atividades gratuitas que o CEU Rosa da China oferece.
//                                 Confira o que está disponível e descubra maneiras de se divertir e aprender com a sua comunidade!
//                             </p>
//                         </section>
//                     </div>
//                 </div>
//                 <section className={styles.activies_container} aria-labelledby="Atividades do CEU Rosa da China">
//                     <h2>Confira nossas <span>atividades</span> disponíveis!</h2>
//                     <p>Use os filtros para encontra a atividade desejada!</p>
                    
//                     {/* Select de Atividade */}
//                     <label htmlFor="atividade">Atividades</label>
//                     <SelectAtivies
//                         name="atividade"
//                         options={allActivities.map((nome, idx) => ({ id: idx, nome }))} 
//                         labelField="nome"
//                         onSelect={setSelectedActivity}
//                         selectedValue={selectedActivity} 
//                     />

//                     {/* Filtros de Idade e Nível */}
//                     <div className={styles.filters}>
//                         <div className={styles.filter_age_level}>
//                             <label htmlFor="idade">Idade</label>
//                             <SelectAtivies
//                                 name="idade"
//                                 options={filteredAges.map((idade, idx) => ({ id: idx, idade }))}
//                                 labelField="idade"
//                                 onSelect={setSelectedAge}
//                                 selectedValue={selectedAge}
//                             />
//                         </div>
//                         <div className={styles.filter_age_level}>
//                             <label htmlFor="nível">Nível</label>
//                             <SelectAtivies
//                                 name="nível"
//                                 options={filteredLevels.map((nivel, idx) => ({ id: idx, nivel }))}
//                                 labelField="nivel"
//                                 onSelect={setSelectedLevel}
//                                 selectedValue={selectedLevel}
//                             />
//                         </div>
//                     </div>
//                     <div className={styles.button_area}>
//                         <button type="button" onClick={LimparFiltro} aria-label="Limpar filtros">
//                                 Limpar
//                         </button>
//                     </div>

//                     {/* Feedback para leitor de tela */}
//                     <p className={styles.found_activies} aria-live="assertive">
//                         {ShowCards
//                             ? (filteredActivities.length > 0 
//                                 ? `${filteredActivities.length} atividades encontradas.` 
//                                 : "Nenhuma atividade encontrada para este filtro.")
//                             : ""}
//                     </p>

//                     {/* Cards */}
//                     {ShowCards && (
//                         <div aria-live="polite" className={styles.cards}>
//                             {filteredActivities.length > 0 ? (
//                                 filteredActivities.map((activity) => (
//                                     <CardsActivities key={activity.id} activity={activity} />
//                                 ))
//                             ) : (
//                                 <p>Nenhuma atividade encontrada para este filtro</p>
//                             )}
//                         </div>
//                     )}
//                 </section>

//                 <div className={styles.map_container}>
//                     <section aria-labelledby="Localização do CEU Rosa da China">
//                         <h3>Passe por <span>aqui </span> e conheça nosso <span>espaço</span>!</h3>
//                         <Map/>
//                     </section>
//                 </div>
//             </div>
//         </main>
//     );
// }

// export default HomePage;
///==============================================================================================
import styles from "./HomePage.module.css"
import { useState, useEffect } from "react"

import CardsActivities from "../../components/componentsHome/CardsActivities"
import SelectAtivies from "../../components/componentsHome/SelectActivies"
import Map from "../../components/MapCeu"

function HomePage() {
    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState("")
    const [selectedAge, setSelectedAge] = useState("")
    const [selectedLevel, setSelectedLevel] = useState("")


    useEffect(() => {
        // Usado em ambiente de desenvolvimento
        //fetch("http://127.0.0.1:3000/atividades")

        // Usado em produção, para comunicação com a API do backend. 
        // Configurado redirecionamento de porta no nginx do servidor
        fetch("api/atividades")
        
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(`Request failed with status ${response.status}: ${text}`)
                });
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                console.error("Data received from API is not an array: ", data);
                setActivities([]);
            } else {
                setActivities(data);
            }
        })
        .catch(error => {
            console.error('There was an error fetching the activities:', error);
            setActivities([]);
        });
    }, []);


    // LOGIC FIX: Create separate filtered lists for dropdown options vs. final card display

    // 1. Filtering for the CARDS to be displayed
    let displayActivities = activities;
    if (selectedActivity) {
        displayActivities = displayActivities.filter(m => m.nome === selectedActivity);
    }
    if (selectedAge) {
        displayActivities = displayActivities.filter(m => m.idade === selectedAge);
    }
    if (selectedLevel) {
        displayActivities = displayActivities.filter(m => m.nivel === selectedLevel);
    }

    // 2. Filtering for the DROPDOWN OPTIONS
    // Options for Age should depend on Activity and Level, but not Age itself.
    let ageOptionsActivities = activities;
    if (selectedActivity) {
        ageOptionsActivities = ageOptionsActivities.filter(m => m.nome === selectedActivity);
    }
    if (selectedLevel) {
        ageOptionsActivities = ageOptionsActivities.filter(m => m.nivel === selectedLevel);
    }

    // Options for Level should depend on Activity and Age, but not Level itself.
    let levelOptionsActivities = activities;
    if (selectedActivity) {
        levelOptionsActivities = levelOptionsActivities.filter(m => m.nome === selectedActivity);
    }
    if (selectedAge) {
        levelOptionsActivities = levelOptionsActivities.filter(m => m.idade === selectedAge);
    }

    // 3. Create the unique option lists from the correctly filtered data
    const allActivities = [...new Set(activities.map((m) => m.nome))];
    const availableAges = [...new Set(ageOptionsActivities.map((m) => m.idade))];
    const availableLevels = [...new Set(levelOptionsActivities.map((m) => m.nivel))];

    // BOTÃO LIMPAR 
    const LimparFiltro = () => {
        setSelectedActivity("")
        setSelectedAge("")
        setSelectedLevel("")
    }

    // CONTROLE DE EXIBIÇÃO DOS CARDS
    const ShowCards = selectedActivity || selectedAge || selectedLevel; // Mostra se qualquer filtro foi selecionado

    return (
        <main>
            <div className={styles.home_container}>
                <div className={styles.introduction_container}>
                    <div className={styles.background_introduction}>
                        <section className={styles.introduction_content} aria-labelledby="Objetivo do site">
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
                    <p>Use os filtros para encontra a atividade desejada!</p>
                    
                    {/* Select de Atividade */}
                    <label htmlFor="atividade">Atividades</label>
                    <SelectAtivies
                        name="atividade"
                        options={allActivities.map((nome, idx) => ({ id: idx, nome }))} 
                        labelField="nome"
                        onSelect={setSelectedActivity}
                        selectedValue={selectedActivity} 
                    />

                    {/* Filtros de Idade e Nível */}
                    <div className={styles.filters}>
                        <div className={styles.filter_age_level}>
                            <label htmlFor="idade">Idade</label>
                            <SelectAtivies
                                name="idade"
                                options={availableAges.map((idade, idx) => ({ id: idx, idade }))} // Use a nova lista de opções
                                labelField="idade"
                                onSelect={setSelectedAge}
                                selectedValue={selectedAge}
                            />
                        </div>
                        <div className={styles.filter_age_level}>
                            <label htmlFor="nível">Nível</label>
                            <SelectAtivies
                                name="nível"
                                options={availableLevels.map((nivel, idx) => ({ id: idx, nivel }))} // Use a nova lista de opções
                                labelField="nivel"
                                onSelect={setSelectedLevel}
                                selectedValue={selectedLevel}
                            />
                        </div>
                    </div>
                    <div className={styles.button_area}>
                        <button type="button" onClick={LimparFiltro} aria-label="Limpar filtros">
                                Limpar
                        </button>
                    </div>

                    {/* Feedback para leitor de tela */}
                    <p className={styles.found_activies} aria-live="assertive">
                        {ShowCards
                            ? (displayActivities.length > 0 
                                ? `${displayActivities.length} atividades encontradas.` 
                                : "Nenhuma atividade encontrada para este filtro.")
                            : ""}
                    </p>

                    {/* Cards */}
                    {ShowCards && (
                        <div aria-live="polite" className={styles.cards}>
                            {displayActivities.length > 0 ? (
                                displayActivities.map((activity) => (
                                    <CardsActivities key={activity.id} activity={activity} />
                                ))
                            ) : (
                                <p>Nenhuma atividade encontrada para este filtro</p>
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
