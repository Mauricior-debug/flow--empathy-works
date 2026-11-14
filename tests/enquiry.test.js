const test = require("node:test");
const assert = require("node:assert/strict");
const ew = require("../site.js");

const today = "2026-11-14";

function base(overrides) {
  return Object.assign({
    name: "Steve Example",
    email: "leader@organisation.co.uk",
    organisation: "Harbour Trust",
    telephone: "07850 219310",
    intent: "book",
    topic: "One-to-One Leadership Coaching",
    date: "2026-11-20",
    time: "10:30",
    message: "I would like a confidential space to think through a change in role."
  }, overrides);
}

test("accepts a complete booking", function () {
  const result = ew.validateEnquiry(base(), today);
  assert.equal(result.ok, true);
  assert.deepEqual(result.errors, {});
});

test("accepts an enquiry without a date or time", function () {
  const result = ew.validateEnquiry(base({
    intent: "enquiry",
    date: "",
    time: "",
    topic: "Not sure yet"
  }), today);
  assert.equal(result.ok, true);
});

test("rejects a missing name, a bad email and a short message", function () {
  const result = ew.validateEnquiry(base({
    name: "A",
    email: "not-an-email",
    message: "Too short"
  }), today);
  assert.equal(result.ok, false);
  assert.match(result.errors.name, /name/i);
  assert.match(result.errors.email, /email/i);
  assert.match(result.errors.message, /sentence/i);
});

test("rejects a booking in the past and a booking without a time", function () {
  const past = ew.validateEnquiry(base({ date: "2026-11-01" }), today);
  assert.match(past.errors.date, /today or later/i);
  const noTime = ew.validateEnquiry(base({ time: "" }), today);
  assert.match(noTime.errors.time, /time/i);
});

test("rejects an unknown topic and a partial telephone number", function () {
  const result = ew.validateEnquiry(base({
    topic: "A service we do not offer",
    telephone: "123"
  }), today);
  assert.match(result.errors.topic, /help/i);
  assert.match(result.errors.telephone, /telephone/i);
});

test("allows a blank telephone number", function () {
  const result = ew.validateEnquiry(base({ telephone: "   " }), today);
  assert.equal(result.ok, true);
});

test("builds a mailto to the published address without claiming the message was received", function () {
  const href = ew.buildMailto(base());
  assert.ok(href.startsWith("mailto:info@leadershipconsultant.co.uk"));
  assert.match(decodeURIComponent(href), /Leadership conversation request/);
  assert.match(decodeURIComponent(href), /Harbour Trust/);
  assert.doesNotMatch(href, /received|success/i);
});

test("enquiry subject differs from a booking", function () {
  const href = ew.buildMailto(base({ intent: "enquiry" }));
  assert.match(decodeURIComponent(href), /Enquiry for EmpathyWorks/);
});
