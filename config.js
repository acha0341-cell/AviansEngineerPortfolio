// Managed by edit mode. You can also edit this file by hand.
window.SITE = {
  "title": "Avians Engineering Portfolio",
  "tagline": "Here is my portfolio site. Feel free to browse through my work.",
  "footer": "Built by Avian Chand (student engineer)",
  "theme": {
    "mode": "light",
    "accent": "#7a3333",
    "accentDark": "#c8e1fe",
    "font": "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    "width": "760px"
  },
  "buttons": [
    {
      "label": "YouTube Channel",
      "url": "https://www.youtube.com/@FormlessFlight"
    }
  ],
  "tabs": [
    {
      "id": "new-tab",
      "title": "About me",
      "type": "html",
      "content": "<h2>About me</h2>\n<div style=\"display:flex;gap:20px;align-items:center;flex-wrap:wrap\">\n  <img src=\"pfp.png\" alt=\"Photo of Avian\" style=\"width:160px;height:160px;border-radius:50%;object-fit:cover;object-position:center top\">\n  <div style=\"flex:1;min-width:240px\">\n    <p>Hey, I'm Avian, an aerospace engineering student at Monash University with a minor in AI for engineering. I like building things and figuring out how to make them smarter.</p>\n    <p>I'm currently looking for internships / research opportunities / project collaborators. You can reach me at Avianchand06@gmail.com.</p>\n    <p><a class=\"btn\" href=\"https://www.linkedin.com/in/avian-chand-7717a52b8/\" target=\"_blank\" rel=\"noopener\" style=\"display:inline-flex;align-items:center;gap:8px;background:#6cb0ff;border-color:#6cb0ff;color:#0f1114\">\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"/></svg>\n      Connect on LinkedIn\n    </a></p>\n  </div>\n</div>",
      "url": ""
    },
    {
      "id": "new-tab-3",
      "title": "Glove Gased - Gesture Controlled Drone",
      "type": "html",
      "content": "<style>\n.sub>input{display:none}\n.sub .bar{display:flex;gap:6px;flex-wrap:wrap;border-bottom:1px solid var(--line);margin-bottom:12px}\n.sub .bar label{padding:6px 12px;cursor:pointer;color:var(--muted);font-weight:600;border-bottom:2px solid transparent}\n.sub .bar label:hover{color:var(--fg)}\n.sub .pane{display:none}\n#s1:checked~.p1,#s2:checked~.p2,#s3:checked~.p3{display:block}\n#s1:checked~.bar label[for=s1],#s2:checked~.bar label[for=s2],#s3:checked~.bar label[for=s3]{color:var(--fg);border-bottom-color:var(--fg)}\n</style>\n\n<div class=\"sub\">\n  <input type=\"radio\" name=\"sub\" id=\"s1\" checked>\n  <input type=\"radio\" name=\"sub\" id=\"s2\">\n  <input type=\"radio\" name=\"sub\" id=\"s3\">\n  <div class=\"bar\">\n    <label for=\"s1\">Project aims</label>\n    <label for=\"s2\">Essential skills</label>\n    <label for=\"s3\">Method</label>\n  </div>\n\n  <div class=\"pane p1\">\n    <h2>Project aims</h2>\n    <p>[Summary]</p>\n    <ul><li>[Aim 1]</li><li>[Aim 2]</li></ul>\n  </div>\n\n  <div class=\"pane p2\">\n    <h2>Essential skills</h2>\n    <div class=\"table-wrap\"><table>\n      <tr><th>Skill</th><th>Why it's needed</th><th>How I'll learn it</th></tr>\n      <tr><td>[Skill 1]</td><td>[Reason]</td><td>[Plan]</td></tr>\n    </table></div>\n  </div>\n\n  <div class=\"pane p3\">\n    <h2>Method</h2>\n    <p>[Your content]</p>"
    },
    {
      "id": "new-tab-2",
      "title": "Miniature Wind Tunnel",
      "type": "embed",
      "content": "<h2>New tab</h2><p>Write something here.</p>"
    }
  ]
};
