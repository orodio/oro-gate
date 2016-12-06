module.exports = function gate () {
  var __gate = true

  return {
    playing: function () { return __gate },
    pause:   function () { return __gate = false },
    play:    function () { return __gate = true  },
  }
}
