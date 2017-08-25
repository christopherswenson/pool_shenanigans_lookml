const PlayerStore = {
  get (callback) {
    UrlPrefixStore.get((url_prefix) => {
      let xhr = new XMLHttpRequest()
      xhr.open("GET", `${url_prefix}/api/players`, true)
      xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          callback(JSON.parse(xhr.responseText).players)
        }
      }
      xhr.send()
    })
  }
}
