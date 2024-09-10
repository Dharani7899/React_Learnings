// in order to print the array element in lis format we see how to do it
function Array_lis() {
    let animals = ["cat", "dog", "cow"]
    return (
        <div>
            {animals.map(animals => <ul><li>{animals}</li></ul>)}
        </div>
    )
}
export default Array_lis;