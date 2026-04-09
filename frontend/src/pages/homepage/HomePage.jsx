
import { useState, useEffect, useMemo, useRef} from "react"
import Fuse from 'fuse.js'

import CardsModalities from "../../components/componentsHome/CardsModalities"
import SelectAtivies from "../../components/componentsHome/SelectActivies"
import Map from "../../components/MapCeu"
import Limpar from "../../components/IconsAnimated/ButtonClear"

import styles from "./HomePage.module.css"

function HomePage() {
    const [activities, setActivities] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState("")
    const [selectedAge, setSelectedAge] = useState("")
    const [selectedLevel, setSelectedLevel] = useState("")
    const [searchTerm, setSearchTerm] = useState("");

        // Pedido dos dados à API do backend e validação de formato
    useEffect(() => {
        // Usado em ambiente de desenvolvimento
        fetch("http://127.0.0.1:3000/atividades")

        // Usado em produção, para comunicação com a API do backend.
        // Configurado redirecionamento de porta no nginx do servidor
        //fetch("api/atividades")
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
                // Sort the data alphabetically by name before setting the state
                const sortedData = data.sort((a, b) => a.nome.localeCompare(b.nome));
                setActivities(sortedData);
            }
        })
        .catch(error => {
            console.error('There was an error fetching the activities:', error);
            setActivities([]);
        });
    }, []);

    const fuse = useMemo(() => {
        if (!activities.length) return null;
        const options = {
            keys: ['nome'],
            includeScore: true,
            threshold: 0.4, // Adjust for more or less fuzziness
            minMatchCharLength: 2,
        };
        return new Fuse(activities, options);
    }, [activities]);

    let displayActivities = activities;
    if (searchTerm && fuse) {
        const results = fuse.search(searchTerm);
        displayActivities = results.map(result => result.item);
    } 

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
    let ageOptionsActivities = activities;
    if (selectedActivity) {
        ageOptionsActivities = ageOptionsActivities.filter(m => m.nome === selectedActivity);
    }
    if (selectedLevel) {
        ageOptionsActivities = ageOptionsActivities.filter(m => m.nivel === selectedLevel);
    }

    let levelOptionsActivities = activities;
    if (selectedActivity) {
        levelOptionsActivities = levelOptionsActivities.filter(m => m.nome === selectedActivity);
    }
    if (selectedAge) {
        levelOptionsActivities = levelOptionsActivities.filter(m => m.idade === selectedAge);
    }

    const allActivities = [...new Set(activities.map((m) => m.nome))];
    // Sort the dropdown options
    const availableAges = [...new Set(ageOptionsActivities.map((m) => m.idade))].sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }));
    const availableLevels = [...new Set(levelOptionsActivities.map((m) => m.nivel))].sort((a, b) => a.localeCompare(b));


    const LimparFiltro = () => {
        setSelectedActivity("")
        setSelectedAge("")
        setSelectedLevel("")
        setSearchTerm("");
    }

    const firstSelectRef = useRef(null)

    // CONTROLE DE EXIBIÇÃO DOS CARDS
    const ShowCards = selectedActivity || selectedAge || selectedLevel || searchTerm; // Mostra se qualquer filtro foi selecionado

    return (
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

                <div className={styles.search_container}>
                    <label htmlFor="search">Pesquisar por nome</label>
                    <input 
                        ref={firstSelectRef}
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Digite o nome da atividade..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>    
                <label htmlFor="atividade">Atividades</label>
                <div className={styles.comp_select_activies}>
                    <SelectAtivies
                        name="atividade"
                        options={allActivities.map((nome, idx) => ({ id: idx, nome }))} 
                        labelField="nome"
                        onSelect={setSelectedActivity}
                        selectedValue={selectedActivity}
                        
                    />
                </div>
                <div className={styles.filters}>
                    <div className={styles.filter_age_level}>
                        <label htmlFor="idade">Idade</label>
                        <SelectAtivies
                            name="idade"
                            options={availableAges.map((idade, idx) => ({ id: idx, idade }))} 
                            labelField="idade"
                            onSelect={setSelectedAge}
                            selectedValue={selectedAge}
                        />
                    </div>
                    <div className={styles.filter_age_level}>
                        <label htmlFor="nível">Nível</label>
                        <SelectAtivies
                            name="nível"
                            options={availableLevels.map((nivel, idx) => ({ id: idx, nivel }))}
                            labelField="nivel"
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

            </section> 

            <section className={styles.cards_container}>
                {ShowCards && (
                    displayActivities.length > 0 ? (
                        <div
                            aria-live="polite"
                            className={`${styles.cards} ${
                            displayActivities.length === 1 ? styles.singleCard :
                            displayActivities.length === 2 ? styles.centerCards : ""
                            }`}
                        >
                            {displayActivities.map((mod) => (
                            <CardsModalities key={mod.id} activity={mod} />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.no_activies_message} aria-live="polite">
                            <p>Nenhuma atividade encontrada para este filtro ou nome.</p>
                        </div>
                    )
                )}
            </section>

            <div className={styles.map_container}>
                <section aria-labelledby="localização">
                    <h3 id="localização">Passe por <span>aqui </span>e conheça nosso <span>espaço</span>!</h3>
                    <div className={styles.map_content}>
                        <Map className={styles.mapWrapper}/>
                    </div>
                </section>
            </div>
        </div>
    
    );
}

export default HomePage;
