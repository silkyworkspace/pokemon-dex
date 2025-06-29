export default function PokemonCard({ name, height, weight, types, img }) {
    return (
        <section className="bg-white shadow-md rounded p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold capitalize">{name}
                <span className="monster-ball animate-spin duration-[3000ms] ease-linear ml-2 "></span>
            </h3>
            <img src={img} alt={name} className="mx-auto w-32 h-32" />
            <dl className="flex flex-col size-fit mx-auto gap-2 xs:flex-row xs:justify-center xs:gap-6 px-16">
                <div className="text-left">
                    <dt className="font-semibold">高さ：</dt>
                    <dd>{height}</dd>
                </div>
                <div className="text-left">
                    <dt className="font-semibold">重さ：</dt>
                    <dd>{weight}</dd>
                </div>
                <div className="text-left">
                    <dt className="font-semibold">タイプ：</dt>
                    <dd className="flex flex-wrap gap-2 mt-1">
                        {types.map((type, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-200 rounded text-sm">
                                {type}
                            </span>
                        ))}
                    </dd>
                </div>
            </dl>
        </section>
    );
}