
class PocketSelector {
  constructor ($element, params) {
    this.$element = loadTemplate($element, 'pocket_selector.html')
    this.$choices = this.$element.find(".choice")

    this.changeCallback = (() => null)
    this.value = params["value"] || null
    this.setupChoices()
  }

  set value (value) {
    this._value = value
    this.$choices.attr("selected", null)
    this.$element.find(`.choice[number="${this.value}"]`).attr("selected", true)
    this.changeCallback(value)
  }

  get value () {
    return this._value
  }

  change (changeCallback) {
    this.changeCallback = changeCallback
    return this
  }

  setupChoices () {
    this.$choices.click((event) => {
      let $target = $(event.target)
      this.value = parseInt($target.attr("number"))
    })
  }
}
