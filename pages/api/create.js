import prisma from "./../../lib/prisma";

export default async function CreateLinkHandler(req, res) {
  const url = JSON.parse(req.body).url;

  try {
    const newLink = await prisma.links.upsert({
      where: { url: url },
      update: { url: url },
      create: { url: url },
    });

    res.status(200).json({ data: newLink });
  } catch (e) {
    res.status(500).json({ error: e || true });
  }
}
