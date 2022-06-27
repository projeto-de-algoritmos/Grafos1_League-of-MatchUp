
export function ChampionCard({ name, image }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '10px',
            marginBottom: '25px',
            marginTop: '50px'
        }}>
            <img src={image} alt={name} style={{
                height: '282px',
                width: '250px',
                borderRadius: '10px 10px 0px 0px'
            }} />
            <h2>{name}</h2>
        </div>
    )
}
