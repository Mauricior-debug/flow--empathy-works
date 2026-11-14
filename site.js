/* Enquiry rules for the Book a Leadership Conversation form.
   A static page cannot store a lead. A valid form opens the visitor's
   email application with the message addressed to EmpathyWorks.
   Nothing here reports the message as received. */
(function (root, factory) {
  var api = factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
  root.EmpathyWorks = api;
  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
      api.bindNavigation(document);
      api.bindEnquiryForm(document);
    });
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  var RECIPIENT = "info@leadershipconsultant.co.uk";

  var TOPICS = [
    "One-to-One Leadership Coaching",
    "Organisational Leadership & Consultancy",
    "Leadership Subscription Services",
    "Workplace Diagnostics and Organisational Culture",
    "Leadership and Senior Team Development",
    "Speaking and Keynote Engagements",
    "Workshops and Facilitated Leadership Events",
    "Bespoke Leadership and Organisational Support",
    "Executive Leadership Programme",
    "West Wales Leadership Excellence Hub",
    "Not sure yet"
  ];

  function digits(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function todayISO(date) {
    var d = date || new Date();
    var month = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + month + "-" + day;
  }

  function validateEnquiry(data, today) {
    var errors = {};
    var name = String(data.name || "").trim();
    var email = String(data.email || "").trim();
    var phone = String(data.telephone || "").trim();
    var message = String(data.message || "").trim();
    var intent = data.intent;
    var topic = data.topic;
    var date = data.date || "";
    var time = data.time || "";
    var todayValue = today || todayISO();

    if (name.length < 2) {
      errors.name = "Please tell us your name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter an email address we can reply to.";
    }
    if (phone && digits(phone).length < 10) {
      errors.telephone = "Please enter a telephone number we can call, or leave this blank.";
    }
    if (TOPICS.indexOf(topic) === -1) {
      errors.topic = "Please choose what we can help with.";
    }
    if (intent !== "book" && intent !== "enquiry") {
      errors.intent = "Please choose whether you want to book a conversation or send an enquiry.";
    }
    if (message.length < 20) {
      errors.message = "Please tell us a little about what is happening, in at least a sentence.";
    }
    if (intent === "book") {
      if (!date) {
        errors.date = "Please choose a preferred date.";
      } else if (date < todayValue) {
        errors.date = "Please choose a date that is today or later.";
      }
      if (!time) {
        errors.time = "Please choose a preferred time.";
      }
    } else if (date && date < todayValue) {
      errors.date = "Please choose a date that is today or later.";
    }

    return { ok: Object.keys(errors).length === 0, errors: errors };
  }

  function buildMessage(data) {
    var lines = [
      data.intent === "book"
        ? "I would like to book a leadership conversation."
        : "I would like to send an enquiry.",
      "",
      "Name: " + String(data.name || "").trim(),
      "Email: " + String(data.email || "").trim(),
      "Organisation: " + (String(data.organisation || "").trim() || "Not given"),
      "Telephone: " + (String(data.telephone || "").trim() || "Not given"),
      "Help with: " + (data.topic || ""),
      "Preferred date: " + (data.date || "Not requested"),
      "Preferred time: " + (data.time || "Not requested"),
      "",
      String(data.message || "").trim()
    ];
    return lines.join("\n");
  }

  function buildMailto(data) {
    var subject = data.intent === "book"
      ? "Leadership conversation request"
      : "Enquiry for EmpathyWorks";
    return "mailto:" + RECIPIENT +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(buildMessage(data));
  }

  function readForm(form) {
    var fd = new FormData(form);
    return {
      name: fd.get("name"),
      email: fd.get("email"),
      organisation: fd.get("organisation"),
      telephone: fd.get("telephone"),
      intent: fd.get("intent"),
      topic: fd.get("topic"),
      date: fd.get("date"),
      time: fd.get("time"),
      message: fd.get("message")
    };
  }

  function clearErrors(form) {
    form.querySelectorAll(".field").forEach(function (field) {
      field.classList.remove("has-error");
      var slot = field.querySelector(".field-error");
      if (slot) slot.textContent = "";
      var control = field.querySelector("input, select, textarea");
      if (control) control.removeAttribute("aria-invalid");
    });
  }

  function showErrors(form, errors) {
    Object.keys(errors).forEach(function (key) {
      var control = form.querySelector("[name='" + key + "']");
      if (!control) return;
      var field = control.closest(".field");
      if (field) field.classList.add("has-error");
      control.setAttribute("aria-invalid", "true");
      var slot = field ? field.querySelector(".field-error") : null;
      if (slot) slot.textContent = errors[key];
    });
    var first = form.querySelector(".has-error input, .has-error select, .has-error textarea");
    if (first) first.focus();
  }

  function syncIntent(form) {
    var intent = form.querySelector("[name='intent']");
    var when = form.querySelector("[data-when]");
    if (!intent || !when) return;
    var booking = intent.value === "book";
    when.hidden = !booking;
    when.querySelectorAll("input").forEach(function (input) {
      input.required = booking;
    });
  }

  function bindEnquiryForm(doc) {
    var form = doc.querySelector("[data-enquiry]");
    if (!form) return;
    var date = form.querySelector("[name='date']");
    if (date) date.min = todayISO();
    syncIntent(form);
    var intent = form.querySelector("[name='intent']");
    if (intent) {
      intent.addEventListener("change", function () {
        syncIntent(form);
      });
    }
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = readForm(form);
      var result = validateEnquiry(data, todayISO());
      clearErrors(form);
      var status = form.querySelector("[data-status]");
      if (!result.ok) {
        if (status) status.hidden = true;
        showErrors(form, result.errors);
        return;
      }
      if (status) {
        status.hidden = false;
        var heading = status.querySelector("h2");
        var copy = status.querySelector("p");
        if (heading) heading.textContent = "Your message is ready to send";
        if (copy) {
          copy.textContent = "Your email application should open with this " +
            (data.intent === "book" ? "conversation request" : "enquiry") +
            " addressed to EmpathyWorks. Send that email to complete it. This page does not store the message and cannot confirm it has been received.";
        }
      }
      window.location.href = buildMailto(data);
    });
  }

  function bindNavigation(doc) {
    var toggle = doc.querySelector(".nav-toggle");
    var nav = doc.querySelector("#site-nav");
    if (!toggle || !nav) return;
    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    }
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
    doc.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }

  return {
    RECIPIENT: RECIPIENT,
    TOPICS: TOPICS,
    todayISO: todayISO,
    validateEnquiry: validateEnquiry,
    buildMessage: buildMessage,
    buildMailto: buildMailto,
    bindEnquiryForm: bindEnquiryForm,
    bindNavigation: bindNavigation
  };
});
