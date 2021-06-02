export const Discounts = ({ title, data }) => {
  const isValidData = data && Array.isArray(data) && data.length;

  const itemsJSX =
    isValidData &&
    data.map(({ id, content, dateOfReceiving }) => (
      <div key={id}>
        <p className="content">{content}</p>
        <p>Опубликовано: {dateOfReceiving}</p>
      </div>
    ));

  return isValidData ? (
    <div>
      <h2>{title}</h2>
      {itemsJSX}
    </div>
  ) : null;
};
