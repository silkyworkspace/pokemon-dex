export default function PokemonCard({name, height, weigth,types, img}) {
    return (
        <section>
            <h2>{name}</h2>
            <div><img src={img} alt={name} /></div>
            <dl>
                <dt>高さ：</dt>
                <dd>{height}</dd>
                <dt>重さ：</dt>
                <dd>{weigth}</dd>
                <dt>タイプ：</dt>
                <dd>{types}</dd>
            </dl>
        </section>
    );
}