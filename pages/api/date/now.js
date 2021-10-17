export default function now(req, res) {
  const date = new Date();
  const format = date.toGMTString();

  res.json({ now: format });
}
