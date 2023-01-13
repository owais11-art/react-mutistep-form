import RouterView from "./router/RouterView"
import Theme from "./Theme"
import Store from "./store/Store"

const App = () => {
  return (
    <Theme>
      <Store>
        <RouterView />
      </Store>
    </Theme>
  )
}

export default App
