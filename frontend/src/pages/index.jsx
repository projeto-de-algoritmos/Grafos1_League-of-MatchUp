import Dropdown from "../components/Dropdown/Dropdown";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [num, setNum] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/result/${num}`);
  }

  return (
    <div>
      <Header />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h1 style={{
          fontWeight: '450'
        }}>Descubra as MatchUps do seu campeão!</h1>
        <div style={{
          width: '200px',
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Dropdown onChange={(e) => setNum(e.target.value)} />
        </div>
        <div>
          <button className='button' onClick={() => handleClick(document.querySelector('#champs').value)} style={{
            width: '200px',
            height: '50px',
            fontSize: '25px',
            backgroundColor: 'tomato',
            border: 'none',
            borderRadius: '10px',
            fontWeight: '100',
          }}>Escolher</button>
        </div>
      </div>
    </div>
  )
}
