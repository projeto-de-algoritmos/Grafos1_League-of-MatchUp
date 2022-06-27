import Champion from '../../Nodes.json'

export default function Dropdown({onChange}){
    return(
        <div className="dropdown" style={{}}>
            <select onChange={onChange} id="champs" style={{
            width: '250px',
            height: '25px'
            }}>
                <option selected disabled='True'>-- Selecione um Campeão --</option>
                {
                Champion.Champions.map((result)=>(<option value={result.id}>{result.champ}</option>))
                }            
            </select>
        </div>
    )
}
