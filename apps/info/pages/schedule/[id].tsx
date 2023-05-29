import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Schedule({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#F96F5D" } },
        hideEventTypeDetails: false,
      });
    })();
  });

  return (
    <Cal
      calLink={`tknickman/${id}`}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    />
  );
}

export const getServerSideProps: GetServerSideProps<{
  id: string;
}> = async (context) => {
  const { id } = context.query;

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  if (!id) {
    return {
      notFound: true,
    };
  }

  // fetch the cal.com url to see if it 404's to decide if we should show the page
  const result = await fetch(`https://app.cal.com/tknickman/${id}`);
  if (result.status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: { id },
  };
};
