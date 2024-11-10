
import './App.css'
import GrandPa from './components/GrandPa/GrandPa';
// import HookForm from './components/HookForm/HookForm'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import Refform from './components/Refform/Refform'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {
  const handleSignUpSubmit = data =>{
    console.log('sign up', data);
}
  const handleUpDateSubmit = data =>{
    console.log('update', data);
}


  return (
    <>
      
      <h1>Form Master</h1>
      <GrandPa></GrandPa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <Refform></Refform> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm TitleName={'Sign Up'} handleSubmit={handleSignUpSubmit} SubmitBtn={'Submit'}>
        <h1>Sign Up</h1>
        <div><h3>Please sign up right now</h3></div>
      </ReusableForm>
      <ReusableForm TitleName={'Profile Update'} handleSubmit={handleUpDateSubmit} SubmitBtn={'Update'}>
        <h1>Update</h1>
        <div>
          <h3>
            Update your profile
          </h3>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
