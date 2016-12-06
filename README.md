```javascript

import gate from "oro-gate"

var { playing, pause, play } = gate()

if (playing()) console.log("woot") // "woot"

pause()
if (playing()) console.log("woot") //

play()
if (playing()) console.log("woot") // "woot"

```
