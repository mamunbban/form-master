import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h1>Uncle</h1>
            <section className="flex">
                <Cousin name={'Shakib'} asset={asset}></Cousin>
                <Cousin name={'Madari'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;