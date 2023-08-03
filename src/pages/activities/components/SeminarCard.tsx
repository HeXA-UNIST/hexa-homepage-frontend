import Seminar from "@models/seminar/Seminar";
import "@css/activities/SeminarCard.css";

function SeminarCard({ seminar }: { seminar: Seminar }) {
  return (
    <div className="seminar-card">
      <div className="seminar-card__content">
        <div className="seminar-card__content__title">{seminar.title}</div>
        <div className="seminar-card__content__discription">{seminar.content}</div>
        <div className="seminar-card__content__attachments">
            {seminar.attachment.map((attachment) => (
                <a href={attachment.url} className="seminar-card__content__attachments-item">{attachment.name}</a>
            ))}
        </div>
        <div className="seminar-card__content_right">
            <div className="seminar-card__content_right_organizer">{seminar.writerName}</div>
            <div className="seminar-card__content_right_date">{seminar.date}</div>
        </div>
        
      </div>
    </div>
  );
}

export default SeminarCard;
