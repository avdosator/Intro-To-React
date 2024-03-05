export default function ColorList({colors}) {
    return (
        <div>
            <ul>
                {colors.map(c =>  <li style={{color: c}}>{c}</li> )} { /* We dont have to do it inline if it is clunky */ }
            </ul>
        </div>
    )
}