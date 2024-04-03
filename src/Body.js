export default function Body({id, aspect, setAspect}) {
    const isSelected = id === aspect;

    function handleSelection() {
        setAspect(isSelected ? null : id);
    }

    return <div className="trio-container" onClick={handleSelection}>
        <h2>body</h2>
    </div>;
}