"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import config from "../config";
import Modal from "../components/Modal";

import Item from "../components/Item";
import { useHighlight } from "../contexts/HighlightContext";

const { LINKS } = config;

const Home = () => {
  const { item, setItem, borderColorClassName } = useHighlight();
  const [show, setShow] = useState<boolean>(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const item = LINKS.find(
      (item) => item.key === searchParams?.get("spotlight")
    );
    if (item) {
      setItem(item);
    }
  }, [setItem, searchParams]);

  return (
    <>
      <Header />
      <main className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {LINKS.map((link) => (
          <Item
            key={link.key}
            hoverColor={borderColorClassName}
            linkItem={link}
            selectedItem={item}
            setSelectedItem={setItem}
            setShow={setShow}
          />
        ))}
      </main>
      <Modal isOpen={show} onClose={() => setShow(false)} />
    </>
  );
};

export default Home;
