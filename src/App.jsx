import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import router from "./routes/Router"
import store from "./redux/index"

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App