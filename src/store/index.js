import { createStore } from "vuex";
import user from "./modules/user";
import teacher from "./modules/teacher"

const store = createStore({
    modules: {
        user,
        teacher
    }
  })

  export default store