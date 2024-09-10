//Destructing prop no need to use props.name and prop.age anymore and no need to pass props inside the function anymore just give your pass your values that need to be printed do chnage in the app.jsx file(parnt file)

function Destruct_prop({ name, age }) {
    return (
        <h2>hai mr {name} and your age is {age}</h2>
    )
}
export default Destruct_prop