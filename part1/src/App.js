const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <Hello name="Frederick"/>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

export default App;

const Hello = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}