import { useEffect } from 'react';
import ProgramCard from '../components/Program';
import { useAppContext } from '../lib/hooks/context';
import type { Program } from '../types/program';
import Footer from '../components/Footer';
import Header from '../components/Header'

export default function MainPage()  {
    const { state, dispatch } = useAppContext();

    useEffect(() => {
      dispatch({ type: 'FETCH_INIT' });
      fetch('https://api.moscow.mba/products')
        .then((res) => res.json())
        .then((data: Program[]) => {
          dispatch({ type: 'FETCH_SUCCESS', payload: data.slice(0, 5) }); // Ограничиваем до 5 программ
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_FAILURE', payload: error.message });
        });
    }, [dispatch]);
  
    if (state.loading) return <div>Загрузка...</div>;
    if (state.error) return <div>Ошибка: {state.error}</div>;
  
    return (
      <div className="app">
        <Header/>
        {state.programs.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
        <Footer/>
      </div>
    );
}
