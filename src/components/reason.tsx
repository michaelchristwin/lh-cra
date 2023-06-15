interface ReasonProps {
  img: string;
  title: string;
  body: string;
}

function Reason({ img, title, body }: ReasonProps) {
  return (
    <div
      className="lg:py-2 py-2 shadow border-0 rounded-[9px] px-[15px] lg:w-[280px] h-[290px] text-center"
      id="card"
    >
      <img
        src={img}
        className="block mx-auto"
        alt="..."
        id="card-img"
        width={85}
        height={85}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
}

export default Reason;
