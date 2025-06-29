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

      if (response.ok) {
        // 取得に成功したら、取得したdataオブジェクトをpokemonに代入
        // かつエラーメッセージは空でerrorに代入
        const data = await response.json();
        setPokemon(data);
        setError('');
      } else {
        // エラーだったら強制的にエラーを発生させ、catchに飛ばす
        throw new Error('見つかりませんでした');
      }
    } catch (err) {
      // 失敗したらcatchの中に飛ぶ
      // エラーメッセージをerrorに代入
      // pokemonをnullにする
      setError(err.message);
      setPokemon(null)
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-poke-red border-b-4 border-poke-black py-4">
        <h1 className="text-white text-2xl text-center font-bold">ポケモン図鑑</h1>
      </header>

      <main className="flex-grow p-6">
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold">ポケモンを検索してみよう！</h2>
          <p className="text-sm">※ 英語で入力してね</p>
          <a
            href="https://github.com/PokeAPI/pokeapi/blob/master/data/v2/csv/pokemon.csv"
            target="_blank"
            className="text-blue-600 underline text-sm"
          >
            ポケモンの英語名を見る
          </a>
          <div>
            <input
              id='user_pokename'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 px-2 py-1 rounded"
            />
            <button
              onClick={searchPokemon}
              className="block bg-poke-yellow px-4 py-1 rounded font-semibold w-fit mx-auto my-8 hover:scale-105">
              検索する
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {pokemon && (
          <PokemonCard
            name={pokemon.name}
            height={pokemon.height}
            weight={pokemon.weight}
            types={pokemon.types.map(t => t.type.name)}
            img={pokemon.sprites.front_default}
          />
        )}
      </main>
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm text-gray-500"><small>&copy; 2025 edu-ktmr. All rights reserved.</small></p>
      </footer>
    </div>
  );
}

export default App
