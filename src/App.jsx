import { useState } from 'react';
import './App.css'
import PokemonCard from './PokemonCard';

function App() {
  // ユーザが入力したポケモンの名前の状態管理
  const [name, setName] = useState('');
  // fetchで取得したポケモンのデータ（オブジェクト）の状態管理
  const [pokemon, setPokemon] = useState(null);
  // エラーメッセージの状態管理
  const [error, setError] = useState('');


  // async = この関数の中でawaitを使う呪文
  // await = 結果が返ってくるのを待つ
  const searchPokemon = async () => {
    try {
      // エラーが起きそうな処理をtryの中で実行
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      
      if(response.ok) {
        // 取得に成功したら、取得したdataオブジェクトをpokemonに代入
        // かつエラーメッセージは空でerrorに代入
        const data = await response.json();
        setPokemon(data);
        setError('');
      } else {
        // エラーだったら強制的にエラーを発生させ、catchに飛ばす
        throw new Error('見つかりませんでした');
      }
    } catch(err) {
      // 失敗したらcatchの中に飛ぶ
      // エラーメッセージをerrorに代入
      // pokemonをnullにする
      setError(err.message);
      setPokemon(null)
    }
  };


  return (
    <div>
      <header>
        <h1>ポケモン図鑑</h1>
      </header>
      <main>
        <p>ポケモンを検索してみよう！</p>
        <a href='https://github.com/PokeAPI/pokeapi/blob/master/data/v2/csv/pokemon.csv' target='_blank'>英語で入力してね</a>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={searchPokemon}>検索する</button>

        {/* errorがtrueの場合、pタグを表示 */}
        {error && <p>{error}</p>}

        {/* pokemonがtrueの場合、PokemonCardコンポーネントを表示 */}
        {pokemon && 
        <PokemonCard 
        name={pokemon.name} 
        height={pokemon.height} 
        weight={pokemon.weight} 
        types={pokemon.types.map(t => t.type.name)} 
        img={pokemon.sprites.front_default}/>}

      </main>
      <footer>
        <p><small>&copy; 2025 edu-ktmr. All rights reserved.</small></p>
      </footer>
    </div>
  );
}

export default App
