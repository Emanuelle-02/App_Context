import React, {useState, createContext} from 'react';

const ResumeContext = createContext({})

export function ResumeProvider ({children}){
    const [dados, setDados] = useState([]);
    function salvarDados(dado){
        const hasDado = dados.filter(x => x.id !== dado.id);
            setDados([...hasDado, dado]);
    }

    return(
        <ResumeContext.Provider value={{list: dados, salvarDados}}>
            {children}
        </ResumeContext.Provider>
        
    )
}

export default ResumeContext;