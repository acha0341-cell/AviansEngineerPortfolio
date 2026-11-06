// EDIT THIS FILE to customise your whole site. No need to touch index.html.
window.SITE = {
  title: "Gesture Glove",
  tagline: "A wearable glove that flies a drone with hand tilt and finger gestures, sent wirelessly over ESP-NOW.",
  footer: "Built by Avian",

  theme: {
    mode: "auto",              // "auto" (follows device), "light" or "dark"
    accent: "#0b6bcb",         // link/button colour in light mode
    accentDark: "#6cb0ff",     // link/button colour in dark mode
    font: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    width: "760px"             // page content width
  },

  // Buttons under the title. Use "#tabid" to jump to a tab.
  buttons: [
    { label: "View code on GitHub", url: "https://github.com/YOUR-USERNAME/YOUR-REPO", primary: true },
    { label: "Findings", url: "#findings" }
  ],

  // Each tab is one object. Add, remove or reorder freely.
  //   type "html"  -> your own HTML in `content`
  //   type "embed" -> any embeddable URL in `url` (Google Doc/Sheet/Slides, YouTube, etc.)
  tabs: [
    {
      id: "overview", title: "Overview", type: "html",
      content: `
        <h2>How it works</h2>
        <p>An IMU on the back of the hand measures orientation, and flex sensors along the fingers measure how bent each one is. An ESP32 on the glove turns those readings into control values and sends them to a second ESP32 on the drone, which passes them to the flight controller as RC channels.</p>
        <div class="flow"><span>IMU + flex sensors</span><i>→</i><span>Glove ESP32</span><i>→</i><span>ESP-NOW</span><i>→</i><span>Drone ESP32</span><i>→</i><span>Flight controller</span></div>

        <h2>Gesture mapping</h2>
        <div class="table-wrap"><table>
          <tr><th>Hand input</th><th>Drone command</th></tr>
          <tr><td>Tilt forward / back</td><td>Pitch</td></tr>
          <tr><td>Tilt left / right</td><td>Roll</td></tr>
          <tr><td>Hand twist</td><td>Yaw</td></tr>
          <tr><td>Index finger bend</td><td>Throttle</td></tr>
          <tr><td>Fist held 1–2 s</td><td>Arm / disarm</td></tr>
        </table></div>

        <h2>Hardware</h2>
        <ul>
          <li><strong>Microcontroller:</strong> ESP32 (glove and drone)</li>
          <li><strong>IMU:</strong> MPU-6050 or BNO055 (update once chosen)</li>
          <li><strong>Finger tracking:</strong> resistive flex sensors</li>
          <li><strong>Link:</strong> direct ESP-NOW</li>
        </ul>

        <h2>Status</h2>
        <ul>
          <li>☐ Choose parts and order hardware</li>
          <li>☐ Read IMU and flex sensors</li>
          <li>☐ Calibration and gesture detection</li>
          <li>☐ ESP-NOW link and flight controller integration</li>
          <li>☐ Flight tests</li>
        </ul>

        <h2 id="demo">Demo</h2>
        <div class="media">Demo video and photos coming soon.</div>`
    },
    {
      id: "findings", title: "Findings", type: "embed",
      intro: "Live Google Doc. Edit the doc and this page updates automatically.",
      url: "PASTE-YOUR-GOOGLE-DOC-EMBED-URL-HERE",
      height: "80vh"
    }
    // Copy a block above to add a tab, e.g.:
    // { id: "results", title: "Results", type: "embed", url: "https://www.youtube.com/embed/VIDEO_ID", height: "60vh" }
  ]
};
