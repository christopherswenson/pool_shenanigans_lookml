
const Authentication = {

  authenticatedUser: null,

  get user () {
    return this.authenticatedUser
  },

  displayLoginModal (completeCallback) {
    let loginPaneComponent = new LoginModal($("login-modal-container"))
      .complete((user) => {
        this.authenticatedUser = user
        completeCallback(user)
      })
  },

  ensureLogin (completeCallback) {
    AuthenticatedUserStore.get((user) => {
      this.authenticatedUser = user
      if (this.authenticatedUser == null) {
        this.displayLoginModal(completeCallback)
      } else completeCallback(user)
    })
  },

  login (username, password, completeCallback) {
    AuthenticatedUserStore.login({
      "username": username,
      "password": password
    }, (response) => {
      this.authenticatedUser = response["user"]
      completeCallback(response)
    })
  },

  displayRegisterModal (username, password, completeCallback) {
    let registerModalComponent = new RegisterModal($("register-modal-container"))
      .complete((user) => {
        this.authenticatedUser = user
        completeCallback(user)
      })
  },

  register (credentials, user, completeCallback) {
    AuthenticatedUserStore.register(
      credentials,
      user,
      (response) => {
        this.authenticatedUser = response["user"]
        completeCallback(response)
      }
    )
  },

  logout (completeCallback) {
    AuthenticatedUserStore.logout(() => {
      this.authenticatedUser = null
      completeCallback()
    })
  }
}
