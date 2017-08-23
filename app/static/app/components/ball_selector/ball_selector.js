

class BallSelectorComponent {
  constructor (params) {
    if (params == null) params = {}
    this.value = params["value"] || null
    this.options = params.options || BallSelectorComponent.ALL_BALL_NUMBERS
  }

  display ($element) {
    this.$element = loadTemplate($element, 'ball_selector.html')
    this.sortOptions()
    this.setupChoices()
  }

  onChange (changeCallback) {
    this.changeCallback = changeCallback
  }

  sortOptions () {
    this.options.sort((a, b) => {
      if (a == 0) return 1
      if (b == 0) return -1
      else return a - b
    })
  }

  setupChoices () {
    this.$choices = this.options.map( (number) => {
      let $choice = loadTemplate(null, 'ball_selector_choice.html')
      $choice.attr("number", number)
      $choice.attr("selected", number == this.value)
      $choice.click((event) => {
        let $target = $(event.target)
        let value = parseInt($target.attr("number"))
        this.$choices.forEach(($choice) => $choice.attr("selected", null))
        $target.attr("selected", true)
        this.changeCallback(value)
      })
      return $choice
    })

    this.$element.html(this.$choices)
  }
}

BallSelectorComponent.ALL_BALL_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]