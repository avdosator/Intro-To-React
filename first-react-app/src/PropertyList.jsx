import Property from './Property'

export default function PropertyList({properties}) {
    return (
        <div style={{display: "flex"}}>
            {properties.map(p => {
                return <Property key={p.id} {...p}/>
            })}
        </div>
    )
}