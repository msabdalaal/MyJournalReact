import locationIcon from "../assets/Fill 219.svg";

export default function Card(card) {
  //   let { imageUrl, googleMapsUrl, title, startDate, endDate, description } =
  //     card;
  return (
    <div className="card">
      <div className="CoverImg">
        <img src={card.imageUrl} alt="image" />
      </div>

      <div className="info">
        <div className="location">
          <img src={locationIcon} alt="LocationIcon" />
          <h2>{card.location}</h2>
          <a href={card.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{card.title}</h1>
        <h2>
          {card.startDate} - {card.endDate}
        </h2>
        <p>{card.description}</p>
      </div>
    </div>
  );
}
