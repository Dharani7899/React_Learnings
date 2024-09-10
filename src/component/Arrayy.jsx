// inorder to overcome the access of array value like this to (catdogcow) by accessing directly ..we can use higherorder method called map() method to print it line by line

function Arrayy() {
    let Animal = ["cat", "dog", "cow"];
    return (<div>
        {Animal.map(Animal => (<h1>{Animal}</h1> ))}
    </div>);
}
export default Arrayy;