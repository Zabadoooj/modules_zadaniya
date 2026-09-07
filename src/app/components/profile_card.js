
export default function ProfileCard({name, doljnost}) {
    return (
        <div> 
            <h2>{name}</h2>
            <h3>{doljnost}</h3>

            <p>Люблю писать чистый код и изучать новые технологии</p>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
            </ul>
        </div>
    )
}