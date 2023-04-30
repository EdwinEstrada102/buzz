import "./TextInfo.css"

const TextInfo = ({title, content}) => {
  return (
    <div className="text-info">
      <h3>{title}</h3>
      <p>
        {content}
      </p>
    </div>
  );
};

export default TextInfo;
