import prisma from "../../lib/prisma";

export async function getServerSideProps(context) {
  const link = await prisma.links.findUnique({
    where: { id: context.params.id },
  });

  return {
    redirect: {
      destination: !link ? "/" : link.url,
      permanent: false,
    },
  };
}

export default function ShortLink() {
  return "Short Link Redirection Handler Page.";
}
