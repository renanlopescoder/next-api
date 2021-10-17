export default function now(req, res) {
  const date = new Date();
  const format = date.toGMTString();

  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

  res.json({ now: format });
}
