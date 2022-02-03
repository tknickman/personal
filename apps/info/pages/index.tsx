import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import config, { LinkItem } from "../config";
import Modal from "../components/Modal";

import Item from "../components/Item";

const { LINKS } = config;

const Home = ({
  hoverColor,
  selectedItem,
  setSelectedItem,
}: {
  hoverColor: string;
  selectedItem: LinkItem | null;
  setSelectedItem: (item: LinkItem | null) => void;
}) => {
  const [show, setShow] = useState<boolean>(false);
  const { query } = useRouter();

  useEffect(() => {
    const item = LINKS.find((item) => item.key === query.spotlight);
    if (item) {
      setSelectedItem(item);
    }
  }, [setSelectedItem, query.spotlight]);

  return (
    <>
      <Header />
      <main className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {LINKS.map((link) => (
          <Item
            key={link.key}
            hoverColor={hoverColor}
            linkItem={link}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            setShow={setShow}
          />
        ))}
      </main>
      <Modal isOpen={show} onClose={() => setShow(false)} />
    </>
  );
};

export default Home;
