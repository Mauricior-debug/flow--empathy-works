# EmpathyWorks Leadership Consultancy

A static website for EmpathyWorks. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8765
```

Pages: Home, Coaching, Consultancy, Subscriptions, Speaking, About, Evidence, Contact, and the three essays under Writing.

The client’s original files and the approved screens stay in `wren-source/`. The live pages do not import that folder.

Booking validation lives in `site.js` and is covered by `node --test tests/enquiry.test.js`. A valid form opens the visitor’s email application. It does not store the message or report it as received.
