import React from 'react'

export default function Login() {
  const [isRegister, setRegister] = React.useState(false);

  return (
    <div className='login ' >
      
        <div className='login-container'>
                 <h3>
                  <span onClick={()=>{setRegister(false)}} className={isRegister ? '' : 'active'}>logowanie</span>
                  <span onClick={()=>{setRegister(true)}} className={isRegister ? 'active' : ''}>nie masz konta ?</span>
                  
                </h3>
                <div className={isRegister ? 'login-stripe right' : 'login-stripe'}></div>
                <div className='login-data'>
                  
                

                {!isRegister ? <>
                  <input placeholder="nazwa użytkownika" type='text'></input>
                <input placeholder="hasło" type='password'></input>
                </> : <>
                <input placeholder="nazwa użytkownika" type='text'></input>
                <input placeholder="hasło" type='password'></input>
                <input placeholder="powtórz hasło" type='password'></input>
                <p>logowanie z facebook</p>
                <p>logowanie z google</p>
                </>}
                
                <button >opcja dostępna wkrótce</button>
            </div>
            
        

        </div>

    </div>
  )
}
