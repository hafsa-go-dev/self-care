export default function Soul({id, aspect, setAspect}) {
    const isSelected = id === aspect;

    function handleSelection() {
        setAspect(isSelected ? null : id);
    }

    return <div className="trio-container" onClick={handleSelection}>
            <h2>soul</h2>
        </div>;
}