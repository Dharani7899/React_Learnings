// Array of onjects and how to access the array of ojects 


function Arr_obj() {
    let Student = [{
        s_name: "dharani", age: "20"
    }, { s_name: "kavitha", age: "10" }]

    return (
        <div>
            {Student.map(Student => (<li key={Student.s_name}>{Student.s_name}--->{Student.age}</li>))}
        </div>
    )
}
export default Arr_obj;