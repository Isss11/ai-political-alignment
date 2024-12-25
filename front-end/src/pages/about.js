const About = () => {
  return (
    <div>
      <h2>About Maple Vote</h2>
      <p>
        Maple Vote is a website that helps assist Canadians in determining their
        political alignment. Intead of relying on a series of restrictive
        multiple-choice questions, it let's users enter in their own political
        opinion in text form, and classifies it using machine learning
        techniques. It was originally created as a personal project by Isaiah
        Sinclair to learn more about artificial intelligence, machine learning
        and natural language processing.
      </p>
      <h3>Isaiah Sinclair</h3>
      <p>
        Isaiah is a undergraduate Computer Science student at the Unviersity of
        Guelph, minoring in Economics. He has had a passion for politics since
        the 2011 Canadian election, when he was only eight years old! You can
        learn more about his work at{" "}
        <a href="https://isaiahsinclair.ca/">isaiahsinclair.ca.</a>
      </p>
      <h2>About Maple Vote's Methodology</h2>
      <p>
        Presently, Maple Vote uses a simpler methodology for machine learning.
        The entire dataset consists of text parsed from 2021 Federal Election
        platforms. Then, a bag-of-words approach is used, which essentially
        counts the frequencies of all the words within the text, and creates a
        frequency matrix. After this, a Support Vector Machine model is trained
        using the 4 main national political parties as labels, and the all of
        the words as features. Each word is assigned a weight by the model,
        giving a weight in the direction of a political party. It does not
        consider the semantics of the input text.
      </p>
      <p>
        As may be obvious, the current methodology has its set of weaknesses and
        can be improved on. In the future, more data will be included, such as
        political speeches from the varying political leaders. Additionally,
        leveraging a more advanced machine learning technique that considers the
        semantics of text would be optimal, such as transformers.
      </p>
    </div>
  );
};

export default About;
