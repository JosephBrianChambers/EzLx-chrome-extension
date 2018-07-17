
function doWorkSon() {
  var input = document.getElementById("input").value

  var output = input.replace(/ezdata.+>\n([\s\S]+)<\/ezdata>/gm, function (fullMatch, match) {
    return fullMatch.replace(match, btoa(match))
  })

  document.getElementById("output").value = output
}

document.getElementById("encode-input").addEventListener("click", doWorkSon);

