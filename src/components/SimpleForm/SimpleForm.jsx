

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault() 
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('submitted done');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="text" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
               <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;