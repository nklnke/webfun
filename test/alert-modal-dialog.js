function ask(question, yes, no) {
	confirm(question) ? yes() : no();
}

ask(
	"choose",
	() => alert("yes"),
  () => alert("no")
)
