const TitleSpan = ({ text, className }) => {
  const length = text.length;
  const letters = [];

  for (let i = 0; i < length; i++) letters.push(text.charAt(i));

  return (
    <>
      {letters.map((letter, i) => (
        <span key={letter + i} className={`${className} gradient-text`}>
          {letter}
        </span>
      ))}
    </>
  );
};

export default TitleSpan;
