// Managed by edit mode. You can also edit this file by hand.
window.SITE = {
  "title": "Gesture Glove Control Interfrace",
  "tagline": "A wearable glove that flies a drone with hand tilt and finger gestures, sent wirelessly over ESP-NOW.",
  "footer": "Built by Avian",
  "theme": {
    "mode": "auto",
    "accent": "#0b6bcb",
    "accentDark": "#6cb0ff",
    "font": "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    "width": "760px"
  },
  "buttons": [
    {
      "label": "View code on GitHub",
      "url": "https://github.com/YOUR-USERNAME/YOUR-REPO",
      "primary": true
    },
    {
      "label": "Findings",
      "url": "#findings"
    }
  ],
  "tabs": [
    {
      "id": "overview",
      "title": "Overview",
      "type": "embed",
      "content": "\n        <h2>How it works</h2>\n        <p>An IMU on the back of the hand measures orientation, and flex sensors along the fingers measure how bent each one is. An ESP32 on the glove turns those readings into control values and sends them to a second ESP32 on the drone, which passes them to the flight controller as RC channels.</p>\n        <div class=\"flow\"><span>IMU + flex sensors</span><i>→</i><span>Glove ESP32</span><i>→</i><span>ESP-NOW</span><i>→</i><span>Drone ESP32</span><i>→</i><span>Flight controller</span></div>\n\n        <h2>Gesture mapping</h2>\n        <div class=\"table-wrap\"><table>\n          <tr><th>Hand input</th><th>Drone command</th></tr>\n          <tr><td>Tilt forward / back</td><td>Pitch</td></tr>\n          <tr><td>Tilt left / right</td><td>Roll</td></tr>\n          <tr><td>Hand twist</td><td>Yaw</td></tr>\n          <tr><td>Index finger bend</td><td>Throttle</td></tr>\n          <tr><td>Fist held 1–2 s</td><td>Arm / disarm</td></tr>\n        </table></div>\n\n        <h2>Hardware</h2>\n        <ul>\n          <li><strong>Microcontroller:</strong> ESP32 (glove and drone)</li>\n          <li><strong>IMU:</strong> MPU-6050 or BNO055 (update once chosen)</li>\n          <li><strong>Finger tracking:</strong> resistive flex sensors</li>\n          <li><strong>Link:</strong> direct ESP-NOW</li>\n        </ul>\n\n        <h2>Status</h2>\n        <ul>\n          <li>☐ Choose parts and order hardware</li>\n          <li>☐ Read IMU and flex sensors</li>\n          <li>☐ Calibration and gesture detection</li>\n          <li>☐ ESP-NOW link and flight controller integration</li>\n          <li>☐ Flight tests</li>\n        </ul>\n\n        <h2 id=\"demo\">Demo</h2>\n        <div class=\"media\">Demo video and photos coming soon.</div>",
      "intro": "Coming Soon"
    },
    {
      "id": "findings",
      "title": "Findings",
      "type": "embed",
      "intro": "Live Google Doc. Edit the doc and this page updates automatically.",
      "url": "PASTE-YOUR-GOOGLE-DOC-EMBED-URL-HERE",
      "height": "80vh"
    }
  ]
};
