import whiteArrow from "../assets/whiteArrow.svg";
import discord from "../assets/discord.svg";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is Push Chain?",
    answer: `Push Chain is a shared state blockchain for universal
              applications. It is designed to allow transactions from any chain
              (ETH, Solana, EVM, non-EVM), has 1s fast finality and has true
              scalability (read and write throughput increases as the number of
              nodes increases).
               It introduces some ground breaking innovations
              such as consumer txs (order not important), parallel validators
              and dynamic sharding and universal smart contracts. The result is
              a layer 1 with the ability to become a shared settlement layer for
              all L1s 🤝 L2s 🤝 L3.`,
    isOpen: false,
  },
  {
    id: 2,
    question: "How does Push Chain work?",
    answer: `Push Chain is a sharded, Proof-of-Stake (PoS) blockchain that features different types of nodes—validators, storage nodes, and archival nodes—each optimized for specific roles and responsibilities to ensure high efficiency. This design gives the chain fast finality of less than one second.
Push Chain also introduces several key innovations in web3. At launch, these include consumer transactions (these are txs where order is not critical), Push ID, which maps multiple EVM and non-EVM accounts to a single user and wallet and fees abstraction.`,
    isOpen: false,
  },
  {
    id: 3,
    question: "Why is Push Chain unique for users?",
    answer: `Push Chain addresses specific gaps in the existing blockchains, such as interoperability, shared app experiences, enabling new app experiences, and scalability. While existing blockchains are robust, they operate in their own eco-system and an aggregator to unite these chains are needed.
Push Chain’s focus is on being a shared state chain for universal applications acting as a unifying layer where all chains can come together and use PC as universal hub or do settlement between them.`,
    isOpen: false,
  },
  {
    id: 4,
    question: "How do I get involved with Push Chain Grants?",
    answer: `While we are thrilled with the early interest coming from developers to build universal apps, we are still in the governance phase for ratifying our evolution from Push Protocol to Push Chain and hence do not have a grants program now.
This will change very soon once the community approves of Push Chain! Meanwhile, to frontrun other grantees, please drop us an email at team@push.org with the subject line as Grant MEOW and your app idea. Or, simply follow @pushprotocol for more updates around the grants program and its release.`,
    isOpen: false,
  },
  {
    id: 5,
    question: "What will happen to Push Protocol?",
    answer: `
Today's push notification and chat protocols will benefit significantly from being built on top of Push Chain. A dedicated section of the team will focus on maintaining and enhancing these protocols, ensuring they remain the de-facto standard in their respective domains.
By aligning with Push Chain, notifications and chat sent through the protocols will be processed as transactions on the chain. This integration not only enables these protocols to accrue value but also marks the beginning of a new chapter in their evolution, further enhancing their utility and impact within the web3 ecosystem.`,
    isOpen: false,
  },
];

export const FAQ = () => {
  const [faqs, setFaqs] = useState(faqData);

  const toggleFaq = (id:number) => {
    const updatedFaqs = faqs.map((faq) =>
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
    );
    setFaqs(updatedFaqs);
  };

  return (
    <>
      <div className="p-40 mt-20 flex justify-between">
        <div>
          <h3 className="text-black text-4xl font-bold">
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h3>
          <button className="flex items-center gap-2 rounded-xl px-5 py-3 text-white bg-[#5865F2] text-sm mt-5">
            <img src={discord} alt="whiteArrow" className="w-5" />
            Ask us on Discord
            <img src={whiteArrow} alt="whiteArrow" className="w-5" />
          </button>
        </div>
        <div className="w-[60%] p-3">
          {faqs.map((que) => (
            <div onClick={() => toggleFaq(que.id)} key={que.id} className="border-b pb-3 mb-5 cursor-pointer">
              <h3 className="font-semibold text-xl flex items-center justify-between">
                {que.question}
                {que.isOpen ? <FiMinus size={22} className="cursor-pointer" /> : <GoPlus size={22} className="cursor-pointer" />}
              </h3>
              {que.isOpen && (
                <div className="font-light pt-5">{que.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
