import { useEffect, useState } from 'react';

const Typewriter = ({ texts, typingSpeed = 150, deletingSpeed = 100, pause = 1000 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) return; // Evita erro

    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), pause);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, texts, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="typewriter">
      {`${texts[index].substring(0, subIndex)}`}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;
