
export const reducer = (state, action) => {
    switch (action.type) {
  
      case "USER_LOGIN": {
        localStorage.setItem("isLogin", "true")
        return { ...state, isLogin: true , user: action.payload };
      }

      case "USER_ADMIN": {
        localStorage.setItem("isLogin", "true")
        return { ...state, isLogin: 1 , user: action.payload };
      }

      case "USER_LOGOUT": {
        localStorage.setItem("isLogin", "false")
        return { ...state, isLogin: false } // set this to null on purpose, do not change
      } 
  
      default: {
        return state
      }
    }
  }