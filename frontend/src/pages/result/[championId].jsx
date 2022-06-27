import Header from "../../components/Header/Header";
import { ChampionCard } from "../../components/ChampionCard";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Result() {
    const router = useRouter();
    const [championsArray, setChampions] = useState([]);
    const { championId } = router.query;

    useEffect(() => {
        axios.get('http://localhost:8081/matchUp', {
            params: {
                champ: championId
            }
        })
            .then(function (response) {
                setChampions(response.data);
                //    console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            })
    }, [])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div style={{
                position: 'absolute',
                top: '10px',
                left: '5px',
            }}>
                <a style={{
                    fontSize: '20px',
                    backgroundColor: 'rgb(219, 219, 219)',
                    borderRadius: '10px',
                    padding: '2px'
                }} href="/">Voltar</a>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h1 style={{
                    fontWeight: '450',
                    marginTop: '50px'
                }}>Seu campeão é forte contra:</h1>
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            }}>
                {championsArray.length ? championsArray.map((champion) => <ChampionCard name={champion.champ} image={champion.image} />) :
                    <h3>Que pena! O campeão escolhido não possui uma matchUp nos nossos dados :c</h3>}
            </div>
        </div>
    )
}
